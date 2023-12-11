import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { InstagramLogo, InstagramMobileLogo } from "../../Logos/constants";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { RiSendPlaneFill, RiAddBoxFill, RiMoreFill } from "react-icons/ri";
import { Tooltip } from "@chakra-ui/react";

function SideBar() {
  const sideBarItems = [
    { icon: <AiFillHome />, text: "Home", link: "/" },
    { icon: <FaSearch />, text: "Search", link: "/" },
    { icon: <MdOutlineExplore />, text: "Explore", link: "/" },
    { icon: <RiAddBoxFill />, text: "Create", link: "/" },
    { icon: <RiSendPlaneFill />, text: "Messages", link: "/" },
    { icon: <FaRegHeart />, text: "Notifications", link: "/" },
    {icon: <Avatar size={"xs"} name="Jigishu Bhadviya" src="./profilepic.png"/>,text:"Profile",link:"/jb_1903"}
  ];
  return (
    <Box
      height={"100vh"}
      //   backgroundColor={"green"}
      py={8}
      px={4}
      position={"sticky"}
      top={0}
      left={0}
      borderRight={"1px solid #737373"}
    >
      <Flex
        direction={"column"}
        gap={10}
        width={"full"}
        height={"full"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Link
          as={RouterLink}
          to={"/"}
          padding={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <InstagramLogo />
        </Link>
        <Link
          as={RouterLink}
          to={"/"}
          padding={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <InstagramMobileLogo />
        </Link>

        <VStack gap={3} align={"stretch"}>
          {sideBarItems.map((item, index) => {
            return (
              <Box key={index} display={"flex"}>
                <Tooltip
                  label={item.text}
                  key={index}
                  hasArrow
                  openDelay={300}
                  closeDelay={90}
                  placement="right"
                >
                  <Link
                    as={RouterLink}
                    to={item.link}
                    key={`base-${index}`}
                    padding={2}
                    display={{ base: "flex", md: "none" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={4}
                    borderRadius={6}
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    {item.icon}
                    <Text display={{ base: "none", md: "block" }}>
                      {item.text}
                    </Text>
                  </Link>
                </Tooltip>
                <Link
                  as={RouterLink}
                  to={item.link}
                  key={`md-${index}`}
                  padding={2}
                  display={{ base: "none", md: "flex" }}
                  alignItems={"center"}
                  gap={4}
                  borderRadius={6}
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  {item.icon}
                  <Text display={{ base: "none", md: "block" }}>
                    {item.text}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </VStack>

{/* More */}
        <Box ht={"auto"} my={1} py={1}>
                <Tooltip
                  label={"More"}
                  hasArrow
                  openDelay={300}
                  closeDelay={90}
                  placement="right"
                >
                  <Link
                    as={RouterLink}
                    to={"/"}
                    padding={2}
                    display={{ base: "flex", md: "none" }}
                    alignItems={"center"}
                    gap={4}
                    borderRadius={6}
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    <RiMoreFill/>
                    <Text display={{ base: "none", md: "block" }}>
                      {"More"}
                    </Text>
                  </Link>
                </Tooltip>
                <Link
                  as={RouterLink}
                  to={"/"}
                  padding={2}
                  display={{ base: "none", md: "flex" }}
                  alignItems={"center"}
                  gap={4}
                  borderRadius={6}
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  <RiMoreFill/>
                  <Text display={{ base: "none", md: "block" }}>
                    {"More"}
                  </Text>
                </Link>
              </Box>
      </Flex>
    </Box>
  );
}

export default SideBar;
