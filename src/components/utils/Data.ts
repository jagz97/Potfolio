import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Fingerprint,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Travel 2 Connect',
    techStack: 'NodeJS, Javascript, Express, React, RestAPI, MYsql',
    imageUrl: 't2c.png',
    href: 'https://github.com/jagz97/T2C_SeniorProject',
  },
  {
    id: 2,
    title: 'Airport Runway Explorer',
    techStack:
      'MongoDB, ReactJS, Atlas, Atlas App, Atlas Charts',
    imageUrl: 'airport.png',
    href: 'https://github.com/vivekkoya/157A_AirportsDB',
  },
  {
    id: 3,
    title: 'Amazon Clone',
    techStack:
      'Flask, Python, Jinja, SQlite, Bootstrap, HTML5',
    imageUrl: 'amazon-clone.jpeg',
    href: 'https://github.com/jagz97/Cmpe131-Team-6',
  },
  {
    id: 4,
    title: ' Carbon Footprint Tracker',
    techStack: 'Swift, SQlite',
    imageUrl: 'cabronfoot.png',
    href: 'https://github.com/jagz97/Carbon_Footprint_Tracker',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Cryptoid',
    techStack: 'NodeJS, React, CSS, Bootstrap',
    icon: 'fingerprint',
    href: 'https://github.com/jagz97/Cryto_172',
  },
  {
    id: 2,
    title: 'Study Zoom',
    techStack: 'Django, VOIP API, VanilaJS, HTML, CSS',
    icon: 'lottery',
    href: 'https://github.com/jagz97/Zoom_148',
  },
  {
    id: 3,
    title: 'Receiptfy',
    techStack: 'Flask, SQlite React, Jinja, API, HTML, CSS',
    icon: 'share',
    href: 'https://github.com/jagz97/Cmpe133-Project',
  },

  {
    id: 4,
    title: 'Mancala Board Game',
    techStack: 'Java, Design Patterns, Java GUI, Object Oriented Programming',
    icon: 'game',
    href: 'https://github.com/jagz97/Team4-Project',
  },
];







