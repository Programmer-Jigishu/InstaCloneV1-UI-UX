import {
  GridItem,
  Flex,
  Image,
  Text,
  useDisclosure,
  Button,
  Box,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { RiMore2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Divider } from "@chakra-ui/react";
import Comments from "./Comments";
import ProfilePostFooter from "./ProfilePostFooter";
function ProfilePost({ img, username, avatar }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem
      overflow={"hidden"}
      cursor={"pointer"}
      borderRadius={4}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={"1/1"}
      justifyContent={"center"}
    >
      <Flex
        opacity={0}
        _hover={{ opacity: 1 }}
        transition={"all 0.2s ease-in-out"}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        zIndex={1}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={onOpen}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex direction={"column"} alignItems={"center"}>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"}>85</Text>
          </Flex>
          <Flex direction={"column"} alignItems={"center"}>
            <FaComment size={20} />
            <Text fontWeight={"bold"}>21</Text>
          </Flex>
        </Flex>
      </Flex>

      <Image src={img} w={"100%"} h={"100%"} />
      {/* MODAL IS HERE */}
      <Modal
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "3xl", md: "4xl" }}
        mx={"auto"}
      >
        <ModalOverlay backgroundColor={"whiteAlpha.100"}>
          <Box
            position={"absolute"}
            right={5}
            top={5}
            cursor={"pointer"}
            _hover={{ backgroundColor: "white" }}
            zIndex={"auto"}
          >
            <ModalCloseButton />
          </Box>
        </ModalOverlay>
        {/* Headers */}
        <ModalContent backgroundColor={"black"}>
          {/* Body */}
          <ModalBody mx={"auto"}>
            <Flex
              gap={4}
              width={{ base: "90%", sm: "70%", md: "full" }}
              height={{ base: "90%", sm: "70%", md: "full" }}
              justifyContent={"center"}
            >
              <Box flex={1.5}>
                <Image src={img} />
              </Box>
              <Flex
                flex={1}
                direction={"column"}
                display={{ base: "none", md: "flex" }}
              >
                {/* Profile Name */}
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex gap={2}>
                    <Avatar src={avatar} size={"xs"} alt={username} />
                    <Text>{username}</Text>
                  </Flex>
                  <Flex borderRadius={4} gap={6} fontSize={24}>
                    <Flex
                      onClick={() => {
                        console.log("clicked Delete in Modal");
                      }}
                      cursor={"pointer"}
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <MdDelete color="red" />
                    </Flex>

                    <Flex
                      onClick={() => {
                        console.log("clicked More in Modal");
                      }}
                      cursor={"pointer"}
                      _hover={{ bg: "whiteAlpha.200" }}
                    >
                      <RiMore2Fill />
                    </Flex>
                  </Flex>
                </Flex>
              <Divider orientation='horizontal' my={4} borderColor={"whiteAlpha.300"} />
                {/* Comments */}
                <VStack alignItems={"start"} spacing={{ base: 2, md: 4 }} maxH={"45vh"} overflowY={"auto"} my={2}>
                  <Text fontSize={18} fontWeight={"bold"} fontFamily={"cursive"}>Comments .</Text>
                  <Comments
                  username="lorem.10"
                  text="Something"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737018.jpeg"/>
                  <Comments
                  username="lorem.10"
                  text="Something kughsvk ijg vugniowgoiug s mj09rrugjsajgo jpsg s9jgu sp gij- sidf0 visjjag skj gposfi"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737015.jpeg"/>
                  <Comments
                  username="lorem.10"
                  text="Something"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737018.jpeg"/>
                  <Comments
                  username="lorem.10"
                  text="Something kughsvk ijg vugniowgoiug s mj09rrugjsajgo jpsg s9jgu sp gij- sidf0 visjjag skj gposfi"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737015.jpeg"/>
                  <Comments
                  username="lorem.10"
                  text="Something kughsvk ijg skj gposfi"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737015.jpeg"/>
                  <Comments
                  username="lorem.10"
                  text="Something"
                  commentedAt="1D Ago"
                  profilePic="https://images.pexels.com/photos/3737018/pexels-photo-3737038.jpeg"/>
                  

                </VStack>
              <Divider orientation='horizontal' my={4} borderColor={"whiteAlpha.300"} />
              <ProfilePostFooter/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal Ended Here */}
    </GridItem>
  );
}

export default ProfilePost;
