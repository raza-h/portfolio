import { GraphicLink, TechList } from "@/components";
import { FONTS } from "@/constants";
import {
  CREDIBILITY_LINKS,
  GOSAAS_LINK,
  PROJECT_LINKS,
  TECH_STACK,
} from "@/views/landing/constants";
import { repeat } from "@/utils";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack
      bg={"brand.card"}
      paddingX={[4, 6, 8, 14]}
      paddingY={[8, ...repeat(3, 12), 14]}
      gap={[10, 20]}
    >
      <HStack
        width={"100%"}
        justify={["center", "space-evenly"]}
        flexWrap={"wrap"}
        gapX={[20, 4]}
        alignItems={"center"}
      >
        <Text
          fontSize={18}
          fontWeight={300}
          fontFamily={FONTS.body}
          display={["none", "block"]}
        >
          EMPLOYED BY &nbsp;&nbsp; &gt;
        </Text>
        {CREDIBILITY_LINKS?.map((link) => (
          <GraphicLink key={link?.href} graphic={link} target="_blank" />
        ))}
      </HStack>
      <HStack
        color={"brand.light"}
        alignItems={"flex-start"}
        justify={"space-around"}
        rounded={"md"}
        fontFamily={FONTS.body}
        fontSize={18}
        fontWeight={100}
        flexDir={[...repeat(3, "column-reverse"), "row"]}
        gap={16}
      >
        <VStack align={"start"} gapY={8} w={[...repeat(3, "100%"), "50%"]}>
          <Heading
            fontWeight={600}
            fontSize={25}
            fontFamily={FONTS.title}
            color={"brand.primary"}
            as={"h3"}
          >
            ABOUT{" "}
            <Text color={"white"} as={"span"}>
              ME
            </Text>
          </Heading>
          <Text w={"100%"} textAlign={"justify"} fontWeight={400}>
            I&apos;m Raza Haider, a Software Engineer specializing in React.js,
            Next.js, Express.js, and MySQL. I build{" "}
            <Text color={"brand.primary"} as={"span"}>
              fast, scalable, and maintainable web applications
            </Text>
            .
            <br />
            <br />
            At{" "}
            <Text color={"brand.primary"} as={"span"}>
              Jazz
            </Text>
            , I engineered a Backend-for-Frontend for{" "}
            <Text color={"brand.primary"} as={"span"}>
              SIMOSA
            </Text>{" "}
            dashboard reducing median payload size by 45%, improving UX for 20M+
            users. Also, I directed the end-to-end development of the Jazz Point
            Back Office and deliver backend services for{" "}
            <Text color={"brand.primary"} as={"span"}>
              Jazz Point
            </Text>
            , an application with 10K+ downloads on Google Play. Furthermore, I
            implemented comprehensive unit and integration tests on Jazz Point,
            achieving 92.64% branch coverage, and introduced reusable component
            architecture with AI-augmented workflows, reducing development time
            by 58%. Previously at{" "}
            <Text color={"brand.primary"} as={"span"}>
              Dubizzle Group
            </Text>
            , I contributed to transforming the OLX Marketplace into a hybrid
            e-commerce platform by leading the development of key features for{" "}
            <Text color={"brand.primary"} as={"span"}>
              OLX Seller Center
            </Text>{" "}
            and improving its initial page load performance by 35%.
            <br />
            <br /> I hold a BS in Computer Science from{" "}
            <Text color={"brand.primary"} as={"span"}>
              FAST
            </Text>
            , graduating with a 3.64 CGPA and multiple Dean&apos;s Honor List
            awards.
          </Text>
          <TechList list={TECH_STACK} />
        </VStack>
        <VStack
          justifyContent={"space-evenly"}
          position={"relative"}
          w={["100%", "100%", "100%", "40%"]}
          alignItems={"center"}
          gapY={6}
          height={[500, 500, 500, 700]}
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="razah1214"
            data-version="v1"
          />
          <VStack alignItems={"center"} gap={4} w={'100%'}>
            <Text
              fontSize={18}
              fontWeight={300}
              fontFamily={FONTS.body}
            >
              WORKING AT
            </Text>
            <GraphicLink graphic={GOSAAS_LINK} target="_blank" />
          </VStack>
        </VStack>
      </HStack>
      <HStack
        width={"100%"}
        justify={["center", "space-evenly"]}
        flexWrap={"wrap"}
        gapX={[20, 4]}
        alignItems={"center"}
      >
        <Text
          fontSize={18}
          fontWeight={300}
          fontFamily={FONTS.body}
          display={["none", "block"]}
        >
          WORKED ON &nbsp;&nbsp; &gt;
        </Text>
        {PROJECT_LINKS?.map((link) => (
          <GraphicLink key={link?.href} graphic={link} target="_blank" />
        ))}
      </HStack>
    </VStack>
  );
};

export default About;
