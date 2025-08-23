import { FC } from "react";
import { FONTS } from "@/constants";
import { Input as ChakraInput, Text, VStack } from "@chakra-ui/react";
import { InputProps } from "@/types";

const Input: FC<InputProps> = ({
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
          <Text as={"span"} fontFamily={FONTS.title}>
            {label}
          </Text>
        </label>
      )}
      <ChakraInput
        border={"1px solid"}
        borderColor={"brand.border"}
        _focus={{
          outlineColor: "brand.primary",
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
