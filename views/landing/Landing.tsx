import { INTERNAL_LINKS } from "@/views/landing/constants";

const Landing = async () => {
  return INTERNAL_LINKS?.map((Link) => {
    return (
      <section id={Link?.id} key={Link?.id}>
        <Link.Component key={Link?.name} />
      </section>
    );
  });
};

export default Landing;
