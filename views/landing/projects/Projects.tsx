import { PROJECTS, FONTS } from "@/constants";
import { Heading, VStack } from "@chakra-ui/react";
import { ProjectGrid } from "@/views/landing/projects/project-grid";
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
        fontFamily={FONTS.title}
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
