const experience1Src = '/images/image-experience1.png';
const experience2Src = '/images/image-experience2.png';
const experience3Src = '/images/image-experience3.png';
const experience4Src = '/images/image-experience4.png';
const experience5Src = '/images/image-experience5.png';
const experience6Src = '/images/image-experience6.png';

type Experience = {
  imageSrc: string;
  name: string;
  skills: string[];
  description: string;
};

export const experienceData: Experience[] = [
  {
    imageSrc: experience1Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description:
      'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
  },
  {
    imageSrc: experience2Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description:
      'Private hospital in the city of Padang that provides special surgical services.',
  },
  {
    imageSrc: experience3Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
  },
  {
    imageSrc: experience4Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)  of experience as an internet solution provider company',
  },
  {
    imageSrc: experience5Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description: 'UKUR is a constructor and interior marketplace in Indonesia.',
  },
  {
    imageSrc: experience6Src,
    name: 'Landing Page',
    skills: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
  },
];
