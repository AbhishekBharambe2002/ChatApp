import { FormControl, FormLabel, InputGroup, VStack, InputRightElement } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button";
import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPics] = useState('');
    const [picLoading, setPicLoading] = useState(false);
    const toast = useToast();
    const navigate= useNavigate();
    
    const handleClick= () => setShow(!show);
    const postDetails = (pic) => {
      setPicLoading(true);
      if (pic === undefined) {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      console.log(pic);
      if (pic.type === "image/jpeg" || pic.type === "image/png") {
        const data = new FormData();
        data.append("file", pic);
        data.append("upload_preset", "ChatApp");
        data.append("cloud_name", "dur5xc8mw");
        fetch("https://api.cloudinary.com/v1_1/dur5xc8mw/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPics(data.url.toString());
            console.log(data.url.toString());
            setPicLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setPicLoading(false);
          });
      } else {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
    };
    const submitHandler = async () => {
      setPicLoading(true);
      if (!name || !email || !password || !confirmpassword) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
      if (password !== confirmpassword) {
        toast({
          title: "Passwords Do Not Match",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      console.log(name, email, password, pic);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user",
          {
            name,
            email,
            password,
            pic,
          },
          config
        );
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setPicLoading(false);
        navigate("/chats");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
      }
    };
  
  return (
    <VStack spacing="5px">
 <FormControl id='first-name' isRequired>
    <FormLabel> Name </FormLabel>
        <Input
        placeholder='Enter your name'
        onChange={(e)=>{setName(e.target.value)}}   
        />
 </FormControl>
 <FormControl id='email' isRequired>
    <FormLabel>email </FormLabel>
        <Input
        placeholder='Enter your name'
        onChange={(e)=>{setEmail(e.target.value)}}   
        />
 </FormControl>
 <FormControl id='password' isRequired>
    <FormLabel> password </FormLabel>
    <InputGroup>
    <Input
        type={show?"text":'password'}
        placeholder='Enter your name'
        onChange={(e)=>{setPassword(e.target.value)}}   
        />
         <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
    </InputGroup>
 </FormControl>
 <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
 <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup
