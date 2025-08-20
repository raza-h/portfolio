import fonts from "@/constants/fonts";
import {
  Input as ChakraInput,
  InputProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

const Input: FC<
  InputProps & {
    containerAlign?: string;
    containerWidth?: string | number;
    errorMsg?: string;
    label?: ReactNode;
  }
> = ({
  containerAlign = "start",
  containerWidth = "100%",
  errorMsg = "",
  label = "",
  ...props
}) => {
  return (
    <VStack align={containerAlign} width={containerWidth}>
      {label && (
        <label htmlFor={props?.name}>
          <Text as={"span"} fontFamily={fonts.title}>
            {label}
          </Text>
        </label>
      )}
      <ChakraInput
        border={"1px solid"}
        borderColor={"brand.border"}
        _focus={{
          outlineColor: "brand.main",
        }}
        {...props}
      />
      <Text color={"red.300"} as={"small"}>
        {errorMsg}
      </Text>
    </VStack>
  );
};

export default Input;
