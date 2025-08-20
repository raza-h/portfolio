import fonts from "@/constants/fonts";
import {
  Textarea,
  Text,
  VStack,
  TextareaProps,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

const TextArea: FC<
  TextareaProps & {
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
      <Textarea
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

export default TextArea;
