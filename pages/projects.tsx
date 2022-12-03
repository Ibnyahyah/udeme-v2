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
import axios from "axios";
import { useEffect } from "react";

const Projects = () => {
  const getProjects = async ()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}api/v1/admin/auth/register/`, {headers:{
      'Content-Type': 'application/json',
    },});
    console.log(JSON.stringify(res));
  }

  useEffect(() => {
    getProjects();
  }, [])
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

      <Stack
        direction={["column", "row"]}
        py="1.5em"
        columnGap="1.2em"
        rowGap="1.2em"
        alignItems="center"
      >
        <Box width={["100%", "49%"]}>
          <Image
            src="/assets/featuredImage_test.svg"
            width="100%"
            height="380px"
            borderTopEndRadius={["2em", "6em", "8em"]}
          />
        </Box>
        <Box width={["100%", "49%"]}>
          <Badge colorScheme="teal">Tracked Project</Badge>
          <Heading as="h3" fontSize="3xl" mt=".5em">
            SPECIAL REPORT: Inside Ekiti community where multi-million Naira
            health facilities waste in the bush
          </Heading>

          <Text my=".8em">
            The bush, as many people would conceive, accommodates anything –
            including its enemies. From its roots, it never fails to rise to its
            duties. However, in a nearby country side, the bush is fond of
            protecting public funds. Located in the South West state of Ekiti
            are two health facilities built with millions of public funds but
            never put to use by residents. These health facilities are
            located...
          </Text>

          <Flex alignItems="center" columnGap=".8em">
            <Text color="gray.500">By: Bimpe Oyewole</Text>
            <Text color="gray.500"> Last updated on Aug 15th, 2022 </Text>
          </Flex>

          <Flex alignItems="center" columnGap="1em" color="gray" mt="1em">
            <Box display="flex" columnGap=".3em" alignItems="center">
              <AiOutlineHeart />
              <Text>Like</Text>
            </Box>

            <Box display="flex" columnGap=".3em" alignItems="center">
              <Text>223</Text>
              <FaRegComment />
            </Box>
            <Box>
              <BsShareFill />
            </Box>
            <Box>
              <BsLink45Deg />
            </Box>
          </Flex>
        </Box>
      </Stack>

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
                Tracked Project
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
    </Container>
  );
};

export default Projects;
