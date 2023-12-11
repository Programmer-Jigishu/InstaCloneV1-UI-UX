import React from 'react'
import { Box,Avatar,Flex,Link,Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function UserProfile({username,avatar}) {
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
        <Box px = {2} color={"blue.500"} fontSize={"xs"} cursor={"pointer"} _hover={{color:"whiteAlpha",bg:"whiteAlpha.100"}} onClick={() => console.log("Switch")}>Switch</Box>
    </Flex>
  </Box>
  )
}

export default UserProfile