import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const data = {
      username: email,
      password: password,
    };
    console.log(data);
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
      },
    };
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_ENDPOINT}api/v1/admin/auth/login`,
          data,
          options
        )
        .then((response) => {
          setTimeout(() => {
            toast.success(response.data.message, { autoClose: 5000 });
            localStorage.setItem("authAdmin", JSON.stringify(response.data));
            Router.replace({
              pathname: "/[authcode]/dashboard",
              query: {
                authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
              },
            });
          }, 1500);
        })
        .catch((err) =>
          toast.error(err.response.data.detail, { autoClose: 5000 })
        );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box height="100vh">
      <Stack direction={["column", "row"]} minHeight="100vh">
        <Box
          display={["none", "flex"]}
          alignItems="center"
          justifyContent="center"
          width={["100%", "45%", "48%"]}
          bgColor="#3AAFA9"
          height="100vh"
          overflowY="hidden"
          position="fixed"
          minHeight="100vh"
          overflow="hidden"
        >
          <Image
            src="/assets/auth_banner.svg"
            alt="banner"
            width="80%"
            mx="auto"
          />
        </Box>
        <Box
          flexDir="column"
          display="flex"
          width={["100%", "53%", "49%"]}
          py="2em"
          position={["static", "absolute"]}
          right="0"
          pr="2em"
          pl="1em"
          minH="99vh"
          justifyContent="center"
        >
          <Flex
            columnGap="1em"
            alignSelf={["center", "flex-end"]}
            alignItems="center"
          >
            <Text>New here?</Text>
            <Link
              href={{
                pathname: "/[authcode]/auth/signup",
                query: {
                  authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                },
              }}
            >
              <Button
                border="1px solid #3AAFA9"
                px="1em"
                py=".8em"
                fontWeight="500"
                borderRadius="1.2em"
              >
                Sign Up
              </Button>
            </Link>
          </Flex>

          <Box pt="5em">
            <form onSubmit={submitHandler}>
              <FormControl my="1.5em" isRequired={true}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<any>) =>
                    setEmail(e.target.value)
                  }
                />
              </FormControl>

              <FormControl my="1.5em" isRequired={true}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e: React.ChangeEvent<any>) =>
                    setPassword(e.target.value)
                  }
                />
              </FormControl>

              <Button
                type="submit"
                bgColor="#3AAFA9"
                color="#fff"
                px="1.5em"
                py=".8em"
                fontWeight="500"
                borderRadius="1.2em"
                boxShadow="xl"
              >
                LOGIN
              </Button>
            </form>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
