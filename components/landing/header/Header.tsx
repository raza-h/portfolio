"use client";
import { default as NextImage } from "next/image";
import { useEffect, useState } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import fonts from "@/constants/fonts";
import { Link } from "@/components/common/link";
import { useHashUpdate } from "@/hooks";

const Header = () => {
  const [left, setLeft] = useState("-100%");
  const [width, setWidth] = useState(0);
  const [hash, setHash] = useState("");
  const [showHeader, setShowHeader] = useState(true);

  useHashUpdate("section", setHash);

  useEffect(() => {
    let lastScrollY = 0;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (left[0] !== "-" && width < 1024) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
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
        paddingY={[5, 5, 5, 8]}
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
            bg={["#060514C1", "#060514C1", "#060514C1", "transparent"]}
            fontSize={[16, 16, 16, 14]}
            position={["absolute", "absolute", "absolute", "static"]}
            flexDir={["column", "column", "column", "row"]}
            width={["100%", "100%", "100%", "fit-content"]}
            left={left}
            transition={"left 200ms linear"}
            top={0}
            h={["100vh", "100vh", "100vh", "fit-content"]}
            justifyContent={"center"}
            color={"brand.light"}
            zIndex={100}
            spaceX={[0, 0, 0, 10]}
            spaceY={[10, 10, 10, 0]}
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
              display={["block", "block", "block", "none"]}
              cursor={"pointer"}
              alt={"Close Button"}
            />
            <Link
              color={!hash || hash === "#" ? "brand.main" : ""}
              cursor={"pointer"}
              _hover={{
                textDecor: "none",
                color: "brand.main",
              }}
              _active={{
                outline: "none !important",
              }}
              href={"#"}
            >
              <Text onClick={toggleSidebar}>Home</Text>
            </Link>
            <Link
              cursor={"pointer"}
              color={hash === "#about" ? "brand.main" : ""}
              _hover={{
                textDecor: "none",
                color: "brand.main",
              }}
              href={"#about"}
            >
              <Text onClick={toggleSidebar}>About</Text>
            </Link>
            <Link
              cursor={"pointer"}
              color={hash === "#services" ? "brand.main" : ""}
              _hover={{
                textDecor: "none",
                color: "brand.main",
              }}
              href={"#services"}
            >
              <Text onClick={toggleSidebar}>Services</Text>
            </Link>
            <Link
              cursor={"pointer"}
              color={hash === "#projects" ? "brand.main" : ""}
              _hover={{
                textDecor: "none",
                color: "brand.main",
              }}
              href={"#projects"}
            >
              <Text onClick={toggleSidebar}>Projects</Text>
            </Link>
            <Link
              cursor={"pointer"}
              _hover={{
                textDecor: "none",
                color: "brand.main",
              }}
              href={"#contact"}
              color={hash === "#contact" ? "brand.main" : ""}
            >
              <Text onClick={toggleSidebar}>Contact</Text>
            </Link>
          </HStack>
          <Image
            alt={"Hamburger Menu"}
            src={"/icons/menu.svg"}
            w={10}
            display={["block", "block", "block", "none"]}
            onClick={toggleSidebar}
            cursor={"pointer"}
          />
        </nav>
      </HStack>
    </header>
  );
};

export default Header;
