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

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState();

  const submitHandler = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const payload = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      password: password,
      country: country,
      terms_of_service: false,
    };
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log(payload);
    try {
      const res = await axios
        .post(
          `${process.env.NEXT_PUBLIC_ENDPOINT}api/v1/auth/register`,
          payload,
          options
        )
        .then((response) => {
          setTimeout(() => {
            // localStorage.setItem("authUser", JSON.stringify(response.data));
            Router.replace("/auth/login");
          }, 1000);
          toast.success(response.data.message, { autoClose: 5000 });
        })
        .catch((err) =>
          toast.error(err.response.data.detail, { autoClose: 5000 })
        );
    } catch (err) {
      console.log(err);
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
        >
          <Flex
            columnGap="1em"
            alignSelf={["center", "flex-end"]}
            alignItems="center"
          >
            <Text>Already have an account?</Text>
            <Link
              href={{
                pathname: "/auth/login",
              }}
            >
              <Button
                border="1px solid #3AAFA9"
                px="1em"
                py=".8em"
                fontWeight="500"
                borderRadius="1.2em"
              >
                Sign In
              </Button>
            </Link>
          </Flex>

          <form onSubmit={submitHandler}>
            <FormControl my="1.5em" isRequired={true}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e: React.ChangeEvent<any>) =>
                  setFullName(e.target.value)
                }
              />
            </FormControl>

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
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                placeholder="234 8000 123 456"
                value={phone}
                onChange={(e: React.ChangeEvent<any>) =>
                  setPhone(e.target.value)
                }
              />
            </FormControl>
            <FormControl my="1.5em" isRequired={true}>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                placeholder="Nigeria"
                value={country}
                onChange={(e: React.ChangeEvent<any>) =>
                  setCountry(e.target.value)
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
              {password !== "" && password.length < 8 && (
                <FormHelperText color="red.300">
                  Password should be over 8 characters
                </FormHelperText>
              )}
            </FormControl>

            <FormControl my="1.5em" isRequired={true}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
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
              SIGN UP
            </Button>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignUp;
