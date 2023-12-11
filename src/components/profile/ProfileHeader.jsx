import React from "react";
import { Avatar, Flex, Text, Box } from "@chakra-ui/react";

function ProfileHeader({ username, avatar }) {
  return (
    <Flex
      gap={{ base: 4, sm: 6 }}
      direction={{ base: "column", sm: "row" }}
      ml={4}
      justifyContent={{ base: "flex-start" }}
      alignItems={"center"}
      my={6}
    >
      <Box px={5}>
        <Avatar size={"2xl"} src={avatar} />
      </Box>
      <Flex px={5} display={{ base: "flex", sm: "none" }}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          {username}
        </Text>
      </Flex>
      <Flex
        mx={4}
        direction={"column"}
        gap={4}
        justifyContent={{ base: "center", sm: "flex-start" }}
        alignItems={"center"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          display={{ base: "none", sm: "flex" }}
        >
          {username}
        </Text>
        <Flex gap={{ base: 4, sm: 10 }}>
          <Text>{`0 Posts`}</Text>
          <Text>{`139 Followers`}</Text>
          <Text>{`190 Followings`}</Text>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text fontWeight={"bold"}>Jigishu Bhadviya</Text>
          <Text fontSize={"sm"} border="1px dashed #737373" mt={1}>My Status is Null. </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProfileHeader;
