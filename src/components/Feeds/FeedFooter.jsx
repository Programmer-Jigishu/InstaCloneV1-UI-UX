import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { InputGroup,InputRightElement } from "@chakra-ui/react";

function FeedFooter({username}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [displayFullComment, setDisplayFullComment] = useState(false);

  return (
    <Flex direction={"column"}>
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
          <FaComment />
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
      <Flex>
      <Text>{`${username}: ${displayFullComment?"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, modi.":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, modi.".slice(0, 35)}`} </Text> <Box onClick={()=>setDisplayFullComment(!displayFullComment)}>...</Box>
      </Flex>
      <Box>View N comments</Box>


      <InputGroup size="md">
        <Input
          value={comment}
          onChange={(event)=>setComment(event.target.value)}
          pr="4.5rem"
          placeholder="Comment on this post"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={()=>{console.log(comment);setComment("")}}>
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default FeedFooter;
