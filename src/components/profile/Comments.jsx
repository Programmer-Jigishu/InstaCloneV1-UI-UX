import { Avatar } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";

function Comments({ username, text, commentedAt, profilePic }) {
  return (
    <Flex gap={4} justifyContent={"space-between"} alignItems={"center"}>
      <Avatar img={profilePic} name={username} size={"sm"} alignSelf={"flex-start"} />
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={12} alignSelf={"flex-start"}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text border={"1px dashed #737373"} color={"gray.300"} fontSize={10}>
          {commentedAt}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comments;
