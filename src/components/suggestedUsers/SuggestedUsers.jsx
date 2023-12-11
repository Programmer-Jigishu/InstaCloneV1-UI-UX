import { Flex, Text, Link} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import SuggestedUser from "./SuggestedUser";
import UserProfile from "./UserProfile";

function SuggestedUsers() {
  return (
    <Flex w={"full"} mx={0} px={10} direction={"column"}> 
      <Flex gap={2} direction={"column"}>
      {/* Own Profile */}
        
        <UserProfile username="LipstickGirl" avatar="/img1.png"/>
        <Flex justifyContent={"space-between"} alignItems={"center"}>

      <Text>Suggested Users : </Text>
      <Text color={"blue.500"} fontSize={"xs"} cursor={"pointer"} _hover={{color:"whiteAlpha",bg:"whiteAlpha.100"}} onClick={() => console.log("See All")}>See All</Text>
        </Flex>
      {/* All Users */}
        <SuggestedUser followers= {0} username="LipstickGirl" avatar="/img1.png"/>
        <SuggestedUser followers= {0} username="Matthew_Hayden" avatar="/img2.png"/>
        <SuggestedUser followers= {0} username="LoveYouMore" avatar="/img3.png"/>
        <SuggestedUser followers= {0} username="RonaldoMessi" avatar="/img4.png"/>

        {/* EXTRA Links */}
        <Text>Made with ❤️ by
        <Link href={"https://www.linkedin.com/in/jigishu-bhadviya-988a04121"} color={"blue.500"} fontWeight={"bold"} cursor={"pointer"} _hover={{color:"whiteAlpha",bg:"whiteAlpha.100"}}> Jigishu</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default SuggestedUsers;
