import Image from "next/image";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Typewriter, Link } from "@/components";
import { repeat } from "@/utils";
import { SERVICES, SOCIAL_LINKS, FONTS } from "@/constants";
import "@/views/landing/home/index.css";

const Home = () => {
  return (
    <VStack
      background={"brand.bg"}
      minH={"89vh"}
      justify={[...repeat(3, "space-around"), "space-evenly"]}
      pos={"relative"}
      paddingBottom={[...repeat(3, 5), 0]}
      gap={[...repeat(3, 5), 0]}
    >
      <HStack
        w={"100%"}
        justifyContent={[...repeat(3, "space-between"), "space-around"]}
        flexDir={[...repeat(3, "column-reverse"), "row"]}
        paddingX={[4, 8, 16, 20]}
        paddingY={[0, 0, 0, 12]}
      >
        <VStack
          alignItems={"flex-start"}
          paddingY={[...repeat(3, 10), 0]}
          w={"100%"}
        >
          <Heading
            all={"unset"}
            color={"brand.primary"}
            fontFamily={FONTS.title}
            fontSize={[...repeat(2, 35), 40, 45, 50]}
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
            fontFamily={FONTS.title}
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
                  priority
                />
              </Link>
            ))}
          </HStack>
          <Text fontSize={16} fontFamily={FONTS.title} marginTop={10}>
            Building modern, scalable applications with a focus on performance
            and user experience.
          </Text>
        </VStack>
        <figure className="w-full">
          <VStack
            ml={"auto"}
            mr={[...repeat(4, 'auto'), 10]}
            align={[...repeat(3, "center"), "end"]}
            position={"relative"}
            w={[...repeat(2, "100%"), "90%", "100%", "85%", "70%"]}
          >
            <Image
              width={1185}
              height={805}
              alt={"Hero Section Image - Raza Haider"}
              src={"/images/hero.png"}
              id={"hero-image"}
              sizes="(min-width: 1540px) calc(35vw - 59px), (min-width: 1280px) calc(42.5vw - 71px), (min-width: 1040px) calc(50vw - 84px), (min-width: 780px) calc(90vw - 115px), (min-width: 480px) calc(100vw - 64px), calc(100vw - 32px)"
              priority
            />
          </VStack>
        </figure>
      </HStack>
      <Text
        fontWeight={800}
        fontFamily={FONTS.large}
        color={"brand.primary"}
        fontSize={[...repeat(2, 30), 35, 40]}
      >
        <Typewriter
          words={SERVICES?.map((service) =>
            service?.title?.split(" ")?.join("\xa0\xa0")
          )}
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
