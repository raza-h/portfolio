"use client";
import { default as NextImage } from "next/image";
import { useEffect, useState } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import fonts from "@/constants/fonts";
import { Link } from "@/components/common/link";
import { useHashUpdate } from "@/hooks";
import { INTERNAL_LINKS } from "@/constants/landing";
import { repeat } from "@/utils";
import { useHeaderVisibility } from "./hooks";

const Header = () => {
  const [left, setLeft] = useState("-100%");
  const [width, setWidth] = useState(0);
  const [hash, setHash] = useState("");
  const [showHeader, setShowHeader] = useState(true);

  useHashUpdate("section", setHash);
  useHeaderVisibility(setShowHeader, setWidth);

  useEffect(() => {
    if (left[0] !== "-" && width < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [left, width]);

  const toggleSidebar = () => {
    if (left[0] === "-") setLeft("0%");
    else setLeft("-100%");
  };

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
            fontFamily={fonts.title}
            fontWeight={500}
          >
            <Image
              src={"/icons/close.svg"}
              w={10}
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
                color={link?.hrefs?.includes(hash) ? "brand.main" : ""}
                cursor={"pointer"}
                _hover={{
                  textDecor: "none",
                  color: "brand.main",
                }}
                _active={{
                  outline: "none !important",
                }}
                href={link?.hrefs?.[0]}
              >
                <Text onClick={toggleSidebar}>{link?.name}</Text>
              </Link>
            ))}
          </HStack>
          <Image
            alt={"Hamburger Menu"}
            src={"/icons/menu.svg"}
            w={10}
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
