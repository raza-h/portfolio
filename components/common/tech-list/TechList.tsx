import { TECH_CHIP } from "@/constants/generic";
import { HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { TechChip } from "../tech-chip";

const TechList: FC<{ list: string[] }> = ({ list = [] }) => {
  return (
    <HStack w={"100%"} flexWrap={"wrap"}>
      {list?.map((techStack) => (
        <TechChip key={techStack} techStack={TECH_CHIP[techStack]} />
      ))}
    </HStack>
  );
};

export default TechList;
