import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CampaignFinance } from './pages/CampaignFinance';
import { Timeline } from './pages/Timeline';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finance" element={<CampaignFinance />} />
      <Route path="/epstein-timeline" element={<Timeline />} />
    </Routes>
  );
}

export default App;

