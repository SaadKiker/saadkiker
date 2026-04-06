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
"Scanini came from time I spent in Turkey, where every restaurant, café and hotel had a QR menu sitting on the table. You'd sit down, scan, and just browse. I found myself reaching for it every single time over the physical menu without even thinking about it. Came back to Morocco and realised it hadn't really taken off here yet, so I built Scanini.\n\nIt's a SaaS platform that gives any business (restaurants, cafés, hotels, car dealerships, flower shops) a fully managed digital menu or catalogue, accessible via QR code. Each client gets their own subdomain, something like mybusiness.scanini.ma, that they can drop anywhere: Instagram bio, Google Maps, WhatsApp, a physical stand at the entrance. Customers see the full menu before they walk in.\n\nFrom the owner's side, everything is managed through a clean dashboard. Update items, swap photos, reorganize sections, all from their phone in real time. No waiting for a designer, no reprinting costs. And built into the menu is a direct Google Reviews button, so customers can leave a review in one tap right after their visit.\n\nI built the whole thing end to end: the public-facing menu that customers interact with, the admin dashboard owners use daily, and a multi-tenant backend designed to scale cleanly across hundreds of businesses. Every layer of the stack, handled solo.\n\nIt's live, it has paying clients, and it's still growing.",
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
    description: 
"Most habit trackers try to do too much. Streaks, analytics, reminders, integrations, social features. By the time you set everything up you've already lost the plot. I tried a bunch of them and kept running into the same problem: the app itself became the thing I had to manage.\n\nSo I built MyRituals. Started as a single HTML file I'd open locally every morning. No backend, no accounts, just a clean page with my habits and goals for the day. It did exactly what I needed and nothing else, so I kept using it.\n\nEventually I cleaned it up, gave it a real backend, and hosted it for friends and family who wanted in.\n\nIt's built around three things: habits, goals, and a structured daily schedule. The interface stays out of your way. No notifications pushing you, no dashboards overwhelming you, no features you have to learn. You open it, you check your things, you close it.\n\nThat's the whole idea.",
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
"H-DOC came out of my final year internship at a hospital that was still in its construction phase. The place was getting ready to operate as a central hub connected to a network of satellite care centers handling non-urgent cases, so patients get triaged and treated at the right level without everything funneling into the main hospital. The infrastructure was being built, but there was no internal system to run it on.\n\nSo I built one.\n\nH-DOC is a full stack patient and medical record management platform designed for clinics and care centers. Everything that happens around a patient visit lives in one place: registration, appointments, prescriptions, medical forms, doctor assignments, and a live dashboard tracking visits and metrics across the day.\n\nThe system has role based access for administrators, doctors, and agents, each seeing exactly what they need and nothing they don't. The goal was to reduce paperwork, centralize records, and make patient flow manageable from a single screen.\n\nBuilt with a Spring Boot backend running in Docker, a PostgreSQL database on Supabase, and a React and TypeScript frontend.",
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
"Every macro tracking app I tried was either behind a paywall, bloated with features I didn't need, or both. All I wanted was to log what I ate and see my numbers for the day. Simple as that.\n\nSo I built Sacros. A minimal offline desktop app that does exactly that and nothing else. You log your meals, it calculates your protein, carbs, fats and calories. No account, no internet, no history trying to guilt trip you about last week. Just today.\n\nYou build your own food database with your usual meals and ingredients, log them across breakfast, lunch, snacks and dinner, and the numbers update instantly. That's the whole app.\n\nBuilt with Tauri and React so it runs as a native desktop app, fully offline.",
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
"CookShare was a fourth year academic project, and the brief was simple: build a community platform where users can share and discover recipes. Not the most groundbreaking idea, but a good opportunity to go deeper into Spring Boot.\n\nUsers can create an account, post their own recipes, browse by category, like and comment on what others share, and save their favorites. Everything you'd expect from a platform like this, built from scratch with a Spring Boot backend, Thymeleaf for server rendered pages, and MySQL.\n\nIt was less about the idea and more about learning how to structure a real multi-user web application with authentication, role based access, and a proper database layer.",
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
"Action Air Services was my first freelance client. A French facility services company that handles professional kitchen hood degreasing, HVAC installation, pest control and general maintenance for commercial and industrial spaces.\n\nHood degreasing is actually a legal requirement under French commercial kitchen regulations, so their clients are not just looking for a service, they have to get it done. The site needed to make that clear while presenting everything else they offer in a clean and professional way.\n\nI built it on WordPress with Elementor, focused on presenting their four core services clearly, making it easy for restaurants, hotels, healthcare facilities and industrial clients to understand what they need and request a free quote without friction.\n\nSimple job, real client, real deadline. A good way to start.",
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
"Tazkiyati started from a simple idea rooted in Islamic tradition: the state of your heart reflects the deeds you do. Good actions purify it, bad ones darken it. That concept has existed for centuries, but I wanted to make it something you could actually see and interact with daily.\n\nAt the center of the app is a 3D anatomical heart that visually responds to what you log. You record a good deed, it brightens. You log a bad one, it darkens, with each action carrying a different weight depending on its severity. No streaks, no points, no gamification. Just you and the state of your heart.\n\nThe whole experience is built to feel calm and intentional. Soft lighting, Arabic typography, a single page that doesn't ask much of you. You open it, you reflect, you log, you close it.\n\nBuilt with React, Three.js for the 3D heart, and Supabase on the backend.",
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
    description:"Lynkast is an influencer marketing platform that connects brands with content creators. The whole site is built around two distinct audiences with separate journeys: brands come looking for campaign services and a clear path to launch collaborations, creators come looking for sponsorship opportunities and brand partnerships.\n\nThe challenge was making one website feel right for two very different visitors without them crossing paths or getting confused. The content, the flow and the calls to action are all tailored depending on who you are.\n\nBuilt with Vue.js and Astro, deployed with Nginx on Hostinger, secured and optimised through Cloudflare, and Amplitude integrated for tracking user behaviour and performance across both journeys.",
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
"RentWheels was a third year academic project, built with Java Swing as a desktop application for a car rental agency.\n\nThe app handles the full rental flow across three types of users. Visitors can browse the car catalogue and filter by model, color and availability. Clients can create an account, pick a car, set their dates, and the price gets calculated automatically. Once a reservation is submitted it goes to the admin for approval, and when validated the car switches to unavailable across the catalogue instantly.\n\nThe admin side is where most of the complexity sits: managing the catalogue, approving or rejecting reservations, handling accounts, moderating comments, and a dashboard with revenue charts and vehicle availability breakdowns.\n\nIt was less about the idea and more about learning how to architect a multi-role system with real business logic from scratch, in a desktop environment with Java Swing and MySQL.",
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
  {
    id: "optique-hamza",
    name: "Optique Hamza",
    subtitle: "Independent Optician Website",
    cover: "/projects/OHCover.png",
    description:
"Optique Hamza is a freelance project for an independent optician with over 15 years of experience. They had the expertise and the client base, but no online presence. The goal was simple: get them on the web properly and make it easy for new clients to find them and book an appointment.\n\nThe site covers everything they offer, vision assessments, single-vision and progressive lenses, blue-light filtering treatments, and a curated frame selection. One thing worth highlighting about how they work is that clients are accompanied by the same consultant throughout the entire journey, from face shape analysis to post-purchase follow-up. That felt like something worth putting front and center.\n\nBuilt in plain HTML, CSS and JavaScript, hosted on Hostinger. No framework needed, just a clean site that does the job.",
    shortDescription: "A professional website for an independent optician, showcasing vision care services, lens options, frame selection, and an appointment booking flow for new and returning clients.",
    createdOn: "2025",
    link: "https://lightslategray-crocodile-442228.hostingersite.com/index.html",
    linkLabel: "optichamza.ma",
    images: [
      "/projects/OH1.png",
      "/projects/OH2.png",
      "/projects/OH3.png",
      "/projects/OH4.png",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Hostinger"],
    mainStack: ["HTML", "CSS", "JavaScript"],
    modalBg: "#ffffff",
    modalAccent: "#8e3030",
    category: "website",
  },
];
