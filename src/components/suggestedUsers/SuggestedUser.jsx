import {useState} from "react";
import { Text, Box, Flex, Link, Avatar } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
function SuggestedUser({ username, avatar }) {
    const [isFollowed, setIsFollowed] = useState(0);
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={1}
        //   borderBottom="1px solid #E2E8F0"
      >
        <Flex alignItems={"center"}>
          <Avatar size={"sm"} src={avatar} />
          <Flex direction="column" ml={3}>
            <Link as={RouterLink} to={"/"} fontWeight="bold" color="whiteAlpha" _hover={{ textDecoration: "none" }} fontSize={"sm"}>
              {username}
            </Link>
            <Text fontSize="xs" color="gray.500">
              * Followed by abc
            </Text>
          </Flex>
        </Flex>
          <Box px = {2} color={"blue.500"} fontSize={"xs"} cursor={"pointer"} _hover={{color:"whiteAlpha",bg:"whiteAlpha.100"}} onClick={() => {console.log("Follow");isFollowed===0?setIsFollowed(1):setIsFollowed(0)}}>{isFollowed===0?"Follow":"Unfollow"}</Box>
      </Flex>
    </Box>
  );
}

export default SuggestedUser;
