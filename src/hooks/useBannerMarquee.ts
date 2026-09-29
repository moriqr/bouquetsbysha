import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from 'react';
import { socialLinks } from '../data/socialLinks';

export function useBannerMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const buildEndlessTrack = useCallback(() => {
    const marquee = marqueeRef.current;
    const track = trackRef.current;
    if (!marquee || !track) {
      return;
    }

    const sets = track.querySelectorAll('[data-marquee-set]');
    sets.forEach((set, index) => {
      if (index >= 2) {
        set.remove();
      }
    });

    const templateSet = track.querySelector('[data-marquee-set]');
    if (!templateSet) {
      return;
    }

    const setWidth = templateSet.getBoundingClientRect().width;

    while (track.scrollWidth < marquee.offsetWidth * 3 && setWidth > 0) {
      track.appendChild(templateSet.cloneNode(true));
    }

    track.querySelectorAll('[data-marquee-social-link]').forEach((linkEl, index) => {
      const link = socialLinks[index % socialLinks.length];
      if (!(linkEl instanceof HTMLAnchorElement)) {
        return;
      }

      linkEl.href = link.href;
      linkEl.setAttribute('aria-label', link.label);

      if (link.href.startsWith('http')) {
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
      } else {
        linkEl.removeAttribute('target');
        linkEl.removeAttribute('rel');
      }
    });

    if (setWidth > 0) {
      track.style.setProperty('--marquee-loop-width', `${setWidth}px`);
      track.style.setProperty(
        '--marquee-duration',
        `${Math.max(14, setWidth / 58)}s`,
      );
    }
  }, []);

  useLayoutEffect(() => {
    buildEndlessTrack();
  }, [buildEndlessTrack]);

  useEffect(() => {
    window.addEventListener('load', buildEndlessTrack);
    window.addEventListener('resize', buildEndlessTrack);

    return () => {
      window.removeEventListener('load', buildEndlessTrack);
      window.removeEventListener('resize', buildEndlessTrack);
    };
  }, [buildEndlessTrack]);

  useEffect(() => {
    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      const marquee = marqueeRef.current;
      if (!marquee || !marquee.contains(event.target as Node)) {
        setIsPaused(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const pauseMarquee = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeMarquee = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleMarqueeClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as Element;
      if (!target.closest('[data-marquee-social-link]')) {
        resumeMarquee();
      }
    },
    [resumeMarquee],
  );

  const handleTrackPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if ((event.target as Element).closest('[data-marquee-social-link]')) {
        pauseMarquee();
      }
    },
    [pauseMarquee],
  );

  const handleTrackClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const link = (event.target as Element).closest('[data-marquee-social-link]');
    if (link instanceof HTMLAnchorElement && link.getAttribute('href') === '#') {
      event.preventDefault();
    }
  }, []);

  return {
    marqueeRef,
    trackRef,
    isPaused,
    handleMarqueeClick,
    handleTrackPointerDown,
    handleTrackClick,
  };
}
