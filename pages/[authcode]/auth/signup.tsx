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
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { useConvertToBs64 } from "../../../helper/useConvertToBs64";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar]: any = useState();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { convertFile } = useConvertToBs64();

  const submitHandler = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (password.length <= 7 || password !== confPassword) return;

    if (!avatar) return;
    const profilePicture = convertFile(avatar);

    let payload = {
      email,
      first_name: firstname,
      last_name: lastname,
      phone_number: phone,
      password: phone,
      profile_image: profilePicture,
    };

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
      },
    };

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_ENDPOINT}api/v1/admin/auth/register`,
        payload,
        options
      )
      .then((response) => {
        setTimeout(() => {
          toast.success(response.data.message, { autoClose: 5000 });
          localStorage.setItem("authUser", JSON.stringify(response.data));
          Router.replace({
            // pathname: "/[authcode]/auth/login",
            pathname: "/[authcode]/dashboard",
            query: {
              authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
            },
          });
          console.log(response.data.message);
        }, 1500);
      })
      .catch((err) =>
        toast.error(err.response.data.detail, { autoClose: 5000 })
      );
  };
  return (
    <Box height="100vh">
      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <Box
          flexDir="column"
          display="flex"
          width={{ base: "100%", md: "70%", lg: "49%" }}
          py="2em"
        >
          <Heading
            as="h3"
            fontSize={{ base: "1.2em", md: "1.5em", lg: "2em" }}
            color="#3AAFA9"
            mb=".5em"
          >
            Sign Up
          </Heading>

          <form onSubmit={submitHandler}>
            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e: React.ChangeEvent<any>) =>
                  setFirstname(e.target.value)
                }
              />
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e: React.ChangeEvent<any>) =>
                  setLastname(e.target.value)
                }
              />
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<any>) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e: React.ChangeEvent<any>) =>
                  setPhone(e.target.value.toString())
                }
              />
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<any>) =>
                  setPassword(e.target.value)
                }
              />
              {password !== "" && password.length < 8 && (
                <FormHelperText color="red.300">
                  Password should be over 8 characters
                </FormHelperText>
              )}
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e: React.ChangeEvent<any>) =>
                  setConfPassword(e.target.value)
                }
              />

              {password !== "" &&
                confPassword !== "" &&
                confPassword !== password && (
                  <FormHelperText color="red.300">
                    Passwords should match
                  </FormHelperText>
                )}
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <FormLabel>User Avatar</FormLabel>
              <Input
                type="file"
                onChange={(e: React.ChangeEvent<any>) =>
                  setAvatar(e.target.files[0])
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
              borderRadius=".4em"
              boxShadow="xl"
            >
              SIGN UP
            </Button>
          </form>

          <Flex alignItems="center">
            <Text>Already have an account?</Text>
            <Link
              href={{
                pathname: "/[authcode]/auth/login",
                query: {
                  authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                },
              }}
            >
              <Text color="teal.400" cursor="pointer">
                Sign In
              </Text>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignUp;
