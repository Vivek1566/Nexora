import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MarketingPage from './pages/MarketingPage';
import AuthPage from './pages/AuthPage';
import FounderDashboard from './pages/founder/FounderDashboard';
import AdminPanel from './pages/admin/AdminPanel';
import InvestorPortfolio from './pages/investor/InvestorPortfolio';
import StartupDiscovery from './pages/investor/StartupDiscovery';
import StartupInvestmentProfile from './pages/investor/StartupInvestmentProfile';
import MentorInvestorDiscovery from './pages/network/MentorInvestorDiscovery';
import Messaging from './pages/network/Messaging';
import EventDashboard from './pages/events/EventDashboard';
import EventCalendar from './pages/events/EventCalendar';
import EventRegistration from './pages/events/EventRegistration';
import StartupEvaluation from './pages/evaluation/StartupEvaluation';
import AIIntelligenceDashboard from './pages/intelligence/AIIntelligenceDashboard';
import HelpCenter from './pages/help/HelpCenter';
import StartupWorkspacePage from './pages/startup/StartupWorkspacePage';
import CommunityPage from './pages/community/CommunityPage';
import AIAssistantPage from './pages/ai/AIAssistantPage';
import ProfilePage from './pages/ProfilePage';
import StitchGallery from './pages/StitchGallery';
import StitchViewer from './pages/StitchViewer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<MarketingPage section="about" />} />
      <Route path="/features" element={<MarketingPage section="features" />} />
      <Route path="/pricing" element={<MarketingPage section="pricing" />} />
      <Route path="/showcase" element={<MarketingPage section="showcase" />} />
      <Route path="/contact" element={<MarketingPage section="contact" />} />
      <Route path="/faq" element={<MarketingPage section="faq" />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="register" />} />
      <Route path="/forgot-password" element={<AuthPage mode="forgot-password" />} />
      <Route path="/stitch" element={<StitchGallery />} />
      <Route path="/stitch/:pageId" element={<StitchViewer />} />
      <Route path="/founder/dashboard" element={<FounderDashboard />} />
      <Route path="/workspace" element={<StartupWorkspacePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/ai" element={<AIAssistantPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/intelligence" element={<AIIntelligenceDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/investor/portfolio" element={<InvestorPortfolio />} />
      <Route path="/investor/discovery" element={<StartupDiscovery />} />
      <Route path="/investor/startup/:id" element={<StartupInvestmentProfile />} />
      <Route path="/network" element={<MentorInvestorDiscovery />} />
      <Route path="/network/messages" element={<Messaging />} />
      <Route path="/events" element={<EventDashboard />} />
      <Route path="/events/calendar" element={<EventCalendar />} />
      <Route path="/events/:id" element={<EventRegistration />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/evaluation/:id" element={<StartupEvaluation />} />
    </Routes>
  );
}
