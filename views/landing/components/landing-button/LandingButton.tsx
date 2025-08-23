import { FC } from "react";
import { FONTS } from "@/constants";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "@/types";

const Button: FC<ButtonProps> = ({
  alternate = false,
  ...props
}) => {
  return (
    <ChakraButton
      bg={alternate ? "brand.card" : "brand.primary"}
      color={alternate ? "brand.primary" : "brand.bg"}
      border={"1.5px solid"}
      fontWeight={600}
      fontFamily={FONTS.title}
      fontSize={14}
      borderColor={"transparent"}
      _hover={{
        bg: "brand.bg",
        borderColor: "brand.primary",
        color: "brand.primary",
      }}
      {...props}
    />
  );
};

export default Button;
