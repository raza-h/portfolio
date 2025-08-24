import { TechChipMap } from "@/types";

export const SERVICES = [
  {
    id: 1,
    icon: {
      src: "/images/web-dev.png",
      dimensions: {
        width: 400,
        height: 400,
      },
    },
    title: "Web Applications",
    description:
      "Custom web applications built with modern frameworks, ensuring scalability, performance, and a seamless user experience.",
  },
  {
    id: 3,
    icon: {
      src: "/icons/openai.svg",
      dimensions: {
        width: 140,
        height: 140,
      },
    },
    title: "AI Integrations",
    description:
      "Integrating AI-powered features into web apps using tools like OpenAI, LangChain, and custom ML models.",
  },
  {
    id: 2,
    icon: {
      src: "/icons/stripe.svg",
      dimensions: {
        width: 140,
        height: 140,
      },
    },
    title: "Stripe Integrations",
    description:
      "End-to-end Stripe payment solutions including checkout, subscriptions, and secure payment processing.",
  },
  {
    id: 4,
    icon: {
      src: "/icons/html-css.png",
      dimensions: {
        width: 140,
        height: 140,
      },
    },
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for speed, responsiveness, and maximum engagement.",
  },
  {
    id: 5,
    icon: {
      src: "/icons/nest.svg",
      dimensions: {
        width: 100,
        height: 100,
      },
    },
    title: "APIs",
    description:
      "Designing, developing, and integrating RESTful APIs with secure authentication.",
  },
  {
    id: 6,
    icon: {
      src: "/icons/aws.svg",
      dimensions: {
        width: 100,
        height: 100,
      },
    },
    title: "Deployments",
    description:
      "Optimized deployment on AWS, Vercel, and Railway workflows for cloud platforms, ensuring reliability, scalability, and minimal downtime.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "OLX Seller Center",
    description:
      "Dedicated web application for sellers to manage stores, listings, inventory, orders, and fulfillment on OLX.",
    link: "https://sellercenter.olx.com.pk",
    imagePath: "/images/olx-seller-center-portfolio.png",
    tech: ["React", "Ant Design", "Firebase", "Docker", "Sentry"],
  },
  {
    id: 2,
    title: "IQTest.ai",
    description:
      "AI-powered web application for online IQ testing that deliver instant results for casual cognitive assessment.",
    link: "https://iq-test.ai",
    imagePath: "/images/iq-test-ai-portfolio.png",
    tech: [
      "React",
      "Chakra UI",
      "Node",
      "Express",
      "Supabase",
      "OpenAI",
      "Stripe",
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/razah1214",
    imagePath: "/icons/linkedin.svg",
    identifier: "razah1214",
  },
  {
    name: "GitHub",
    href: "https://github.com/raza-h",
    imagePath: "/icons/github.svg",
    identifier: "raza-h",
  },
];

export const CONTACT_LINKS = [
  ...SOCIAL_LINKS,
  {
    name: "Email",
    href: "mailto:razah12145@gmail",
    imagePath: "/icons/email.svg",
    identifier: "razah12145@gmail.com",
  },
];

export const TECH_CHIP: TechChipMap = {
  React: {
    name: "React",
    logo: "https://img.shields.io/badge/-React-61dafb?style=for-the-badge&logo=react&logoColor=61dafb&labelColor=282828",
    color: "#61dafb",
    width: 98.25,
  },
  Next: {
    name: "Next.js",
    logo: "https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=ffffff&labelColor=282828",
    color: "#000000",
    width: 110.75,
  },
  Node: {
    name: "Node.js",
    logo: "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=339933&labelColor=282828",
    color: "#339933",
    width: 112.75,
  },
  Express: {
    name: "Express.js",
    logo: "https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=ffffff&labelColor=282828",
    color: "#000000",
    width: 134.5,
  },
  OpenAI: {
    name: "OpenAI",
    logo: "https://img.shields.io/badge/-OpenAI-00b3b3?style=for-the-badge&logo=openai&logoColor=00b3b3&labelColor=282828",
    color: "#00b3b3",
    width: 107.5,
  },
  Sentry: {
    name: "Sentry",
    logo: "https://img.shields.io/badge/-Sentry-ff9800?style=for-the-badge&logo=sentry&logoColor=ff9800&labelColor=282828",
    color: "#ff9800",
    width: 107.5,
  },
  Stripe: {
    name: "Stripe",
    logo: "https://img.shields.io/badge/-Stripe-008cdd?style=for-the-badge&logo=stripe&logoColor=008cdd&labelColor=282828",
    color: "#008cdd",
    width: 104.5,
  },
  AWS: {
    name: "Amazon Web Services",
    logo: "https://img.shields.io/badge/-AWS-ff9900?style=for-the-badge&logo=aws&logoColor=ff9900&labelColor=282828",
    color: "#ff9900",
  },
  Docker: {
    name: "Docker",
    logo: "https://img.shields.io/badge/-Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=0db7ed&labelColor=282828",
    color: "#0db7ed",
    width: 109.5,
  },
  HTML: {
    name: "HTML",
    logo: "https://img.shields.io/badge/-HTML-c58545?style=for-the-badge&logo=html5&logoColor=c58545&labelColor=282828",
    color: "#c58545",
  },
  CSS: {
    name: "CSS",
    logo: "https://img.shields.io/badge/-CSS-d1a01f?style=for-the-badge&logo=css&logoColor=d1a01f&labelColor=282828",
    color: "#d1a01f",
  },
  JavaScript: {
    name: "JavaScript",
    logo: "https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=f7df1e&labelColor=282828",
    color: "#f7df1e",
  },
  Python: {
    name: "Python",
    logo: "https://img.shields.io/badge/-Python-98b982?style=for-the-badge&logo=python&logoColor=98b982&labelColor=282828",
    color: "#98b982",
  },
  "Ant Design": {
    name: "Ant Design",
    logo: "https://img.shields.io/badge/-Ant%20Design-1890ff?style=for-the-badge&logo=antdesign&logoColor=1890ff&labelColor=282828",
    color: "#1890ff",
    width: 138.5,
  },
  "Chakra UI": {
    name: "Chakra UI",
    logo: "https://img.shields.io/badge/-Chakra%20UI-319795?style=for-the-badge&logo=chakraui&logoColor=319795&labelColor=282828",
    color: "#319795",
    width: 130.25,
  },
  "Material UI": {
    name: "Material UI",
    logo: "https://img.shields.io/badge/-Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=ffffff&labelColor=282828",
    color: "#319795",
    width: 144.75,
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    logo: "https://img.shields.io/badge/-Tailwind%20CSS-38b2ac?style=for-the-badge&logo=tailwindcss&logoColor=38b2ac&labelColor=282828",
    color: "#319795",
    width: 155,
  },
  Firebase: {
    name: "Firebase",
    logo: "https://img.shields.io/badge/-Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=ffca28&labelColor=282828",
    color: "#ffca28",
    width: 121,
  },
  Supabase: {
    name: "Supabase",
    logo: "https://img.shields.io/badge/-Supabase-3ecf8e?style=for-the-badge&logo=supabase&logoColor=3ecf8e&labelColor=282828",
    color: "#3ecf8e",
    width: 125,
  },
};
