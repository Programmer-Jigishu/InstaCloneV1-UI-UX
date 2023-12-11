import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
const HomePageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {/* <div>HomePageLayout</div> */}
      <Flex>
        {/* // Sidebar on Left Side. */}
        {pathname !== "/auth" ? (
          <>
            <Box w={{ base: "70px", md: "240px" }}>
              <SideBar />
            </Box>
            <Box px={0} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
              {children}
            </Box>
          </>
        ) : (
          <Box w={"full"}>
            {children}
          </Box>
        )}

        {/* // Content on Right Side. */}
        {/* <Box w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
          {children}
        </Box> */}
      </Flex>
    </>
  );
};

export default HomePageLayout;
