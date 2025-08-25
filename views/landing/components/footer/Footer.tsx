import dayjs from "dayjs";
import Image from "next/image";
import NextLink from "next/link";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FONTS, CONTACT_LINKS } from "@/constants";
import { INTERNAL_LINKS } from "@/views/landing/constants";
import { Link } from "@/components";
import { repeat } from "@/utils";

const Footer = () => {
  return (
    <footer>
      <VStack
        w={"100%"}
        bg={"brand.card"}
        paddingTop={20}
        paddingX={[4, 8, 12, 20, 40]}
        marginTop={[...repeat(3, 0), 20]}
        gap={20}
      >
        <HStack
          justify={"space-between"}
          w={"100%"}
          flexDir={[...repeat(3, "column"), "row"]}
          align={"start"}
        >
          <HStack gap={4} width={[...repeat(3, "100%"), undefined]}>
            <Link href={"#"}>
              <Image
                src={"/icons/logo.svg"}
                alt="Raza Haider - Software Engineer"
                width={80}
                height={80}
                loading="lazy"
              />
            </Link>
            <VStack align={"start"}>
              <Heading
                as={"h5"}
                fontFamily={FONTS.title}
                fontWeight={600}
                fontSize={22}
              >
                Raza Haider
              </Heading>
              <Text as="small" fontFamily={FONTS.title}>
                Software Engineer
              </Text>
            </VStack>
          </HStack>
          <HStack
            gap={24}
            align={"start"}
            marginTop={[...repeat(3, 10), 0]}
            flexDir={[...repeat(2, "column"), "row"]}
          >
            <VStack align={"start"}>
              <Heading as={"h6"} fontFamily={FONTS.title}>
                Links
              </Heading>
              {INTERNAL_LINKS?.map((link) => (
                <Link key={link?.id} href={link?.hrefs?.[0]}>
                  {link?.name}
                </Link>
              ))}
            </VStack>
            <VStack align={"start"}>
              <Heading as={"h6"} textWrap={"nowrap"} fontFamily={FONTS.title}>
                Get in touch
              </Heading>
              {CONTACT_LINKS?.map((link) => (
                <NextLink key={link?.href} href={link?.href} target={"_blank"}>
                  {link?.name}
                </NextLink>
              ))}
            </VStack>
          </HStack>
        </HStack>
        <HStack
          w={"100%"}
          justify={"center"}
          borderTop={"1px solid"}
          borderColor={"brand.border"}
          paddingY={5}
        >
          <Text as={"small"} fontFamily={FONTS.title}>
            © {dayjs().year()} Raza Haider. All rights reserved.
          </Text>
        </HStack>
      </VStack>
    </footer>
  );
};

export default Footer;
