import { useNavigate } from 'react-router-dom';

export function useAppActions() {
  const navigate = useNavigate();

  const notify = (message) => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  return {
    navigate,
    notify,
    login: () => navigate('/login'),
    getStarted: () => navigate('/register'),
    launchStartup: () => navigate('/register'),
    joinAsMentor: () => navigate('/network'),
    uploadPitchDeck: () => navigate('/help'),
    bookMentorSession: () => navigate('/network/messages'),
    applyForProgram: () => navigate('/events'),
    updateMetrics: () => navigate('/intelligence'),
    applyForFunding: () => navigate('/investor/startup/nexus-ai'),
    exportReport: () => notify('Report exported successfully!'),
    createEvent: () => notify('Event creation wizard opened.'),
    newMilestone: () => notify('New milestone form opened.'),
    newFolder: () => notify('New folder created.'),
    uploadFile: () => notify('File upload started.'),
    downloadDoc: (name) => notify(`Downloading ${name}...`),
    shareDoc: (name) => notify(`Share link copied for ${name}.`),
    deleteDoc: (name) => notify(`${name} moved to trash.`),
    investNow: () => notify('Opening term sheet dialog...'),
    watchStartup: () => notify('Added to watchlist!'),
    connect: (name) => notify(`Connection request sent to ${name}.`),
    registerEvent: () => notify('Successfully registered for this event!'),
    shareEvent: () => notify('Event link copied to clipboard.'),
    approveStartup: () => {
      notify('Startup approved for incubation!');
      navigate('/admin');
    },
    rejectStartup: () => notify('Candidate rejected.'),
    requestMoreInfo: () => notify('Info request sent to founder.'),
    manageStartup: (id) => navigate(`/evaluation/${id}`),
    viewPortfolioStartup: (id) => navigate(`/investor/startup/${id}`),
    manageAlerts: () => notify('Alert preferences updated.'),
    sendMessage: () => notify('Message sent!'),
    viewAllEvents: () => navigate('/events'),
    viewAllUpcoming: () => navigate('/events'),
    runIntelligenceReport: () => notify('Generating full AI report...'),
  };
}
