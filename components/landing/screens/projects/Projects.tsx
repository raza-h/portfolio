import fonts from "@/constants/fonts";
import { PROJECTS } from "@/constants/generic";
import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { ProjectGrid } from "@/components/landing/project-grid";
import { repeat } from "@/utils";

const Projects = () => {
  return (
    <VStack
      bg={"brand.card"}
      paddingX={[4, 6, 8, 14]}
      paddingY={[8, ...repeat(3, 12), 14]}
      gap={20}
    >
      <Heading
        color={"brand.light"}
        as={"h3"}
        fontWeight={600}
        fontSize={25}
        fontFamily={fonts.title}
      >
        PROJECTS
      </Heading>
      {PROJECTS?.map((project, index) => (
        <ProjectGrid
          project={project}
          key={project?.id}
          index={index}
          isLast={index === PROJECTS.length - 1}
        />
      ))}
    </VStack>
  );
};

export default Projects;
