import {
  Avatar,
  Flex,
  Text,
  Link,
  IconButton,
  VStack,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { RiMoreFill } from "react-icons/ri";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function FeedHeader({username,avatar}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const actionSome = () => {
    console.log("Action is Done.");
  };
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      py={4}
      borderBottom="1px solid #E2E8F0"
    >
      <Flex alignItems={"center"}>
        <Avatar size={"md"} src={avatar} />
        <Flex direction="column" ml={3}>
          <Link
            as={RouterLink}
            to={"/"}
            fontWeight="bold"
            color="blue.500"
            _hover={{ textDecoration: "none" }}
          >
            {username}
          </Link>
          <Text fontSize="sm" color="gray.500">
            * Last
          </Text>
        </Flex>
      </Flex>

      <Flex alignItems={"center"}>
        <IconButton
          icon={<RiMoreFill />}
          variant="ghost"
          aria-label="More"
          fontSize="20px"
          onClick={onOpen}
        />
        {/* When The Icon Button is Clicked This Modal Pops Up */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          border={"1px solid white"}
        >
          <ModalOverlay />
          <ModalContent w={"100%"} mx={0} borderRadius={15}>
            <ModalBody w={"100%"} margin={0} backgroundColor={"gray.900"} padding={0} borderRadius={15}>
              <VStack width={"100%"} alignItems={"center"} spacing={0} py={0} my={0}>
                <Box
                  w="full"
                  onClick={actionSome}
                  borderBottom={"1px solid #E2E8F0"}
                  py={2}
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ bg: "whiteApple.200" }}
                >
                  Action 1
                </Box>
                <Box
                  width={"100%"}
                  onClick={actionSome}
                  borderBottom={"1px solid #E2E8F0"}
                  py={2}
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ bg: "whiteApple.200" }}
                >
                  Action 2
                </Box>
                <Box
                  width={"100%"}
                  onClick={actionSome}
                  borderBottom={"1px solid #E2E8F0"}
                  py={2}
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ bg: "whiteApple.200" }}
                >
                  Action 3
                </Box>
                <Box
                  width={"100%"}
                  onClick={onClose}
                  py={2}
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ bg: "whiteApple.200" }}
                >
                  Close
                </Box>
                {/* Add more Box components for each action */}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* Modal Ending */}
      </Flex>
    </Flex>
  );
}

export default FeedHeader;
