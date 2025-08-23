import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Link = (props: LinkProps) => {
  return <ChakraLink {...props} _focus={{ outline: "none !important" }} />;
};

export default Link;
