import React from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { InputGroup, InputRightElement } from "@chakra-ui/react";


function ProfilePostFooter() {


  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");


  return (
    <Flex direction={"column"} pt={10}>
      <Flex justifyContent={"space-between"} py={3}>
        <Flex gap={5}>
          <Box
            onClick={() => {
              !isLiked ? setLikes(likes + 1) : setLikes(likes - 1);
              setIsLiked(!isLiked);
            }}
          >
            {!isLiked ? <FaRegHeart /> : <FaHeart />}
          </Box>

          <FiSend />
        </Flex>
        <Box
          onClick={() => {
            setIsSaved(!isSaved);
          }}
        >
          {!isSaved ? <FaRegBookmark /> : <FaBookmark />}
        </Box>
      </Flex>
      <Box>{`${likes} Likes`}</Box>

      <InputGroup size="md">
        <Input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          pr="4.5rem"
          placeholder="Comment on this post"
          fontSize={14}
        />
        <InputRightElement width="4.5rem">
          <Button
            fontSize={14}
            h="1.75rem"
            size="sm"
            onClick={() => {
              console.log(comment);
              setComment("");
            }}
          >
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default ProfilePostFooter;
