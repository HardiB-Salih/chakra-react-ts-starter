import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaMoon, FaSun, FaRegSun } from "react-icons/fa";
import useColorModeSwitcherRedux from "../hook/useColorModeSwitcherRedux";

const ColorModeSwitcher: React.FC = (props) => {
  const { mode, setModeAndColor } = useColorModeSwitcherRedux();

  let SwitchIcon: React.ElementType;
  let text: string;
  switch (mode) {
    case "light":
      SwitchIcon = FaSun;
      text = "Light";
      break;
    case "dark":
      SwitchIcon = FaMoon;
      text = "Dark";
      break;
    default:
      SwitchIcon = FaRegSun;
      text = "System";
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        rightIcon={<SwitchIcon />}
        variant="outline"
        {...props}
      >
        {text}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setModeAndColor("light")}>Light</MenuItem>
        <MenuItem onClick={() => setModeAndColor("dark")}>Dark</MenuItem>
        <MenuItem onClick={() => setModeAndColor("system")}>System</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ColorModeSwitcher;
