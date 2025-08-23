"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FONTS } from "@/constants";
import { useInViewFadeIn } from "@/hooks";
import { Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { repeat } from "@/utils";
import { LandingButton } from "@/views/landing/components";
import { TechList } from "@/components";
import "@/views/landing/projects/project-grid/index.css";

const ProjectGrid: FC<{
  project: {
    id: string | number;
    title: string;
    description?: string;
    imagePath: string;
    link?: string;
    tech: string[];
  };
  index: number;
  isLast: boolean;
}> = ({ project, index = -1, isLast = false }) => {
  const fadeInOptions = {
    transition: "opacity 0.7s ease-out",
  };

  const { ref: imageRef, props: imageProps } = useInViewFadeIn(fadeInOptions);

  const { ref: descriptionRef, props: descriptionProps } =
    useInViewFadeIn(fadeInOptions);

  const { ref: comingSoonRef, props: comingSoonProps } =
    useInViewFadeIn(fadeInOptions);

  return (
    <>
      <Grid
        templateColumns={[...repeat(3, "auto"), "repeat(5, auto)"]}
        width={"100%"}
        gapY={20}
        gapX={[...repeat(3, 0), 40]}
      >
        <VStack
          h={[250, 330, 490, 300, 500]}
          gridColumn={[...repeat(3, "span 1"), "span 3"]}
          overflow={"hidden"}
          rounded={"xl"}
          scrollbar={"hidden"}
          ref={imageRef}
          {...imageProps}
        >
          <Image
            src={project?.imagePath}
            width={1133}
            height={650}
            alt={project?.title}
          />
        </VStack>
        <VStack
          align={"start"}
          justify={"end"}
          width={"100%"}
          gap={8}
          gridColumn={[...repeat(3, "span 1"), "span 2"]}
          {...(index % 2 === 0
            ? {
                gridRowStart: [...repeat(3, undefined), "1"],
              }
            : {})}
          {...descriptionProps}
        >
          <VStack align={"start"}>
            <Heading
              ref={descriptionRef}
              as={"h4"}
              fontFamily={FONTS.title}
              fontWeight={400}
            >
              <Text color={"brand.primary"} as={"span"}>
                {project?.title?.split(" ")?.[0] ?? ""}
              </Text>{" "}
              {project?.title?.split(" ")?.slice(1)?.join(" ") ?? ""}
            </Heading>
            <Text fontFamily={FONTS.body}>{project?.description ?? ""}</Text>
          </VStack>
          <TechList list={project?.tech} />
          <HStack w={"100%"} justify={"start"}>
            {project?.link && (
              <Link href={project?.link} target="_blank">
                <LandingButton>View Project</LandingButton>
              </Link>
            )}
          </HStack>
        </VStack>
      </Grid>
      {isLast && (
        <VStack
          marginTop={[...repeat(3, 10), 20]}
          ref={comingSoonRef}
          {...comingSoonProps}
        >
          <Text
            color={"brand.primary"}
            fontFamily={FONTS.large}
            fontSize={[...repeat(3, "xl"), "3xl"]}
            className={comingSoonProps?.opacity === 1 ? "blink" : ""}
          >
            More Coming Soon...
          </Text>
        </VStack>
      )}
    </>
  );
};

export default ProjectGrid;
