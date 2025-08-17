import { Link } from "@/components/common/link";
import fonts from "@/constants/fonts";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <VStack
      w={"100%"}
      bg={"brand.card"}
      paddingTop={20}
      paddingX={[4, 8, 12, 20, 40]}
      marginTop={20}
      gap={20}
    >
      <HStack
        justify={"space-between"}
        w={"100%"}
        flexDir={["column", "column", "column", "row"]}
        align={'start'}
      >
        <HStack gap={4} width={["100%", "100%", "100%", undefined]}>
          <Link href={"#"}>
            <Image
              src={"/icons/logo.svg"}
              alt="Raza Haider - Software Engineer"
              width={80}
              height={80}
            />
          </Link>
          <VStack align={"start"}>
            <Heading as={'h5'} fontFamily={fonts.title} fontWeight={600} fontSize={22}>
              Raza Haider
            </Heading>
            <Text as="small" fontFamily={fonts.title}>
              Software Engineer
            </Text>
          </VStack>
        </HStack>
        <HStack gap={24} align={"start"} marginTop={[10, 10, 10, 0]} flexDir={["column", "column", "row"]}>
          <VStack align={"start"}>
            <Heading as={"h6"} fontFamily={fonts.title}>Links</Heading>
            <Link href={"#"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#contact"}>Contact</Link>
          </VStack>
          <VStack align={"start"}>
            <Heading as={"h6"} textWrap={'nowrap'} fontFamily={fonts.title}>Get in touch</Heading>
            <NextLink
              target="_blank"
              href={"https://www.linkedin.com/in/razah1214"}
            >
              LinkedIn
            </NextLink>
            <NextLink target="_blank" href={"https://github.com/raza-h"}>
              GitHub
            </NextLink>
            <NextLink target="_blank" href={"mailto:razah12145@gmail.com"}>
              Email
            </NextLink>
          </VStack>
        </HStack>
      </HStack>
      <HStack w={'100%'} justify={'center'} borderTop={'1px solid'} borderColor={'brand.border'} paddingY={5}>
        <Text as={"small"} fontFamily={fonts.title}>
            © {dayjs().year()} Raza Haider. All rights reserved.
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
