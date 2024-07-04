import { VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  // Define props here
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <VStack>
      <Header />

      <Outlet />

      <Footer />
    </VStack>
  );
};

export default Layout;
