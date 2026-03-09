type Project = {
  name: string;
  description: string;
  skills: string[];
  githubUrl: string;
};

export const projectData: Project[] = [
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
  },
];
