import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaLinkedinIn,
  FaLinux,
  FaMapMarkerAlt,
  FaPhone,
  FaReact
} from 'react-icons/fa';
import {
  SiDotnet,
  SiDjango,
  SiExpress,
  SiJquery,
  SiJsonwebtokens,
  SiMongodb,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiSharp,
  SiSqlite
} from 'react-icons/si';
import projectPlaceholder from '../assets/Img/aws/awsCertified.png';
import projectUltravalMain from '../assets/Img/ultraval/.netArquitecture.png';
import projectUltravalArchitecture from '../assets/Img/ultraval/.netArquitecture.png';
import projectUltravalReact from '../assets/Img/ultraval/react.png';
import projectUltravalReactNative from '../assets/Img/ultraval/reactNative.png';
import projectIcargoMain from '../assets/Img/icargo/diagram.png';
import projectIcargoDashboard from '../assets/Img/icargo/dashboard.png';
import projectIcargoDiagram from '../assets/Img/icargo/diagram.png';
import projectIcargoLogin from '../assets/Img/icargo/login.png';
import projectIcargoMenuConfiguration from '../assets/Img/icargo/menuConfiguration.png';
import projectIcargoQuote from '../assets/Img/icargo/quote.png';
import projectIcargoQuoteList from '../assets/Img/icargo/quoteList.png';
import projectAppDiagram from '../assets/Img/app/diagram.png';
import projectAppLogin from '../assets/Img/app/login.png';
import projectAppNewOrden from '../assets/Img/app/newOrden.png';
import projectAppOrdenList from '../assets/Img/app/ordenList.png';

export const menuItems = [
  { name: 'home', text: 'Home', icon: 'FaHome' },
  { name: 'experience', text: 'Experience', icon: 'FaBriefcase' },
  { name: 'projects', text: 'Projects', icon: 'FaProjectDiagram' },
  { name: 'techStack', text: 'Tech Stack', icon: 'FaLaptopCode' },
  { name: 'education', text: 'Education', icon: 'FaGraduationCap' },
  { name: 'contact', text: 'Contact', icon: 'FaPhone' }
];

// Sidebar footer shortcuts rendered from icon names inside the Menu component.
export const contactItems = [
  {
    icon: 'FaEnvelope',
    ariaLabel: 'Email',
    text: 'juan.navarro.ortz@gmail.com',
    link: 'mailto:juan.navarro.ortz@gmail.com?subject=Portfolio%20Contact&body=Hi%20Juan%2C%0A%0AI%20would%20like%20to%20talk%20about...'
  },
  {
    icon: 'FaLinkedinIn',
    ariaLabel: 'LinkedIn',
    text: 'linkedin.com/in/juannavarroortz',
    link: 'https://linkedin.com/in/juannavarroortz'
  },
  {
    icon: 'FaGithub',
    ariaLabel: 'GitHub',
    text: 'github.com/JuanNavarroOrtz',
    link: 'https://github.com/JuanNavarroOrtz'
  }
];

// Contact section cards with direct icon components for rendering.
export const contactLinks = [
  {
    title: 'GitHub',
    handle: 'github.com/JuanNavarroOrtz',
    href: 'https://github.com/JuanNavarroOrtz',
    icon: FaGithub,
    tone: 'github'
  },
  {
    title: 'LinkedIn',
    handle: 'linkedin.com/in/juannavarroortz',
    href: 'https://linkedin.com/in/juannavarroortz',
    icon: FaLinkedinIn,
    tone: 'linkedin'
  }
];

export const contactFacts = [
  { label: 'Phone', value: '+505-89611536', icon: FaPhone },
  { label: 'Email', value: 'juan.navarro.ortz@gmail.com', icon: FaEnvelope },
  { label: 'Location', value: 'Managua, Nicaragua', icon: FaMapMarkerAlt }
];

export const homeContent = {
  title: 'Profile',
  paragraphs: [
    'Full Stack Engineer with 6 years of experience building and maintaining backend-focused business systems in financial and logistics environments.',
    'Strong background in API development, relational databases, and production infrastructure management.',
    'Experience working with cloud-based deployments and maintaining live systems, continuously improving performance, reliability, and code quality.'
  ]
};

// Grouped by resume section so the Tech Stack page can map each category uniformly.
export const techStackSections = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'jQuery', icon: SiJquery },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
      { name: 'React Native', icon: FaReact }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'C#', icon: SiSharp },
      { name: 'ASP.NET MVC', icon: SiDotnet },
      { name: 'Web API', icon: SiPostman },
      { name: 'LINQ', icon: FaLayerGroup },
      { name: 'Python', icon: SiPython },
      { name: 'Django REST', icon: SiDjango },
      { name: 'Node.js (Express)', icon: SiExpress }
    ]
  },
  {
    title: 'Databases',
    items: [
      { name: 'SQL Server', icon: FaDatabase },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'T-SQL', icon: FaDatabase },
      { name: 'Stored Procedures', icon: FaDatabase },
      { name: 'Triggers', icon: SiSqlite },
      { name: 'Functions & Views', icon: SiMongodb }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS EC2', icon: FaAws },
      { name: 'AWS RDS', icon: FaAws },
      { name: 'AWS S3', icon: FaAws },
      { name: 'AWS Lambda', icon: FaAws },
      { name: 'Linux Admin', icon: FaLinux },
      { name: 'NGINX', icon: SiNginx },
      { name: 'Gunicorn', icon: FaDocker }
    ]
  },
  {
    title: 'Architecture & DevOps',
    items: [
      { name: 'REST APIs', icon: SiPostman },
      { name: 'JWT Authentication', icon: SiJsonwebtokens },
      { name: 'Layered (n-tier)', icon: FaLayerGroup },
      { name: 'CI/CD', icon: FaDocker },
      { name: 'Git Workflow', icon: FaGitAlt }
    ]
  }
];

// Timeline entries rendered in the Experience page.
export const experienceItems = [
  {
    company: 'ULTRAVAL',
    period: '2022 - Present',
    role: 'Developer',
    highlights: [
      'Developed treasury and cash logistics systems with C#, ASP.NET MVC, Web API, LINQ and T-SQL.',
      'Built SSRS financial reports and optimized complex SQL queries.',
      'Contributed to React, Node.js (Express) and React Native operational systems for real-time tracking.'
    ]
  },
  {
    company: 'I-CARGO',
    period: '2023 - Present',
    role: 'Full Stack Developer (Freelance, Part-time)',
    highlights: [
      'Designed and built a logistics platform from scratch using Django REST Framework, PostgreSQL and React.',
      'Implemented quotation, shipping order (SO), booking and bill of lading (BL) workflows.',
      'Deployed and maintained infrastructure on AWS and Linux with NGINX/Gunicorn.'
    ]
  },
  {
    company: 'Almacenadora LAFISE',
    period: '2014 - 2022',
    role: 'Software Development Role: 2020-2022',
    highlights: [
      'Maintained financial and warehouse systems with ASP.NET MVC, C#, Dapper and SQL Server.',
      'Implemented complex T-SQL logic, stored procedures and financial reporting modules.',
      'Developed secure REST APIs and supported logistics systems on AWS with Django/PostgreSQL.'
    ]
  }
];

// Each project can optionally point to a galleryKey to enable the modal viewer.
export const projectItems = [
  {
    title: 'Cash Logistics Platform',
    category: 'Enterprise System',
    galleryKey: 'ultraval',
    galleryLabel: 'Open gallery',
    galleryTitle: 'Cash Logistics Platform Gallery',
    imageButtonLabel: 'Open Cash Logistics Platform gallery',
    image: projectUltravalMain,
    imageAlt: 'Treasury cash logistics platform dashboard preview',
    summary: 'Enterprise treasury and cash logistics platform used to manage daily vault operations, cash movements between branches, and financial reconciliation workflows.',
    highlights: [
      'Reduced treasury operational workflow from 8 steps to 5, simplifying daily execution for internal operators.',
      'Designed automated daily balance reports registering all debit and credit movements with scheduled closing processes.',
      'Migrated legacy ASP.NET MVC Razor views to modern React components improving UI performance and maintainability.',
      'Refactored React Native offline mode using SQLite local storage to reduce network request failures and improve reliability in low connectivity environments.'
    ],
    stack: [
      'React',
      'React Native',
      'C#',
      'ASP.NET MVC',
      'Web API',
      'Node.js',
      'SQL Server'
    ],
    impact: 'Production system used daily by treasury and logistics operators to manage cash movements, reconciliation processes, and operational reporting.',
    ctaLabel: 'View architecture',
    ctaAriaLabel: 'Open Cash Logistics Platform gallery from View architecture'
  },
  {
    title: 'I-Cargo Logistics Suite',
    category: 'Freelance Product Build',
    galleryKey: 'icargo',
    galleryLabel: 'Open gallery',
    galleryTitle: 'I-Cargo Logistics Suite Gallery',
    imageButtonLabel: 'Open I-Cargo Logistics Suite gallery',
    image: projectIcargoMain,
    imageAlt: 'I-Cargo logistics platform architecture preview',

    summary: 'End-to-end logistics platform managing quotations, shipping orders, bookings and bill of lading workflows for import/export operations.',

    highlights: [
      'Designed the system architecture and relational data model from scratch.',
      'Built REST APIs using Django REST Framework and integrated them with the React frontend.',
      'Implemented operational workflows covering quotations, shipping orders, booking confirmations and BL documentation.',
      'Deployed and maintained the platform on AWS using RDS, S3 and Linux-based infrastructure.'
    ],

    stack: [
      'React',
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'AWS'
    ],

    impact: 'Production logistics system currently used to manage operational workflows, from quotation generation to shipping documentation and order tracking.',

    ctaLabel: 'View system screens',
    ctaAriaLabel: 'Open I-Cargo Logistics Suite gallery from View system screens'
  },
  {
    title: 'Mobile Sales & Inventory App',
    category: 'Personal Project',
    galleryKey: 'app',
    galleryLabel: 'Open gallery',
    galleryTitle: 'Mobile Sales & Inventory App Gallery',
    imageButtonLabel: 'Open Mobile Sales & Inventory App gallery',
    image: projectAppDiagram,
    imageAlt: 'React Native mobile sales order system with NestJS API and PostgreSQL architecture',
    summary: 'Mobile application designed to capture customer sales orders, evolving toward a complete inventory and invoicing management system.',
    highlights: [
      'React Native mobile app for capturing and managing sales orders in the field.',
      'Backend API planned with NestJS and PostgreSQL deployed on AWS.',
      'Architecture designed to scale toward inventory management and billing modules.'
    ],
    stack: [
      'React Native',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'TypeScript'
    ],
    impact: 'Designed as a scalable business system starting with order capture and expanding into inventory and invoicing management.',
    ctaLabel: 'View mobile app screens',
    ctaAriaLabel: 'Open Mobile Sales & Inventory App gallery from View mobile app screens'
  },
  {
    title: 'Developer Portfolio',
    category: 'Personal Brand',
    image: projectPlaceholder,
    imageAlt: 'Developer portfolio preview placeholder',
    summary: 'Portfolio website built to present experience, projects, and technical strengths with a cleaner resume-style layout.',
    highlights: [
      'Data-driven React structure for sections, navigation, project cards, and modal galleries.',
      'Responsive layout optimized for both desktop and mobile reading.',
      'Refined project showcase flow with reusable gallery behavior and cleaner content hierarchy.'
    ],
    stack: ['React', 'Vite', 'CSS', 'React Icons'],
    impact: 'Designed as a living portfolio that can keep evolving with new projects and screenshots.',
    ctaLabel: 'Portfolio preview'
  }
];

export const projectSectionContent = {
  title: 'Projects',
  modalCloseLabel: 'Close gallery',
  modalPreviousLabel: 'Show previous image',
  modalNextLabel: 'Show next image',
  modalThumbLabel: 'Show image',
  modalThumbsAriaLabel: 'Gallery images',
  imageCountLabel: (current, total) => `Image ${current} of ${total}`
};

// Modal galleries keyed by project.galleryKey.
export const projectGalleries = {
  ultraval: [
    {
      id: 'ultraval-architecture',
      src: projectUltravalArchitecture,
      alt: 'Ultraval enterprise system architecture view'
    },
    {
      id: 'ultraval-react',
      src: projectUltravalReact,
      alt: 'Ultraval enterprise system React web interface'
    },
    {
      id: 'ultraval-react-native',
      src: projectUltravalReactNative,
      alt: 'Ultraval enterprise system React Native mobile interface'
    }
  ],
  icargo: [
    {
      id: 'icargo-diagram',
      src: projectIcargoDiagram,
      alt: 'I-Cargo logistics suite architecture diagram'
    },
    {
      id: 'icargo-login',
      src: projectIcargoLogin,
      alt: 'I-Cargo logistics suite login screen'
    },
    {
      id: 'icargo-dashboard',
      src: projectIcargoDashboard,
      alt: 'I-Cargo logistics suite dashboard view'
    },
    {
      id: 'icargo-menu-configuration',
      src: projectIcargoMenuConfiguration,
      alt: 'I-Cargo logistics suite menu configuration screen'
    },
    {
      id: 'icargo-quote',
      src: projectIcargoQuote,
      alt: 'I-Cargo logistics suite quotation screen'
    },
    {
      id: 'icargo-quote-list',
      src: projectIcargoQuoteList,
      alt: 'I-Cargo logistics suite quotation list screen'
    }
  ],
  app: [
    {
      id: 'app-diagram',
      src: projectAppDiagram,
      alt: 'Mobile Sales & Inventory App architecture diagram'
    },
    {
      id: 'app-login',
      src: projectAppLogin,
      alt: 'Mobile Sales & Inventory App login screen'
    },
    {
      id: 'app-new-order',
      src: projectAppNewOrden,
      alt: 'Mobile Sales & Inventory App create order screen'
    },
    {
      id: 'app-order-list',
      src: projectAppOrdenList,
      alt: 'Mobile Sales & Inventory App order list screen'
    }
  ]
};

export const educationItems = {
  featuredCertification: {
    title: 'AWS Certified Cloud Practitioner',
    credential: 'CLF-C02',
    issuer: 'Amazon Web Services',
    issued: 'November 2021',
    validThrough: 'June 2027',
    image: projectPlaceholder,
    imageAlt: 'AWS Certified Cloud Practitioner credential badge',
    credentialUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/SXY9Q1GJPJ14Q5WB',
    summary: 'Foundational AWS certification validating knowledge of cloud services, security principles, pricing models, and core architectural concepts.',
    bullets: [
      'Demonstrates understanding of AWS core services and cloud fundamentals.',
      'Knowledge of cloud security, pricing models, and shared responsibility model.',
      'Supports cloud-based infrastructure discussions and solution architecture decisions.'
    ]
  },

  educationHistory: [
    {
      title: 'Bachelor’s Degree in Computer Engineering',
      institution: 'National Autonomous University of Nicaragua (UNAN)',
      period: '2017 - 2021',
      description:
        'Academic training in software engineering, database systems, computer networks, operating systems, and system architecture.'
    },
    {
      title: 'Power BI Course',
      institution: 'American University (UAM)',
      period: '2025',
      description:
        'Training in data modeling, dashboard development, business intelligence reporting, and interactive data visualization using Power BI.'
    }
  ]
};
