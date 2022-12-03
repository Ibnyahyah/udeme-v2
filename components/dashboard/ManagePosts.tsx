import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tr,
  Th,
  Tbody,
  Td,
  Thead,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { DashboardWapper } from "./Wrapper";

export const ManagePosts = () => {
  const postData = [
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title:
        "SPECIAL REPORT: Inside Ekiti community where multi-million Naira health facilities waste in the bush",
      categories: ["Constituency Projects"],
    },
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title:
        "SPECIAL REPORT: Inside Ekiti community where multi-million Naira health facilities waste in the bush",
      categories: ["Ecological Projects"],
    },
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title:
        "SPECIAL REPORT: Inside Ekiti community where multi-million Naira health facilities waste in the bush",
      categories: ["Ecological Projects"],
    },
  ];
  return (
    <DashboardWapper>
      <Box color="#fff">
        <Heading fontSize="1.3rem" fontWeight="500" m="1rem">
          Manage Post
        </Heading>

        <TableContainer>
          <Table variant="simple" whiteSpace="normal">
            <Thead>
              <Tr bgColor="#3AAFA9">
                <Th width={{ md: "50%" }} color="#fff">
                  Title
                </Th>
                <Th color="#fff">Category</Th>
                <Th color="#fff">Edit</Th>
                <Th color="#fff">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {postData.map((data) => {
                return (
                  <Tr key={data._id}>
                    <Td>{data.title.slice(0, 40) + "..."}</Td>
                    <Td>{data.categories.map((category) => category)}</Td>
                    <Td>
                      <Link
                        href={{
                          pathname: "/[authcode]/dashboard/edit-post/[postId]",
                          query: {
                            authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                            postId: data._id,
                          },
                        }}
                      >
                        <Button
                          colorScheme="blue"
                          bgColor="#2741CA"
                          fontWeight="500"
                          fontSize="14px"
                        >
                          Edit
                        </Button>
                      </Link>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        fontWeight="500"
                        fontSize="14px"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardWapper>
  );
};
