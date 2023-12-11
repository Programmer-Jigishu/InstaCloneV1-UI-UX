import {  Box,  Button,  Flex,  Image,  Input,  Text,  VStack,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [inputs , setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleAuth = () => {
    if(isLogin){
      if(!inputs.password||!inputs.password){
        alert("Please fill all the fields");
        return;
      }else{
        navigate("/");
      }
      console.log("Login");
    }else{
      if(!inputs.confirmPassword||!inputs.password||!inputs.confirmPassword){
        alert("Please fill all the fields");
        return;
      }
      if(inputs.password !== inputs.confirmPassword){
        alert("Passwords do not match");
        return;
      }
      navigate("/");
      console.log("Sign Up Completed");
    }
  }
  return (
    <Box padding={2}>
    <Box border={"1px solid gray"}>
      <VStack alignItems={"center"} px={4} gap={4}>
        <Image src="./logo.png" alt="Logo" />
        <Input value= {inputs.email} placeholder="Email" fontSize={14} type="email" onChange={(evt)=>setInputs({...inputs,email:evt.target.value})}/>
        <Input value= {inputs.password} placeholder="Password" fontSize={14} type="password" onChange={(evt)=>setInputs({...inputs,password:evt.target.value})}/>

        {!isLogin ? (
          <Input value={inputs.confirmPassword} onChange={(evt)=>setInputs({...inputs,confirmPassword:evt.target.value})} placeholder="Confirm Password" fontSize={14} type="password" />
          ) : null}
        <Button onClick={handleAuth} w={"full"}>{isLogin ? "Login" : "Sign Up"}</Button>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          my={2}
          py = {2}
          w={"full"}
          >
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text>OR</Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>


        <Flex justifyContent={"center"} alignItems={"center"} gap={3} cursor={"pointer"} mb ={4} py = {2}>
          <Image w={7} padding={1} src="./google.png" />
          <Text color={"blue.500"}>Login with Google</Text>
        </Flex>

      </VStack>
    </Box>
      <Box border={"1px solid gray"} w={"full"} my={4} py={4}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={1}>
          <Text>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLogin(!isLogin)}
            fontSize={14}
            colorScheme={"blue"}
            alignItems={"center"}
            >
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        </Flex>
        </Box>
            </Box>
  );
}

export default AuthForm;
