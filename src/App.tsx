import { CursorWingTrail } from './components/CursorWingTrail';
import { InfoColumn } from './components/InfoColumn';
import { MainColumn } from './components/MainColumn';
import { SideMenu } from './components/SideMenu';
import { SiteBanner } from './components/SiteBanner';
import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <div className="relative mx-auto my-2 box-border w-[calc(100%-16px)] max-w-[1100px] overflow-visible rounded-xl border-2 border-sweet-rose bg-cream-white/[0.92] px-[10px] pb-7 pt-3 outline outline-2 outline-offset-[3px] outline-sweet-rose sm:my-3 sm:rounded-[14px] sm:px-4 sm:pb-10 sm:pt-5 sm:outline-offset-4 lg:my-4 lg:px-4 lg:pb-12 lg:pt-6">
      <CursorWingTrail />

      <button
        type="button"
        className="absolute right-2 top-2 z-20 box-border h-9 w-9 rounded-lg border-2 border-sweet-rose/50 bg-banner-bg sm:right-3 sm:top-3 sm:h-10 sm:w-10"
        aria-label="Toggle dark mode"
      />

      <SiteBanner />
      <TopBar />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[200px_minmax(0,1fr)_220px] lg:items-start lg:gap-4">
        <SideMenu />
        <MainColumn />
        <InfoColumn />
      </div>
    </div>
  );
}
