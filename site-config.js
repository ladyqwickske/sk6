/**
 * cCc SK6 Site Configuration
 */

const SITE_CONFIG = {
  // Clan Identity
  clanName: 'cCc SK6',
  clanAbbr: 'sk6',

  // Branding (customize later)
  primaryColor: '#ffb300',
  secondaryColor: '#232526',
  favicon: 'favicon.png',

  // Authentication
  // TODO: Replace with your Google OAuth Client ID
  googleClientId: '47674606892-0m90hd0cd01kijo69ssuqtn1j3igp32i.apps.googleusercontent.com',

  // Members hidden from progress stats when not logged in
  maskedMembers: [],

  // Navigation Pages
  pages: [
    { name: 'Dashboard', file: 'dashboard.html', icon: '📊' },
    { name: 'Events', file: 'events.html', icon: '⚔️' },
    { name: 'Members', file: 'members.html', icon: '👥' },
    { name: 'Warnings', file: 'warnings.html', icon: 'warning.png' },
    { name: 'Calendar', file: 'calendar.html', icon: '📅' }
  ]
};
