import Image from "next/image";
import Link from "next/link";
import { TechList } from "@/components";
import { FONTS } from "@/constants";
import { CREDIBILITY_LINKS, TECH_STACK } from "@/views/landing/constants";
import { repeat } from "@/utils";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack
      bg={"brand.card"}
      paddingX={[4, 6, 8, 14]}
      paddingY={[8, ...repeat(3, 12), 14]}
      gap={20}
    >
      <HStack width={"100%"} justify={"space-evenly"}>
        {CREDIBILITY_LINKS?.map((link) => (
          <Link key={link?.href} href={link?.href} target="_blank">
            <Image
              src={link?.imagePath}
              alt={link?.name}
              width={link?.dimensions?.width ?? 100}
              height={link?.dimensions?.height ?? 50}
              loading={"lazy"}
            />
          </Link>
        ))}
      </HStack>
      <HStack
        color={"brand.light"}
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
          <Text
            w={"100%"}
            textAlign={"justify"}
            fontWeight={400}
          >
            I&apos;m Raza Haider, a Software Engineer with expertise in
            React.js, Next.js, and modern UI frameworks. At{" "}
            <Text color={"brand.primary"} as={"span"}>
              Dubizzle Group
            </Text>
            , I contributed to transforming the OLX Marketplace into a hybrid
            e-commerce platform, leading key features in the{" "}
            <Text color={"brand.primary"} as={"span"}>
              OLX Seller Center
            </Text>{" "}
            and improving performance by 35%. I hold a BS in Computer Science
            from{" "}
            <Text color={"brand.primary"} as={"span"}>
              FAST
            </Text>
            , graduating with a 3.64 CGPA and multiple Dean&apos;s Honor List
            awards. I build fast, scalable, and maintainable web applications.
          </Text>
          <TechList list={TECH_STACK} />
        </VStack>
        <VStack justifyContent={"center"} position={"relative"} w={"40%"}>
          <VStack
            w={[300, 370]}
            h={300}
            bg={"transparent"}
            overflow={"hidden"}
            justify={"center"}
            rounded={"md"}
            border={"1.5px solid"}
            borderColor={"brand.primary"}
            boxShadow={[
              "none",
              "rgba(78, 245, 231, 0.4) 5px 5px, rgba(78, 245, 231, 0.3) 10px 10px, rgba(78, 245, 231, 0.2) 15px 15px, rgba(78, 245, 231, 0.1) 20px 20px, rgba(78, 245, 231, 0.05) 25px 25px",
            ]}
            position={'relative'}
          >
            <Image
              alt={"Raza Haider Profile Picture"}
              src={"/images/profile-pic.png"}
              width={2459}
              height={2665}
              loading={"lazy"}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            />
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default About;
