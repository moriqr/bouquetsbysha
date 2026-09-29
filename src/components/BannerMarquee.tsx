import { socialLinks, type SocialLink } from '../data/socialLinks';
import { useBannerMarquee } from '../hooks/useBannerMarquee';

type MarqueeSetProps = {
  links: SocialLink[];
  duplicate?: boolean;
};

function MarqueeSet({ links, duplicate = false }: MarqueeSetProps) {
  return (
    <div
      className="banner-marquee-set"
      aria-hidden={duplicate ? true : undefined}
    >
      {links.map((link) => (
        <a
          key={`${duplicate ? 'duplicate-' : ''}${link.label}`}
          className="banner-social-link"
          href={link.href}
          aria-label={link.label}
          tabIndex={duplicate ? -1 : undefined}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <img src={link.image} alt="" width={120} height={40} decoding="async" draggable={false} />
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
      className={`banner-marquee${isPaused ? ' is-paused' : ''}`}
      aria-label="Social links"
      onClick={handleMarqueeClick}
    >
      <div
        ref={trackRef}
        className="banner-marquee-track"
        onPointerDown={handleTrackPointerDown}
        onClick={handleTrackClick}
      >
        <MarqueeSet links={socialLinks} />
        <MarqueeSet links={socialLinks} duplicate />
      </div>
    </div>
  );
}
