type Career = {
  company: string;
  role: string;
  date: string;
  details: string[];
};

export const careerData: Career[] = [
  {
    company: 'PT. Asia e-Services',
    role: 'Full Stack Developer',
    date: 'Jan 2023 – Present',
    details: [
      'Developed and maintained responsive web interfaces using React.js, Next.js, and Tailwind CSS.',
      'Built reusable UI components to improve development efficiency and maintain consistency across projects.',
      'Integrated frontend with RESTful APIs, ensuring seamless data flow and functionality.',
      'Customized ERP systems (Odoo) using Python to meet business-specific requirements.',
      'Collaborated with cross-functional teams to deliver scalable, high-quality solutions.',
    ],
  },
  {
    company: 'London Success Academy',
    role: 'Software Developer Intern (Remote / UK-based)',
    date: 'Mar 2026',
    details: [
      'Participated in a competitive Career Accelerator Internship Program focused on real-world software and web development projects.',
      'Gained hands-on experience with modern development practices, mentorship from industry professionals, and collaborative project work.',
      'Enhanced skills in frontend technologies, problem-solving, and professional software development.',
    ],
  },
  {
    company: 'Android Community CCIT-FTUI',
    role: 'Android Development Mentor',
    date: 'Sep 2020 – Aug 2021',
    details: [
      'Mentored students in Android development fundamentals, covering core concepts and best practices.',
      'Assisted in UI implementation and debugging to ensure smooth app performance.',
      'Guided students through project-based learning to build real-world Android applications.',
    ],
  },
];
