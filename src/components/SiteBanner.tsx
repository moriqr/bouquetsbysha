import { BannerMarquee } from './BannerMarquee';

export function SiteBanner() {
  return (
    <header className="site-banner">
      <div className="banner-left-border" aria-hidden="true">
        <img
          className="banner-left-border-art"
          src="/assets/icons/left_banner.gif"
          alt=""
          decoding="async"
        />
      </div>

      <div className="banner-top">
        <h1 className="banner-title">bouquetsbysha</h1>
        <BannerMarquee />
      </div>

      <img
        className="banner-icon"
        src="/assets/icons/crochet_banner.png"
        alt=""
        width={320}
        height={260}
        decoding="async"
      />
    </header>
  );
}
