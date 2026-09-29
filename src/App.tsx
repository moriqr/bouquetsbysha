import { CursorWingTrail } from './components/CursorWingTrail';
import { SiteBanner } from './components/SiteBanner';
import { SideMenu } from './components/SideMenu';

export default function App() {
  return (
    <div className="page-wrapper">
      <CursorWingTrail />
      <SiteBanner />
      <SideMenu />
    </div>
  );
}
