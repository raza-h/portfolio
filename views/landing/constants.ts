import { About, Contact, Home, Projects, Services } from "@/views/landing";

export const INTERNAL_LINKS = [
  {
    id: "home",
    name: "Home",
    hrefs: ["#", "", "#home"],
    Component: Home,
  },
  {
    id: "about",
    name: "About",
    hrefs: ["#about"],
    Component: About,
  },
  {
    id: "services",
    name: "Services",
    hrefs: ["#services"],
    Component: Services,
  },
  {
    id: "projects",
    name: "Projects",
    hrefs: ["#projects"],
    Component: Projects,
  },
  {
    id: "contact",
    name: "Contact",
    hrefs: ["#contact"],
    Component: Contact,
  },
];

export const CREDIBILITY_LINKS = [
  {
    href: "https://jazz.com.pk",
    name: "Jazz (PMCL), part of VEON",
    dimensions: {
      width: 90,
      height: 50,
    },
    imagePath: "/images/jazz-logo.webp",
  },
  {
    href: "https://dubizzlegroup.com",
    name: "Dubizzle Group",
    dimensions: {
      width: 140,
      height: 50,
    },
    imagePath: "/images/dubizzle-group-logo.webp",
  },
];

export const PROJECT_LINKS = [
  {
    href: "https://play.google.com/store/apps/details?id=com.jazz.jazzworld&hl=en",
    name: "SIMOSA (Jazz World)",
    dimensions: {
      width: 150,
      height: 50,
    },
    imagePath: "/images/simosa-logo.webp",
  },
  {
    href: "https://olx.com.pk",
    name: "OLX Pakistan",
    dimensions: {
      width: 80,
      height: 50,
    },
    imagePath: "/images/olx.svg",
  },
];

export const TECH_STACK = [
  "React",
  "Next",
  "Node",
  "Express",
  "MySQL",
  "Redis",
  "Ant Design",
  "Material UI",
  "Tailwind CSS",
  "Firebase",
  "Supabase",
  "OpenAI",
  "Stripe",
  "Docker",
  "Sentry",
];
