import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Flex,
  Badge,
} from "@chakra-ui/layout";
import { Input, InputGroup, InputRightAddon, Image } from "@chakra-ui/react";
import Head from "next/head";
import { BsLink45Deg, BsSearch, BsShareFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Link from "next/link";

const Blog = () => {
  return (
    <Container mx="auto" maxW="container.xl">
      <Box>
        <InputGroup size="lg" mx="auto">
          <Input
            type="text"
            _focus={{ ring: 0, borderColor: "#3AAFA9" }}
            placeholder="Search by location"
          />
          <InputRightAddon color="#fff" bgColor="#3AAFA9">
            <BsSearch />
          </InputRightAddon>
        </InputGroup>
      </Box>

      <Flex
        flexWrap="wrap"
        columnGap={{ base: "1em", xl: "2em" }}
        justifyContent={{ xl: "space-between" }}
        rowGap={{ base: "2em", xl: "3em" }}
        py="2em"
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => {
          return (
            <Box
              key={i}
              width={{ base: "100%", md: "45%", lg: "30%", xl: "28%" }}
            >
              <Image
                src="/assets/featuredImage_test.svg"
                width={{ base: "300px", xl: "300px" }}
                height="200px"
                borderTopEndRadius={["2em", "4em", "6em"]}
                boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
                align="start"
              />

              <Badge colorScheme="teal" my=".8em">
                Constituency Projects
              </Badge>

              <Link href="/#">
                <Heading
                  as="h3"
                  fontSize="lg"
                  my=".8em"
                  cursor="pointer"
                  _hover={{ color: "#3AAFA9" }}
                >
                  In Kwara community, residents turn multi-million Naira
                  drainage to dumpsite
                </Heading>
              </Link>

              <Text fontSize="14px" color="gray.700">
                Adorned in a flowery dress and accessor ised with a neck piece
                and hair tucked into a turban, Mrs Caroline Erochukwu, 73, loo
                ked as though she was relishing old age; unknown to many, she is
                homeless, roaming the street for accommodation of any sort...
              </Text>

              <Box>
                <Text color="gray.500">By: Bimpe Oyewole</Text>
                <Text color="gray.500"> Last updated on Aug 15th, 2022 </Text>
              </Box>
            </Box>
          );
        })}
      </Flex>

      <Flex alignItems="center" columnGap="1.5em" justifyContent="center">
        <Link href="/#">
          <Badge my=".8em" cursor="pointer" p=".5em">
            Constituency Projects
          </Badge>
        </Link>
        <Link href="/#">
          <Badge my=".8em" cursor="pointer" p=".5em">
            Capital Projects
          </Badge>
        </Link>
      </Flex>

      <Flex alignItems="center" columnGap="1.5em" justifyContent="center">
        <Link href="/#">
          <Badge my=".8em" cursor="pointer" p=".5em">
            Ecological Projects
          </Badge>
        </Link>
        <Link href="/#">
          <Badge my=".8em" cursor="pointer" p=".5em">
            Data
          </Badge>
        </Link>
      </Flex>
    </Container>
  );
};

export default Blog;
