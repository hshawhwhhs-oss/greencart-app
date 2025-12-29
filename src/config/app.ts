// App Configuration - Change these values to rebrand the app
export const APP_CONFIG = {
  // App Name & Branding
  name: 'HSCianTV',
  shortName: 'HSCianTV',
  description: 'HSC শিক্ষার্থীদের জন্য বিনামূল্যে ভিডিও লেসন',
  
  // Logo & Icons - All icons use this single image
  logo: '/logo.jpg',
  
  // Theme Colors
  themeColor: '#0f0f0f',
  backgroundColor: '#0f0f0f',
  
  // Social Links
  social: {
    facebookPage: 'https://facebook.com/hsciantv',
    facebookGroup: 'https://facebook.com/groups/hsciantv',
    youtube: 'https://youtube.com/@hsciantv',
    whatsapp: 'https://wa.me/+8801234567890',
    telegram: 'https://t.me/hsciantv',
  },
  
  // External Links
  externalLinks: {
    admissionCalendar: 'https://admission-calendar.com',
    questionAnalysis: 'https://addresacademy.com/table-qna/?university=DU&year=2025',
  },
  
  // PWA Settings
  pwa: {
    display: 'standalone' as const,
    orientation: 'portrait-primary' as const,
  }
};
