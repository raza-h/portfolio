import { FC } from "react";
import { Image } from "@chakra-ui/react";
import { TechChipProps } from "@/types";

const TechStackChip: FC<TechChipProps> = ({ technology }) => {
  return (
    <Image src={technology?.logo} alt={technology?.name} marginRight="4px" />
  );
};

export default TechStackChip;
