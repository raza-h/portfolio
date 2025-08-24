import { FC } from "react";
import { TECH_CHIP } from "@/constants";
import { HStack } from "@chakra-ui/react";
import { TechChip } from "@/components";
import { TechListProps } from "@/types";

const TechList: FC<TechListProps> = ({ list = [] }) => {
  return (
    <HStack w={"100%"} flexWrap={"wrap"} pos={'relative'}>
      {list?.map((technology) => (
        <TechChip key={technology} technology={TECH_CHIP[technology]} />
      ))}
    </HStack>
  );
};

export default TechList;
