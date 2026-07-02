import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import FounderDashboard from './pages/founder/FounderDashboard';
import AdminPanel from './pages/admin/AdminPanel';
import InvestorPortfolio from './pages/investor/InvestorPortfolio';
import StartupDiscovery from './pages/investor/StartupDiscovery';
import InvestorWatchlist from './pages/investor/InvestorWatchlist';
import StartupInvestmentProfile from './pages/investor/StartupInvestmentProfile';
import MentorInvestorDiscovery from './pages/network/MentorInvestorDiscovery';
import Messaging from './pages/network/Messaging';
import EventDashboard from './pages/events/EventDashboard';
import EventCalendar from './pages/events/EventCalendar';
import EventRegistration from './pages/events/EventRegistration';
import MilestoneTracker from './pages/milestones/MilestoneTracker';
import DocumentVault from './pages/documents/DocumentVault';
import StartupEvaluation from './pages/evaluation/StartupEvaluation';
import AIIntelligenceDashboard from './pages/intelligence/AIIntelligenceDashboard';
import StitchGallery from './pages/StitchGallery';
import StitchViewer from './pages/StitchViewer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/stitch" element={<StitchGallery />} />
      <Route path="/stitch/:pageId" element={<StitchViewer />} />
      <Route path="/founder/dashboard" element={<FounderDashboard />} />
      <Route path="/intelligence" element={<AIIntelligenceDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/investor/portfolio" element={<InvestorPortfolio />} />
      <Route path="/investor/discovery" element={<StartupDiscovery />} />
      <Route path="/investor/watchlist" element={<InvestorWatchlist />} />
      <Route path="/investor/startup/:id" element={<StartupInvestmentProfile />} />
      <Route path="/network" element={<MentorInvestorDiscovery />} />
      <Route path="/network/messages" element={<Messaging />} />
      <Route path="/events" element={<EventDashboard />} />
      <Route path="/events/calendar" element={<EventCalendar />} />
      <Route path="/events/:id" element={<EventRegistration />} />
      <Route path="/milestones" element={<MilestoneTracker />} />
      <Route path="/documents" element={<DocumentVault />} />
      <Route path="/evaluation/:id" element={<StartupEvaluation />} />
    </Routes>
  );
}
