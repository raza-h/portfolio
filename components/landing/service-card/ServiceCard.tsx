"use client";
import { GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import "./index.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useInViewFadeIn } from "@/hooks";
import fonts from "@/constants/fonts";
import { repeat } from "@/utils";

const ServiceCard: FC<{
  id: string | number;
  icon?: { src: string; dimensions?: { width: number; height: number } };
  title: string;
  description: string;
  fadeIn?: boolean;
}> = ({ id, icon, title, description, fadeIn = false }) => {
  const { ref, props } = useInViewFadeIn();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: `${transition}, opacity 0.7s ease-out, scale 0.7s ease-out`,
  };

  return (
    <GridItem
      height={[...repeat(3, 80), 64, 80]}
      bg={"brand.card"}
      rounded={"lg"}
      cursor={isDragging ? "grabbing" : "move"}
      className="card"
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={[...repeat(3, 10), 5, 10]}
      border={"1px"}
      borderColor={"brand.border"}
      gap={2}
      ref={(node) => {
        ref.current = node;
        setNodeRef(node);
      }}
      shadow={"xl"}
      _hover={{
        scale: 1.05,
      }}
      {...(fadeIn ? props : {})}
      style={style}
      {...attributes}
      {...listeners}
      aria-describedby="DndDescribedBy-0"
    >
      {icon && (
        <VStack
          justify={"center"}
          align={"center"}
          overflow={"hidden"}
          height={"100%"}
        >
          <Image
            src={icon?.src}
            alt={`Service ${title} Icon`}
            width={icon.dimensions?.width ?? 140}
            height={icon.dimensions?.height ?? 140}
            loading="lazy"
          />
        </VStack>
      )}
      <VStack>
        <Heading
          color={"brand.main"}
          fontSize={20}
          width={"100%"}
          as={"h4"}
          fontFamily={fonts.title}
        >
          {title.split(" ")[0]}{" "}
          <span style={{ color: "#FFFFFF" }}>
            {title.slice(title.split(" ")[0].length, title.length)}
          </span>
        </Heading>
        <Text
          color={"brand.light"}
          fontWeight={300}
          fontSize={[15, 12]}
          textAlign={"left"}
        >
          {description}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default ServiceCard;
