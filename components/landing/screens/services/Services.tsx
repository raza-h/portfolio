import React from "react";
import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ServiceCard } from "@/components/landing/service-card";
import { services } from "@/constants/generic";
import { DragAndDrop } from "@/components/common/drag-and-drop";
import fonts from "@/constants/fonts";

const Services = () => {
  return (
    <section id={"services"}>
      <VStack
        paddingX={[4, 6, 12, 14, 14]}
        paddingY={10}
        gap={8}
        align={"start"}
      >
        <Heading color={"brand.main"} as={"h3"} fontWeight={600} fontSize={25} fontFamily={fonts.title}>
          SERVICES
        </Heading>
        <Grid
          templateColumns={["auto", "auto", "auto auto", "auto auto", "auto auto auto"]}
          width={"100%"}
          gap={5}
          textAlign={"justify"}
        >
          <DragAndDrop
            items={services?.map((service) => ({
              id: service?.id,
              component: <ServiceCard key={service?.id} fadeIn {...service} />,
            }))}
          />
        </Grid>
      </VStack>
    </section>
  );
};

export default Services;
