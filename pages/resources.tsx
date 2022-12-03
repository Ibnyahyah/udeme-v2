import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Image,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
  Button,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsDownload, BsSearch } from "react-icons/bs";

const Resources = () => {
  const images = [
    "/assets/resources/hero/img.svg",
    // "/assets/resources/hero/img1.svg",
    "/assets/resources/hero/img2.svg",
    "/assets/resources/hero/img3.svg",
  ];
  return (
    <Container maxW="container.xl" mx="auto">
      <Stack spacing={8}>
        <Box>
          <Flex justifyContent="space-between" flexWrap="wrap">
            {images?.map((image) => (
              <Image
                key={image}
                src={image}
                style={{ aspectRatio: "2/2" }}
                objectFit="contain"
              />
            ))}
          </Flex>
        </Box>
        <Box>
          <InputGroup mx="auto" width={{ base: "95%", md: "90%", lg: "70%" }}>
            <Input
              type="text"
              _focus={{ ring: 0, borderColor: "#3AAFA9" }}
              placeholder="Search"
              borderRadius=".5em"
            />
            <InputRightAddon color="#fff" bgColor="#092A1E" borderRadius=".5em">
              <BsSearch />
            </InputRightAddon>
          </InputGroup>
        </Box>

        <Box>
          <TableContainer width={{ lg: "85%" }} mx="auto">
            <Table variant="simple">
              <Thead bgColor="#52B9B3" color="gray.800">
                <Tr>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Download</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Zonal Intervention Project (2015)</Td>
                  <Td>Constituency Projects</Td>
                  <Td>
                    <Button>
                      <BsDownload />
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Zonal Intervention Project (2015)</Td>
                  <Td>Constituency Projects</Td>
                  <Td>
                    <Button>
                      <BsDownload />
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Zonal Intervention Project (2015)</Td>
                  <Td>Constituency Projects</Td>
                  <Td>
                    <Button>
                      <BsDownload />
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td>Zonal Intervention Project (2015)</Td>
                  <Td>Constituency Projects</Td>
                  <Td>
                    <Button>
                      <BsDownload />
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          <Flex alignItems="center" columnGap="1.5em" justifyContent="center">
            <Link href="#">
              <Badge
                my=".8em"
                cursor="pointer"
                p=".5em"
                _hover={{ bgColor: "#59cbc6", color: "#266663" }}
              >
                Constituency Projects
              </Badge>
            </Link>
            <Link href="#">
              <Badge
                my=".8em"
                cursor="pointer"
                p=".5em"
                _hover={{ bgColor: "#59cbc6", color: "#266663" }}
              >
                Capital Projects
              </Badge>
            </Link>
          </Flex>

          <Flex alignItems="center" columnGap="1.5em" justifyContent="center">
            <Link href="#">
              <Badge
                my=".8em"
                cursor="pointer"
                p=".5em"
                _hover={{ bgColor: "#59cbc6", color: "#266663" }}
              >
                Ecological Projects
              </Badge>
            </Link>
            <Link href="#">
              <Badge
                my=".8em"
                cursor="pointer"
                p=".5em"
                _hover={{ bgColor: "#59cbc6", color: "#266663" }}
              >
                Data
              </Badge>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
};

export default Resources;
