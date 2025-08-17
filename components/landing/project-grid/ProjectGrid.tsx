"use client";
import fonts from "@/constants/fonts";
import { useInViewFadeIn } from "@/hooks";
import { Button, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import "./index.css";

const ProjectGrid: FC<{
  project: {
    id: string | number;
    title: string;
    description?: string;
    imagePath: string;
    link?: string;
  };
  index: number;
  isLast: boolean;
}> = ({ project, index = -1, isLast = false }) => {
  const { ref: imageRef, props: imageProps } = useInViewFadeIn({
    transition: "opacity 0.7s ease-out",
  });
  const { ref: descriptionRef, props: descriptionProps } = useInViewFadeIn({
    transition: "opacity 0.7s ease-out",
  });
  const { ref: comingSoonRef, props: comingSoonProps } = useInViewFadeIn({
    transition: "opacity 0.7s ease-out",
  });

  return (
    <>
      <Grid
        templateColumns={["auto", "auto", "auto", "auto auto auto auto auto"]}
        width={"100%"}
        gapY={20}
        gapX={[0, 0, 0, 40]}
      >
        <VStack
          h={[250, 330, 490, 300, 500]}
          gridColumn={["span 1", "span 1", "span 1", "span 3"]}
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
          gridColumn={["span 1", "span 1", "span 1", "span 2"]}
          {...(index % 2 === 0
            ? {
                gridRowStart: [undefined, undefined, undefined, "1"],
              }
            : {})}
          {...descriptionProps}
        >
          <VStack align={"start"}>
            <Heading
              ref={descriptionRef}
              as={"h4"}
              fontFamily={fonts.title}
              fontWeight={400}
            >
              <Text color={"brand.main"} as={"span"}>
                {project?.title?.split(" ")?.[0] ?? ""}
              </Text>{" "}
              {project?.title?.split(" ")?.slice(1)?.join(" ") ?? ""}
            </Heading>
            <Text fontFamily={fonts.body}>{project?.description ?? ""}</Text>
          </VStack>
          <HStack w={"100%"} justify={"start"}>
            {project?.link && (
              <Link href={project?.link} target="_blank">
                <Button
                  bg={"brand.main"}
                  color={'brand.bg'}
                  border={"1.5px solid"}
                  fontWeight={600}
                  fontFamily={fonts.title}
                  fontSize={14}
                  borderColor={"transparent"}
                  _hover={{ bg: "brand.bg", borderColor: "brand.main", color: "brand.main" }}
                >
                  View Live
                </Button>
              </Link>
            )}
          </HStack>
        </VStack>
      </Grid>
      {isLast && (
        <VStack marginTop={[10, 10, 10, 20]} ref={comingSoonRef} {...comingSoonProps}>
          <Text
            color={"brand.main"}
            fontFamily={fonts.large}
            fontSize={"3xl"}
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
