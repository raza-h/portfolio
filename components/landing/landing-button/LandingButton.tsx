import React, { FC } from "react";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import fonts from "@/constants/fonts";

const Button: FC<ButtonProps & { alternate?: boolean }> = ({
  alternate = false,
  ...props
}) => {
  return (
    <ChakraButton
      bg={alternate ? "brand.card" : "brand.main"}
      color={alternate ? "brand.main" : "brand.bg"}
      border={"1.5px solid"}
      fontWeight={600}
      fontFamily={fonts.title}
      fontSize={14}
      borderColor={"transparent"}
      _hover={{
        bg: "brand.bg",
        borderColor: "brand.main",
        color: "brand.main",
      }}
      {...props}
    />
  );
};

export default Button;
