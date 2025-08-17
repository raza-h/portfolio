import fonts from "@/constants/fonts";
import { projects } from "@/constants/generic";
import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { ProjectGrid } from "@/components/landing/project-grid";

const Projects = () => {
  return (
    <section id={"projects"}>
      <VStack
        bg={"brand.card"}
        paddingX={[4, 6, 8, 14]}
        paddingY={[8, 10, 12, 12, 14]}
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
        {projects?.map((project, index) => (
          <ProjectGrid project={project} key={project?.id} index={index} isLast={index === projects.length - 1} />
        ))}
      </VStack>
    </section>
  );
};

export default Projects;
