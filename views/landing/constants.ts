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
    href: "https://dubizzlegroup.com",
    name: "Dubizzle Group",
    dimensions: {
      width: 100,
      height: 50,
    },
    imagePath: "/images/dubizzle-group-logo.webp",
  },
  {
    href: "https://olx.com.pk",
    name: "OLX Pakistan",
    dimensions: {
      width: 60,
      height: 50,
    },
    imagePath: "/images/olx.svg",
  },
  {
    href: "https://nu.edu.pk",
    name: "National University of Computer and Emerging Sciences (FAST)",
    dimensions: {
      width: 100,
      height: 50,
    },
    imagePath: "/images/fast-logo.webp",
  },
];

export const TECH_STACK = [
  "React",
  "Next",
  "Node",
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
