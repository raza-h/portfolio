import React from "react";
import fonts from "@/constants/fonts";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Typewriter } from "@/components/common/typewriter";
import Image from "next/image";
import "./index.css";
import { Link } from "@/components/common/link";
import { repeat } from "@/utils";
import { SERVICES, SOCIAL_LINKS } from "@/constants/generic";

const Home = () => {
  return (
    <VStack
      background={"brand.bg"}
      minH={"89vh"}
      justify={["space-around", "space-around", "space-around", "space-evenly"]}
      pos={"relative"}
    >
      <HStack
        w={"100%"}
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "space-around",
        ]}
        flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
        paddingX={[4, 8, 16, 20]}
        paddingY={[0, 0, 0, 12]}
      >
        <VStack alignItems={"flex-start"} paddingY={[...repeat(3, 10), 0]}>
          <Heading
            all={"unset"}
            color={"brand.main"}
            fontFamily={fonts.title}
            fontSize={[...repeat(2, 35), 40, 50]}
            textAlign={"left"}
            fontWeight={600}
            as={"h1"}
          >
            RAZA&nbsp;
            <Text color={"white"} as={"span"}>
              HAIDER
            </Text>
          </Heading>
          <Text
            marginTop={[...repeat(2, 2), ...repeat(2, 5)]}
            fontSize={20}
            fontWeight={500}
            width={"100%"}
            fontFamily={fonts.title}
            as={"h2"}
          >
            Software Engineer
          </Text>
          <HStack>
            {SOCIAL_LINKS?.map((link) => (
              <Link key={link?.href} href={link?.href} target="_blank">
                <Image
                  src={link?.imagePath}
                  width={32}
                  height={32}
                  alt={`Raza Haider ${link?.name}`}
                />
              </Link>
            ))}
          </HStack>
          <Text fontSize={16} fontFamily={fonts.title} marginTop={10}>
            Building modern, scalable applications with a focus on performance
            and user experience.
          </Text>
        </VStack>
        <figure>
          <VStack align={"center"} position={"relative"}>
            <Image
              width={700}
              height={467}
              alt={"Hero Section Image - Raza Haider"}
              src={"/images/hero.png"}
              id={"hero-image"}
              priority
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </VStack>
        </figure>
      </HStack>
      <Text
        fontWeight={800}
        fontFamily={fonts.large}
        color={"brand.main"}
        fontSize={[...repeat(2, 30), 35, 40]}
      >
        <Typewriter
          words={SERVICES?.map((service) => service?.title?.split(" ")?.join('\xa0\xa0'))}
          loop={0}
          typeSpeed={120}
          delaySpeed={200}
        />
      </Text>
      <Link
        href="#about"
        position={[...repeat(3, "static"), "absolute"]}
        left={"95%"}
        aria-label="Scroll to About Section"
      >
        <figure className="scroll-to-bottom" />
      </Link>
    </VStack>
  );
};

export default Home;
