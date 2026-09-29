import { CursorWingTrail } from './components/CursorWingTrail';
import { SiteBanner } from './components/SiteBanner';
import { SideMenu } from './components/SideMenu';

export default function App() {
  return (
    <div className="relative mx-auto my-2 box-border w-[calc(100%-16px)] max-w-[1100px] overflow-visible rounded-xl border-2 border-sweet-rose bg-cream-white/[0.92] px-[10px] pb-7 pt-3 outline outline-2 outline-offset-[3px] outline-sweet-rose sm:my-3 sm:rounded-[14px] sm:px-4 sm:pb-10 sm:pt-5 sm:outline-offset-4 lg:my-4 lg:px-4 lg:pb-12 lg:pt-6">
      <CursorWingTrail />
      <SiteBanner />
      <SideMenu />
    </div>
  );
}
