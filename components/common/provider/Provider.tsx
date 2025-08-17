"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
export default function Provider(props: { children: ReactNode }) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        colors: {
          brand: {
            main: { value: "#4EF5E7" },
            bg: { value: "#060514" },
            card: { value: "#4EF5E717" },
            light: { value: "#FFFFFF" },
            border: { value: "#4EF5E775" },
          },
        },
      },
    },
  });
  return <ChakraProvider value={system}>{props?.children}</ChakraProvider>;
}
