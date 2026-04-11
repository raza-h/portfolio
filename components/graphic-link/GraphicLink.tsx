import Image from "next/image";
import { VStack } from "@chakra-ui/react";
import Link from "@/components/link/Link";
import { GraphicLinkProps } from "@/types";

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 50;

const GraphicLink = ({
  graphic,
  children,
  priority = false,
  alt,
  gap = 2,
  ...linkProps
}: GraphicLinkProps) => {
  const width = graphic.dimensions?.width ?? DEFAULT_WIDTH;
  const height = graphic.dimensions?.height ?? DEFAULT_HEIGHT;

  return (
    <Link {...linkProps} href={graphic.href}>
      <VStack gap={gap} alignItems={"center"}>
        <Image
          src={graphic.imagePath}
          alt={alt ?? graphic.name}
          width={width}
          height={height}
          priority={priority}
          {...(!priority ? { loading: "lazy" as const } : {})}
        />
        {children}
      </VStack>
    </Link>
  );
};

export default GraphicLink;
