import fonts from "@/constants/fonts";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactForm } from "../../contact-form";

const Contact = () => {
  return (
    <section id={"contact"}>
      <VStack
        paddingX={[4, 6, 12, 14, 14]}
        paddingY={10}
        gap={8}
        align={"start"}
      >
        <Heading
          color={"brand.main"}
          as={"h3"}
          fontWeight={600}
          fontSize={25}
          fontFamily={fonts.title}
        >
          CONTACT
        </Heading>
        <HStack width={"100%"} justify={"space-between"} flexDir={["column", "column", "column", "row"]} gap={20}>
          <VStack align={"start"} gap={4} w={['100%', '100%', '50%', '30%']}>
            <Heading as={"h4"} fontFamily={fonts.title} marginBottom={5}>
              Let&apos;s{" "}
              <Text as={"span"} color={"brand.main"}>
                Connect
              </Text>
            </Heading>
            <Link href={"mailto:razah12145@gmail.com"} target="_blank">
              <HStack>
                <Image
                  src={"/icons/email.svg"}
                  alt="Raza Haider Email"
                  width={25}
                  height={25}
                />
                <Text as={"h5"} fontFamily={fonts.title}>
                  razah12145@gmail.com
                </Text>
              </HStack>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/razah1214"}
              target="_blank"
            >
              <HStack>
                <Image
                  src={"/icons/linkedin.svg"}
                  alt="Raza Haider LinkedIn"
                  width={25}
                  height={25}
                />
                <Text as={"h5"} fontFamily={fonts.title}>
                  razah1214
                </Text>
              </HStack>
            </Link>
            <Link href={"https://github.com/raza-h"} target="_blank">
              <HStack>
                <Image
                  src={"/icons/github.svg"}
                  alt="Raza Haider GitHub"
                  width={25}
                  height={25}
                />
                <Text as={"h5"} fontFamily={fonts.title}>
                  raza-h
                </Text>
              </HStack>
            </Link>
          </VStack>
          <ContactForm />
        </HStack>
      </VStack>
    </section>
  );
};

export default Contact;
