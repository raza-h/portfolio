import { About, Contact, Home, Projects, Services } from "@/components/landing/screens";

const Landing = async () => {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Landing;
