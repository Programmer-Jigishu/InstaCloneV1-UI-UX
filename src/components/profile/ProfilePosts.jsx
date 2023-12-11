import { useState, useEffect } from "react";
import { VStack, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";


function ProfilePosts() {
  // Variables
  const [isLoading, setIsLoading] = useState(true);

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Return
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={2}
      columnGap={1}
      my={4}
      py={4}
      justifyContent={"center"}
    >
      {isLoading ? (
        [1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} w={"full"} alignItems={"flex-start"}>
            <Skeleton height="250px" w={"full"} />
          </VStack>
        ))
      ) : (
        <>
          <ProfilePost
            img="/img1.png"
            username="LipstickGirl"
            avatar="/img1.png"
          />
          <ProfilePost img="/img2.png" username="Somwhat" avatar="/img2.png" />
          <ProfilePost img="/img3.png" username="CoolGuy" avatar="/img3.png" />
          <ProfilePost
            img="/img4.png"
            username="NatureFreak"
            avatar="/img4.png"
          />
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
