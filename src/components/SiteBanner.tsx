import { BannerMarquee } from './BannerMarquee';

export function SiteBanner() {
  return (
    <header className="relative mb-4 box-border overflow-visible rounded-[14px] bg-banner-bg sm:mb-5 sm:rounded-2xl lg:mb-6 lg:rounded-[18px]">
      <img
        src="/assets/icons/left_banner.gif"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute -left-5 -top-4 z-10 block h-[calc(100%+1.5rem)] w-auto max-w-none object-contain object-left-top [image-rendering:pixelated]"
      />

      <div className="relative flex min-h-[clamp(120px,30vw,210px)] items-center justify-center overflow-hidden rounded-[inherit] px-16 pb-14 pt-4 sm:min-h-[170px] sm:px-20 lg:min-h-[200px] lg:px-24">
        <h1 className="w-full text-center font-kawaii text-[clamp(1.15rem,4.2vw,2.75rem)] leading-[1.1] tracking-[0.5px] text-[#e6007e] [text-shadow:2px_2px_0px_#ffffff] sm:text-[clamp(1.5rem,3.8vw,2.75rem)] sm:tracking-wide lg:text-[2.75rem] lg:tracking-[2px]">
          bouquetsbysha
        </h1>
        <BannerMarquee />
      </div>
    </header>
  );
}
