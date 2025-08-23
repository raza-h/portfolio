import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ServiceCard } from "@/views/landing/services/service-card";
import { FONTS, SERVICES } from "@/constants";
import { DragAndDrop } from "@/components";
import { repeat } from "@/utils";

const Services = () => {
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
        SERVICES
      </Heading>
      <Grid
        templateColumns={[
          ...repeat(2, "auto"),
          ...repeat(2, "repeat(2, auto)"),
          "repeat(3, auto)",
        ]}
        width={"100%"}
        gap={5}
        textAlign={"justify"}
      >
        <DragAndDrop
          items={SERVICES?.map((service) => ({
            id: service?.id,
            component: <ServiceCard key={service?.id} fadeIn {...service} />,
          }))}
        />
      </Grid>
    </VStack>
  );
};

export default Services;
