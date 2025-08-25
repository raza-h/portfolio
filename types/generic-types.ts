import { TECH_CHIP } from "@/constants";
import {
  InputProps as ChakraInputProps,
  TextareaProps,
  Tooltip as ChakraTooltip,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { ReactNode, RefObject } from "react";

export type DragItem = { id: UniqueIdentifier; component: ReactNode };

export type CustomInputProps = {
  containerAlign?: string;
  containerWidth?: string | number;
  errorMsg?: string;
  label?: ReactNode;
};

export type InputProps = ChakraInputProps & CustomInputProps;

export type TextAreaProps = TextareaProps & CustomInputProps;

export type ProviderProps = { children: ReactNode };

export type Technology = {
  name: string;
  logo: string;
  color?: string;
  width?: number;
};

export type TechChipProps = {
  technology: Technology;
};

export type TechChipMap = { [key: string]: Technology };

export type TechIdentifier = keyof typeof TECH_CHIP;

export type TechListProps = { list: TechIdentifier[] };

export type TooltipProps = ChakraTooltip.RootProps & {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  content: ReactNode;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
};

export type ButtonProps = ChakraButtonProps & { alternate?: boolean };

export type Project = {
  id: string | number;
  title: string;
  description?: string;
  image: {
    path: string;
    dimensions?: { width: number; height: number };
    sizes?: string;
  },
  link?: string;
  tech: string[];
};

export type ProjectGridProps = {
  project: Project;
  index: number;
  isLast: boolean;
};
