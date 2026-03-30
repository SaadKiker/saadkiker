export type Project = {
  id: string;
  name: string;
  subtitle: string;
  cover: string;
  description: string;
  shortDescription: string;
  createdOn: string;
  link: string;
  linkLabel: string;
  images: string[];
  stack?: string[];
  mainStack?: string[];
  modalBg?: string;
  modalAccent?: string;
  altImages?: string[];
  altAccent?: string;
  category?: "app" | "website";
};

export const projects: Project[] = [
  {
    id: "scanini",
    name: "Scanini",
    subtitle: "Digital Menu SaaS Platform",
    cover: "/projects/scaniniCover.png",
    description:
      "Scanini is a production ready SaaS web platform developed for restaurants to manage digital menus, online ordering, and business configuration.\n\nI built the system end to end, including the public customer facing menu, a secure admin dashboard, and backend logic designed for multi tenant usage.\n\nThe platform includes authentication, role based access, dynamic content management, and a responsive UI, with a strong focus on scalability, performance, and maintainable architecture.",
    shortDescription: "A SaaS platform for restaurants to manage digital menus, online ordering, and business configuration through a public menu and a secure admin dashboard.",
    createdOn: "Jan 1st, 2026",
    link: "https://scanini.ma",
    linkLabel: "scanini.ma",
    images: [
      "/projects/scanini1.png",
      "/projects/scanini2.png",
      "/projects/scanini3.png",
      "/projects/scanini4.png",
      "/projects/scanini5.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon", "Prisma", "Resend", "Cloudflare R2", "Vercel"],
    mainStack: ["Next.js", "PostgreSQL", "Vercel"],
    modalBg: "#ffffff",
    modalAccent: "#e48a6c",
  },
  {
    id: "rituals",
    name: "MyRituals",
    subtitle: "Minimal Habit & Ritual Tracker",
    cover: "/projects/MyritualsCover.png",
    description: "MyRituals is a minimal web platform designed to help users track habits, goals, and daily routines without the complexity of traditional productivity apps.\n\nI designed and built the system around three simple areas, goals, habits, and a structured daily schedule, focusing on clarity and a distraction free interface that encourages consistency and long term discipline.",
    shortDescription: "A minimal habit and ritual tracker built around three areas — goals, habits, and a daily schedule — with a distraction-free interface built for consistency.",
    createdOn: "Jan 31st, 2026",
    link: "https://myrituals.app",
    linkLabel: "MyRituals.app",
    images: [
      "/projects/mr1.png",
      "/projects/mr2.png",
      "/projects/mr3.png",
      "/projects/mr4.png",
      "/projects/mr5.png",
      "/projects/mr6.png",
    ],
    altImages: [
      "/projects/mrf1.png",
      "/projects/mrf2.png",
      "/projects/mrf3.png",
      "/projects/mrf4.png",
      "/projects/mrf5.png",
      "/projects/mrf6.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    mainStack: ["Next.js", "PostgreSQL", "Vercel"],
    modalBg: "#ffffff",
    modalAccent: "#2e6690",
    altAccent: "#b06090",
  },
  {
    id: "hdoc",
    name: "H-DOC",
    subtitle: "Medical Record & Patient Management System",
    cover: "/projects/hdocCover.png",
    description:
      "H-DOC is a full stack medical record and patient management platform designed for clinics and healthcare environments.\n\nThe system allows healthcare staff to manage patient profiles, appointments, prescriptions, and medical forms from a centralized dashboard while keeping records structured and easy to access.\n\nThe platform includes role based access for administrators, doctors, and agents, dynamic medical form management, appointment tracking, and patient monitoring tools. It was built with a Spring Boot backend connected to a PostgreSQL database and a React based frontend focused on clarity and usability.",
    shortDescription: "A full-stack platform for clinics to manage patient records, appointments, and prescriptions, with role-based access for admins, doctors, and agents.",
    createdOn: "Feb 15th, 2026",
    link: "https://github.com/SaadKiker/H-DOC",
    linkLabel: "GitHub Repository",
    images: [
      "/projects/hdoc1.png",
      "/projects/hdoc2.png",
      "/projects/hdoc3.png",
      "/projects/hdoc4.png",
      "/projects/hdoc5.png",
      "/projects/hdoc6.png"
    ],
    stack: [
      "Spring Boot",
      "Java",
      "React",
      "TypeScript",
      "Vite",
      "PostgreSQL",
      "Supabase",
      "Docker"
    ],
    mainStack: ["Spring Boot", "React", "PostgreSQL"],
    modalBg: "#ffffff",
    modalAccent: "#1e513b",
  },
  {
    id: "sacros",
    name: "Sacros",
    subtitle: "Offline Macro Nutrition Tracker",
    cover: "/projects/sacrosCover.png",
    description:
      "Sacros is a minimal desktop application designed to help users track their daily macronutrients in a fast and distraction free way.\n\nThe application focuses only on today's nutrition intake, allowing users to log foods across different meals such as breakfast, lunch, snacks, and dinner while automatically calculating protein, carbohydrates, fats, and total calories for the day.\n\nThe system includes a personal food database with customizable units, automatic macro calculations per meal, and a clean interface optimized for quick daily use. Sacros was built as an offline first application using Tauri and React, allowing the app to run locally without accounts, cloud services, or internet connectivity.",
    shortDescription: "An offline desktop app for tracking daily macros and calories across meals, with a personal food database and no accounts or internet required.",
    createdOn: "Mar 10th, 2026",
    link: "https://sacros-site.vercel.app",
    linkLabel: "sacros-site.vercel.app",
    images: [
      "/projects/sacros1.png",
      "/projects/sacros2.png",
      "/projects/sacros3.png"
    ],
    stack: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    mainStack: ["Tauri", "Rust", "React"],
    modalBg: "#ffffff",
    modalAccent: "#4f6c9f",
  },
  {
    id: "cookshare",
    name: "CookShare",
    subtitle: "Community Recipe Sharing Platform",
    cover: "/projects/cookshareCover.png",
    description:
      "CookShare is a web platform designed for sharing and discovering recipes within a community of food enthusiasts.\n\nThe platform allows users to create and manage their own recipes, explore meals from other users, and interact through likes, comments, and favorites. Recipes can be organized and filtered by category, making it easy to browse different types of dishes.\n\nThe system includes secure user authentication, recipe management tools, and social engagement features, all built on a Spring Boot backend with server rendered pages using Thymeleaf and a MySQL database.",
    shortDescription: "A community recipe platform where users can publish their own recipes, discover meals from others, and interact through likes, comments, and favorites.",
    createdOn: "Dec 12th, 2025",
    link: "https://github.com/SaadKiker/CookShare",
    linkLabel: "GitHub Repository",
    images: [
      "/projects/cookshare1.png",
      "/projects/cookshare2.png",
      "/projects/cookshare3.png",
      "/projects/cookshare4.png"
    ],
    stack: [
      "Spring Boot",
      "Java",
      "Thymeleaf",
      "MySQL",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Lombok"
    ],
    mainStack: ["Spring Boot", "Thymeleaf", "MySQL"],
    modalBg: "#ffffff",
    modalAccent: "#f27971",
  },
  {
    id: "action-air-services",
    name: "Action Air Services",
    subtitle: "Facility Services & Professional Kitchen Maintenance",
    cover: "/projects/AASCover.png",
    description:
      "Action Air Services is a French facility services company specializing in professional kitchen hood degreasing, HVAC installation, diverse facility maintenance, and pest control for commercial and industrial spaces.\n\nThe website was built to present their four core services clearly — hood degreasing, maintenance, pest control, and hood installation — while positioning the company around legal compliance, as hood degreasing is a mandatory requirement under French commercial kitchen regulations.\n\nI built the site using WordPress on Hostinger, with a focus on clean service presentation, a contact form for free quote requests, and clear calls to action targeting restaurants, hotels, healthcare facilities, and industrial clients across France.",
    shortDescription: "A professional services website for a French facility maintenance company, covering hood degreasing, HVAC, pest control, and commercial kitchen compliance.",
    createdOn: "2025",
    link: "https://actionairservices.fr",
    linkLabel: "actionairservices.fr",
    images: [
      "/projects/aas1.png",
      "/projects/aas2.png",
      "/projects/aas3.png",
      "/projects/aas4.png",
      "/projects/aas5.png",
    ],
    stack: ["WordPress", "Hostinger", "Elementor", "WooCommerce"],
    mainStack: ["WordPress", "Hostinger"],
    modalBg: "#ffffff",
    modalAccent: "#1a6fa8",
    category: "website",
  }, 
  {
    id: "tazkiyati",
    name: "Tazkiyati",
    subtitle: "Islamic Heart Purity Tracker",
    cover: "/projects/TazkiyatiCover.png",
    description:
      "Tazkiyati is a personal spiritual web app built around the Islamic concept of purifying the heart. The name comes from the Arabic word تزكية, meaning self-purification.\n\nThe app centers around a 3D anatomical heart that visually reflects the state of your soul. Logging good deeds brightens it, while bad ones darken it, with each action carrying a weight based on its severity.\n\nI built the experience to feel minimal, calm, and intentional, with soft lighting, Arabic typography, and a single-page interface designed to encourage daily reflection and accountability.",
    shortDescription: "A spiritual tracker built around a 3D heart that visually reflects your soul's state through logged good and bad deeds, inspired by the Islamic concept of تزكية.",
    createdOn: "Mar 19th, 2026",
    link: "https://tazkiyati.vercel.app",
    linkLabel: "tazkiyati.vercel.app",
    images: [
      "/projects/tazkiyati1.png",
      "/projects/tazkiyati2.png",
      "/projects/tazkiyati3.png",
      "/projects/tazkiyati4.png",
      "/projects/tazkiyati5.png",
    ],
    stack: ["Vite", "React", "Three.js", "React Three Fiber", "Tailwind CSS", "Supabase", "Vercel"],
    mainStack: ["React", "Three.js", "Supabase"],
    modalBg: "#ffffff",
    modalAccent: "#000000",
  },
  {
    id: "lynkast",
    name: "Lynkast",
    subtitle: "Influencer Marketing Platform for Brands and Creators",
    cover: "/projects/lynkastCover.png",
    description:
      "Lynkast is an influencer marketing agency platform that connects brands with content creators. Built around the tagline \"We Lynk opportunities. We Cast results.\", the website serves two distinct audiences with tailored journeys.\n\nFor brands, the platform presents campaign oriented services and a dedicated contact flow to launch influencer collaborations. For creators, it provides a focused path to apply for sponsorship opportunities and brand partnerships.\n\nThe project was developed with Vue.js and Astro, deployed with Nginx on Hostinger, and secured and optimized through Cloudflare, with Amplitude integrated for user behavior tracking and performance insights.",
    shortDescription: "An influencer marketing web platform connecting brands and creators, with dedicated sections and separate contact funnels for each audience.",
    createdOn: "2026",
    link: "https://lynkast.com",
    linkLabel: "lynkast.com",
    images: [
      "/projects/lynkast1.png",
      "/projects/lynkast2.png",
      "/projects/lynkast3.png",
      "/projects/lynkast4.png",
      "/projects/lynkast5.png",
    ],
    stack: ["Vue.js", "Astro", "Nginx", "Cloudflare", "Hostinger", "Amplitude"],
    mainStack: ["Vue.js", "Astro", "Cloudflare"],
    modalBg: "#ffffff",
    modalAccent: "#ffb700",
    category: "website",
  },
  {
    id: "rentwheels",
    name: "RentWheels",
    subtitle: "Desktop Car Rental Management Application",
    cover: "/projects/rwCover.png",
    description:
      "RentWheels is a desktop car rental management application built with Java Swing for a car rental agency. It automates the full rental process from browsing the catalogue to reservation management and administrative oversight.\n\nThe system supports three types of users. Visitors can browse the car catalogue, filter by model, color, and availability, and read client reviews. Clients can create an account, reserve a car by selecting start and end dates with an automatically calculated rental price, attach their CIN to the reservation, view existing reservations, receive approval notifications with the car return deadline, and manage their own comments and account.\n\nThe administrator has a dedicated interface to manage the car catalogue, validate or deny reservation requests, handle client accounts and deletion requests, moderate comments, and access a Chart Insights dashboard featuring a bar chart of monthly revenue in dirhams and a donut chart showing the ratio of available to unavailable vehicles.\n\nWhen a reservation is validated, the car's status automatically switches from Available to Not Available and the Rent button is removed from the catalogue.",
    shortDescription: "A desktop car rental management app built with Java Swing, supporting visitor, client, and admin roles with full reservation management, automated pricing, and a Chart Insights dashboard.",
    createdOn: "2025",
    link: "https://github.com/SaadKiker/RentWheels",
    linkLabel: "GitHub Repository",
    images: [
      "/projects/rentwheels1.png",
      "/projects/rentwheels2.png",
      "/projects/rentwheels3.png",
      "/projects/rentwheels4.png",
      "/projects/rentwheels5.png",
    ],
    stack: ["Java", "Java Swing", "MySQL", "UML"],
    mainStack: ["Java Swing", "MySQL"],
    modalBg: "#ffffff",
    modalAccent: "#e8af10",
  },
 
];
