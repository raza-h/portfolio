"use client";

import { ReactElement } from "react";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ProviderProps } from "@/types";

export default function Provider(props: ProviderProps): ReactElement {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        colors: {
          brand: {
            primary: { value: "#4EF5E7" },
            light: { value: "#FFFFFF" },
            bg: { value: "#060514" },
            card: { value: "#4EF5E717" },
            border: { value: "#4EF5E775" },
          },
        },
      },
    },
  });
  return <ChakraProvider value={system}>{props?.children}</ChakraProvider>;
}
