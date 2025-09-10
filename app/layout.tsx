import type { Metadata } from "next";
import {
  Inria_Serif,
  Inter,
  Monoton,
  Montserrat,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { Provider } from "@/components";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inria_serif = Inria_Serif({
  variable: "--font-inria-serif",
  weight: "400",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Raza Haider - Software Engineer | Full-Stack Developer | Frontend Engineer",
  description:
    "Software Engineer specializing in Full-Stack, Frontend, and AI solutions. Expert in React.js, Next.js, Node.js, Express.js, Stripe integration, API development, and ChatGPT/OpenAI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${roboto.variable} ${inria_serif.variable} ${monoton.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
