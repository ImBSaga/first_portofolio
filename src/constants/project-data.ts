type Project = {
  name: string;
  description: string;
  skills: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projectData: Project[] = [
  {
    name: 'Call Analytics Dashboard App',
    description:
      'A comprehensive call analytics dashboard built with Next.js, featuring real-time data visualization, call volume tracking, and performance metrics analysis. Integrated with modern charting libraries for actionable insights.',
    skills: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Lucide React',
      'Shadcn UI',
    ],
    githubUrl: 'https://github.com/ImBSaga/call-analytics-dashboard-app',
    liveUrl: 'https://call-analytics-dashboard-app.vercel.app',
  },
  {
    name: 'Restaurant Discovery & Food Ordering App',
    description:
      'A modern, full-featured restaurant discovery and online food ordering platform with AI-powered recommendations, smart search with filters, interactive shopping cart, multi-restaurant orders, and real-time checkout flow.',
    skills: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS 4',
      'Redux Toolkit',
      'TanStack Query',
      'Axios',
      'Shadcn UI',
    ],
    githubUrl: 'https://github.com/ImBSaga/restaurant-app',
    liveUrl: 'https://restaurant-app-theta-sepia.vercel.app',
  },
  {
    name: 'Full-Featured Social Media Web App',
    description:
      'A modern social networking platform with user authentication, customizable profiles, follow/unfollow system, post creation/liking/commenting/sharing, personalized infinite-scroll timeline, and real-time updates.',
    skills: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'Shadcn UI',
    ],
    githubUrl: 'https://github.com/ImBSaga/social-media-app',
    liveUrl: 'https://social-media-app-pi-five.vercel.app',
  },
  {
    name: 'Library Management & Book Lending App',
    description:
      'A complete library management system with user authentication (JWT + role-based access), book browsing/search/filtering, borrowing cart/checkout, loan history, and user profiles with smooth animations.',
    skills: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS 4',
      'Radix UI',
      'Framer Motion',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    githubUrl: 'https://github.com/ImBSaga/library-app',
    liveUrl: 'https://library-app-zeta-beige.vercel.app',
  },
];
