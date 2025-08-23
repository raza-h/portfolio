import { Image } from "@chakra-ui/react";
import { FC } from "react";

interface TechChipProps {
  techStack: {
    name: string;
    logo: string;
    color?: string;
  };
}

const TechStackChip: FC<TechChipProps> = ({ techStack }) => {
  return (
    <Image src={techStack?.logo} alt={techStack?.name} marginRight="4px" />
  );
};

export default TechStackChip;
