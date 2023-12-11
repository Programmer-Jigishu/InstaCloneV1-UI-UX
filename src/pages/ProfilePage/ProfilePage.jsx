import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/profile/ProfileHeader"
import ProfilePosts from "../../components/profile/ProfilePosts"
import ProfileTabs from "../../components/profile/ProfileTabs"
function ProfilePage() {
  return (
    <Container maxW={"container.lg"}>

    <Flex justifyContent={"center"} direction={"column"} px={10} py = {4} pl={{base:4,md:10}} mx={"auto"}>
        <ProfileHeader username={"abc"} avatar={"https://picsum.photos/200"}/>
    </Flex>

    <Flex justifyContent={"center"} direction={"column"} px={10} py = {4} pl={{base:4,md:10}}>
        <ProfileTabs/>
        <ProfilePosts/>
    </Flex>
    </Container>
  )
}

export default ProfilePage