import Image from "next/image";
import { FC } from "react";
import { TechChipProps } from "@/types";

const TechStackChip: FC<TechChipProps> = ({ technology }) => {
  return (
    <Image
      src={technology?.logo}
      alt={technology?.name}
      width={technology?.width ?? 100}
      height={28}
    />
  );
};

export default TechStackChip;
