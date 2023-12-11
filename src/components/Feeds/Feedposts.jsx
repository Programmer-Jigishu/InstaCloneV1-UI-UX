import React from "react";
import Feedpost from "./Feedpost";
import { useState, useEffect } from "react";
import { VStack, Stack, Flex } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function Feedposts() {
  // Variables
  const [skeleton, setSkeleton] = useState(true);

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 2000);
  }, []);

  // React Component Return
  return skeleton ? (
    <VStack spacing={4} align="stretch">
      {[1, 2, 3, 4, 5].map((_, idx) => (
        <Stack py={2} key={idx}>
          <Flex gap={2} alignItems={"stretch"}>
            <SkeletonCircle size="10" my={1} />

            <VStack direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
              <Skeleton height="5px" width={"200px"} />
              <Skeleton height="5px" width={"120px"} />
            </VStack>
          </Flex>

          <Skeleton height="300px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </Stack>
      ))}
    </VStack>
  ) : (
    <div>
      <Feedpost img="/img1.png" username="LipstickGirl" avatar="/img1.png" />
      <Feedpost img="/img2.png" username="Matthew_Hayden" avatar="/img2.png" />
      <Feedpost img="/img3.png" username="LoveYouMore" avatar="/img3.png" />
      <Feedpost img="/img4.png" username="RonaldoMessi" avatar="/img4.png" />
    </div>
  );
}

export default Feedposts;
