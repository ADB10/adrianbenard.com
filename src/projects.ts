// src/project.ts
export interface Project {
  name: string;
  languages: string[];
  type: string;
  year: number;
  description: string;
  categories: string[];
  externalLink?: string;
}

export const PROJECTS = [
  {
    "name": "adrianbenard.com",
    "languages": ["ReactJS", "TailwindCSS"],
    "type": "Personal",
    "year": 2024,
    "description": "Created a personal website using ReactJS and TailwindCSS.",
    "categories": ["Web"],
    "externalLink": "https://adrianbenard.com/",
  },
  {
    "name": "Raid 5 / 10 / 50",
    "languages": ["Java", "C"],
    "type": "School",
    "year": 2018,
    "description": "Developed a project focusing on RAID configurations, demonstrating deep understanding of data storage solutions and their implementation in Java and C.",
    "categories": ["Software"]
  },
  {
    "name": "Instant message system",
    "languages": ["Java", "MySQL"],
    "type": "School",
    "year": 2019,
    "description": "Created an instant messaging system with real-time communication features, utilizing Java for the backend and MySQL for data management.",
    "categories": ["Software", "Web"]
  },
  {
    "name": "Human position detection",
    "languages": ["Artificial Intelligence", "Javascript", "NodeJS", "CSS", "HTML"],
    "type": "School",
    "year": 2019,
    "description": "Developed a real-time system for human position detection using a combination of AI techniques and web technologies, including JavaScript and NodeJS.",
    "categories": ["Artificial Intelligence", "Web"]
  },
  {
    "name": "president.io",
    "languages": ["NodeJS", "Javascript", "HTML", "CSS"],
    "type": "Personal",
    "year": 2020,
    "description": "Developed a multiplayer card game (The President) during COVID-19 containment using NodeJS. A new version is in progress using ReactJS for enhanced features.",
    "categories": ["Web"]
  },
  {
    "name": "a-carre.fr",
    "languages": ["Divi", "WordPress"],
    "type": "Freelance",
    "year": 2020,
    "description": "Integrated a showcase site using DIVI and WordPress, allowing the client to add and modify content easily.",
    "categories": ["Web"],
    "externalLink": "https://a-carre.fr/",
  },
  {
    "name": "romain-rolland.fr",
    "languages": ["Divi", "WordPress"],
    "type": "Freelance",
    "year": 2020,
    "description": "Created a ticket sales site for an event using DIVI and WordPress, enabling the client to manage events and sales through the admin panel.",
    "categories": ["Web"]
  },
  {
    "name": "Embedded Software Developer",
    "languages": ["C", "C++"],
    "type": "Work",
    "year": 2020,
    "description": "Worked at LGM Ingénierie on the refactoring and development of embedded software architectures, utilizing C and C++ for efficient and reliable performance. Responsibilities included redesigning software architecture to enhance performance and stability.",
    "categories": ["Software"]
  },
  {
    "name": "Automatic face blurring on video",
    "languages": ["Python", "Artificial Intelligence"],
    "type": "School",
    "year": 2021,
    "description": "Developed a system for automatic face blurring in videos using Python and advanced AI techniques, focusing on privacy and data protection.",
    "categories": ["Artificial Intelligence", "Software"]
  },
  {
    "name": "nabucholedinosaure.fr",
    "languages": ["WordPress", "Divi"],
    "type": "Freelance",
    "year": 2021,
    "description": "Created a blog using DIVI and WordPress, providing the client with the ability to manage articles and customize the blog content.",
    "categories": ["Web"]
  },
  {
    "name": "School project",
    "languages": ["HTML", "CSS", "Javascript", "PHP", "Symfony"],
    "type": "School",
    "year": 2021,
    "description": "Developed a classic e-commerce site using the Symfony framework, managing user accounts, shopping carts, and purchase transactions.",
    "categories": ["Web"]
  },
  {
    "name": "Python Developer",
    "languages": ["Python"],
    "type": "Work",
    "year": 2021,
    "description": "Worked at IRIT (Institut de Recherche en Informatique de Toulouse) on various Python-based projects, focusing on backend development and implementing efficient, scalable solutions.",
    "categories": ["Software"]
  },
  {
    "name": "scoache.com",
    "languages": ["HTML", "CSS", "Javascript", "PHP", "WordPress"],
    "type": "Freelance",
    "year": 2022,
    "description": "Integrated a showcase site for training services using PHP and WordPress, enabling clients to manage and modify training content and reviews.",
    "categories": ["Web"],
    "externalLink": "https://scoache.com/",
  },
  {
    "name": "Signal Processing Engineer",
    "languages": ["Python"],
    "type": "Work",
    "year": 2022,
    "description": "Worked at ArianeGroup on signal processing research and development, focusing on cutting-edge techniques and Python-based implementations for data analysis. Responsibilities included investigating state-of-the-art event-based cameras and developing algorithms for object detection and tracking.",
    "categories": ["Artificial Intelligence", "Software"]
  },
  {
    "name": "Artificial Intelligence Engineer",
    "languages": ["Python", "React", "Flask"],
    "type": "Work",
    "year": 2023,
    "description": "Worked at Genics as a Artificial Intelligence Engineer, leveraging Python to develop and optimize algorithms for real-time image and video processing. Responsibilities included the development of a phenotyping software system for monitoring shrimp, implementing computer vision deep learning models to enhance accuracy and efficiency.",
    "categories": ["Artificial Intelligence", "Software", "Web"]
  }
];