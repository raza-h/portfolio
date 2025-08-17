import React from "react";
import fonts from "@/constants/fonts";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Typewriter } from "@/components/common/typewriter";
import Image from "next/image";
import "./index.css";
import { Link } from "@/components/common/link";

const Home = () => {
  return (
    <section id={"home"}>
      <VStack
        background={"brand.bg"}
        minH={"89vh"}
        justify={[
          "space-around",
          "space-around",
          "space-around",
          "space-evenly",
        ]}
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
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          paddingX={[4, 8, 16, 20]}
          paddingY={[0, 0, 0, 12]}
        >
          <VStack alignItems={"flex-start"} paddingY={[10, 10, 10, 0]}>
            <Heading
              color={"brand.main"}
              fontFamily={fonts.title}
              fontSize={[35, 35, 40, 50]}
              textAlign={"left"}
              as={"h1"}
            >
              RAZA&nbsp;
              <Text color={"white"} as={"span"}>
                HAIDER
              </Text>
            </Heading>
            <Text
              marginTop={[2, 2, 5, 5]}
              fontSize={20}
              fontWeight={500}
              width={["100%", "100%", "100%", "100%"]}
              fontFamily={fonts.title}
              as={"h2"}
            >
              Software Engineer
            </Text>
            <HStack>
              <Link href="https://www.linkedin.com/in/razah1214/" target="_blank">
                <Image
                  src={"/icons/linkedin.svg"}
                  width={32}
                  height={32}
                  alt={"Raza Haider Linkedin"}
                />
              </Link>
              <Link href="https://github.com/raza-h" target="_blank">
                <Image
                  src={"/icons/github.svg"}
                  width={32}
                  height={32}
                  alt={"Raza Haider GitHub"}
                />
              </Link>
            </HStack>
            <Text fontSize={16} fontFamily={fonts.title} marginTop={10}>
              Building modern, scalable applications with a focus on performance
              and user experience.
            </Text>
          </VStack>
          <figure className="container-3d">
            <VStack align={"center"}>
              <Image
                width={700}
                height={467}
                alt={"Hero Section Image - Raza Haider"}
                src={"/images/hero.png"}
                className="card-3d"
                id={"hero-image"}
                priority
              />
            </VStack>
          </figure>
        </HStack>
        <Text
          fontWeight={800}
          fontFamily={fonts.large}
          color={"brand.main"}
          fontSize={[30, 30, 35, 40]}
        >
          <Typewriter
            words={[
              "Web\xa0\xa0Applications",
              "Stripe\xa0\xa0Integrations",
              "AI\xa0\xa0Integrations",
              "Landing\xa0\xa0Pages",
              "APIs",
              "AWS\xa0\xa0Deployments",
            ]}
            loop={0}
            typeSpeed={120}
            delaySpeed={200}
          />
        </Text>
        <Link
          href="#about"
          position={["static", "static", "static", "absolute"]}
          left={"95%"}
          aria-label="Scroll to About Section"
        >
          <figure className="scroll-to-bottom" />
        </Link>
      </VStack>
    </section>
  );
};

export default Home;
