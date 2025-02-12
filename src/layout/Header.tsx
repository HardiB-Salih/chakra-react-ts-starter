import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitcher from "../components/ColorModeSwitcher";

interface HeaderProps {
  // Define props here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box w={"100%"} position="sticky" shadow={"base"}>
      <HStack py={2} px={4} justify={"space-between"}>
        <Text as={"b"}>Logo</Text>

        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
};

export default Header;
