import Image from "next/image";
import Link from "next/link";
import FONTS from "@/constants/fonts";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ContactForm } from "@/views/landing/contact/contact-form";
import { CONTACT_LINKS } from "@/constants/generic-constants";
import { repeat } from "@/utils";

const Contact = () => {
  return (
    <VStack
      paddingX={[4, 6, ...repeat(3, 14)]}
      paddingY={10}
      gap={8}
      align={"start"}
    >
      <Heading
        color={"brand.primary"}
        as={"h3"}
        fontWeight={600}
        fontSize={25}
        fontFamily={FONTS.title}
      >
        CONTACT
      </Heading>
      <HStack
        width={"100%"}
        justify={"space-between"}
        flexDir={[...repeat(3, "column"), "row"]}
        gap={20}
      >
        <VStack align={"start"} gap={4} w={[...repeat(3, "100%"), "30%"]}>
          <Heading as={"h4"} fontFamily={FONTS.title} marginBottom={5}>
            Let&apos;s{" "}
            <Text as={"span"} color={"brand.primary"}>
              Connect
            </Text>
          </Heading>
          {CONTACT_LINKS?.map((link) => (
            <Link href={link?.href} key={link?.href} target="_blank">
              <HStack>
                <Image
                  src={link?.imagePath}
                  alt={`Raza Haider ${link?.name}`}
                  width={25}
                  height={25}
                />
                <Text as={"h5"} fontFamily={FONTS.title}>
                  {link?.identifier}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
        <ContactForm />
      </HStack>
    </VStack>
  );
};

export default Contact;
