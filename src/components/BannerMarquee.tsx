import { socialLinks, type SocialLink } from '../data/socialLinks';
import { useBannerMarquee } from '../hooks/useBannerMarquee';

type MarqueeSetProps = {
  links: SocialLink[];
  duplicate?: boolean;
};

function MarqueeSet({ links, duplicate = false }: MarqueeSetProps) {
  return (
    <div
      data-marquee-set
      className={`flex flex-[0_0_auto] items-center gap-[clamp(8px,2.5vw,14px)] pr-[clamp(8px,2.5vw,14px)]${duplicate ? ' motion-reduce:hidden' : ''}`}
      aria-hidden={duplicate ? true : undefined}
    >
      {links.map((link) => (
        <a
          key={`${duplicate ? 'duplicate-' : ''}${link.label}`}
          data-marquee-social-link
          className="relative z-[2] block flex-[0_0_auto] leading-[0] transition-transform duration-200 ease-in-out hover:scale-[1.06] focus-visible:scale-[1.06]"
          href={link.href}
          aria-label={link.label}
          tabIndex={duplicate ? -1 : undefined}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <img
            src={link.image}
            alt=""
            width={120}
            height={32}
            decoding="async"
            draggable={false}
            className="block h-8 w-auto max-w-none object-contain"
          />
        </a>
      ))}
    </div>
  );
}

export function BannerMarquee() {
  const {
    marqueeRef,
    trackRef,
    isPaused,
    handleMarqueeClick,
    handleTrackPointerDown,
    handleTrackClick,
  } = useBannerMarquee();

  return (
    <div
      ref={marqueeRef}
      className="absolute bottom-1.5 left-14 right-2.5 z-10 box-border h-10 overflow-hidden lg:bottom-2 lg:left-16 lg:right-3.5"
      aria-label="Social links"
      onClick={handleMarqueeClick}
    >
      <div
        ref={trackRef}
        className={`flex h-full w-max items-center will-change-transform motion-reduce:h-auto motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-start motion-reduce:animate-none animate-banner-marquee${isPaused ? ' [animation-play-state:paused]' : ''}`}
        onPointerDown={handleTrackPointerDown}
        onClick={handleTrackClick}
      >
        <MarqueeSet links={socialLinks} />
        <MarqueeSet links={socialLinks} duplicate />
      </div>
    </div>
  );
}
