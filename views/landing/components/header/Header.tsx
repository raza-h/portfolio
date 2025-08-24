"use client";

import { default as NextImage } from "next/image";
import { HStack, Image, Text } from "@chakra-ui/react";
import { FONTS } from "@/constants";
import { Link } from "@/components";
import { useHeader } from "@/hooks";
import { INTERNAL_LINKS } from "@/views/landing/constants";
import { repeat } from "@/utils";

const Header = () => {
  const { left, hash, showHeader, toggleSidebar } = useHeader();

  return (
    <header
      style={{
        height: 100,
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
        transition: "transform 0.3s ease",
        transform: showHeader ? "translateY(0)" : "translateY(-120%)",
      }}
    >
      <HStack
        w={"100%"}
        paddingY={[...repeat(3, 5), 8]}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={[4, 8, 16, 20]}
        background={"brand.bg"}
      >
        <Link href={"#"}>
          <NextImage
            src={"/icons/logo.svg"}
            width={60}
            height={60}
            alt={"Raza Haider Logo"}
            priority
          />
        </Link>
        <nav>
          <HStack
            bg={[...repeat(3, "#060514C1"), "transparent"]}
            fontSize={[...repeat(3, 16), 14]}
            position={[...repeat(3, "absolute"), "static"]}
            flexDir={[...repeat(3, "column"), "row"]}
            width={[...repeat(3, "100%"), "fit-content"]}
            left={left}
            transition={"left 200ms linear"}
            top={0}
            h={[...repeat(3, "100vh"), "fit-content"]}
            justifyContent={"center"}
            color={"brand.light"}
            zIndex={100}
            spaceX={[...repeat(3, 0), 10]}
            spaceY={[...repeat(3, 10), 0]}
            fontFamily={FONTS.title}
            fontWeight={500}
          >
            <Image
              src={"/icons/close.svg"}
              aria-label="Close Menu"
              w={10}
              h={10}
              position={"absolute"}
              top={4}
              right={4}
              onClick={toggleSidebar}
              display={[...repeat(3, "block"), "none"]}
              cursor={"pointer"}
              alt={"Close Button"}
            />
            {INTERNAL_LINKS?.map((link) => (
              <Link
                key={link?.hrefs?.[0]}
                color={link?.hrefs?.includes(hash) ? "brand.primary" : ""}
                cursor={"pointer"}
                onClick={(e) => toggleSidebar(e, link?.hrefs?.[0] === '#')}
                _hover={{
                  textDecor: "none",
                  color: "brand.primary",
                }}
                _active={{
                  outline: "none !important",
                }}
                href={link?.hrefs?.[0]}
              >
                <Text>{link?.name}</Text>
              </Link>
            ))}
          </HStack>
          <Image
            alt={"Hamburger Menu"}
            aria-label="Show Menu"
            src={"/icons/menu.svg"}
            w={10}
            h={10}
            display={[...repeat(3, "block"), "none"]}
            onClick={toggleSidebar}
            cursor={"pointer"}
          />
        </nav>
      </HStack>
    </header>
  );
};

export default Header;
