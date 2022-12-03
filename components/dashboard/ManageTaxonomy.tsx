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

const ManageTaxonomy = () => {
  const postData = [
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title: "Constituency Projects",
      desc: "Lorem ipsum",
    },
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title: "Capital Projects",
      desc: "Lorem ipsum ammet",
    },
    {
      _id: Math.random()
        .toString(36)
        .substring(2, 11 + 2),
      title: "Ecological Projects",
      desc: "lorem ipsum",
    },
  ];
  return (
    <DashboardWapper>
      <Box color="#fff">
        <Heading fontSize="1.3rem" fontWeight="500" m="1rem">
          Manage Categories
        </Heading>

        <TableContainer>
          <Table variant="simple" whiteSpace="normal">
            <Thead>
              <Tr bgColor="#3AAFA9">
                <Th width={{ md: "50%" }} color="#fff">
                  Category
                </Th>

                <Th color="#fff">Edit</Th>
                <Th color="#fff">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {postData.map((data) => {
                return (
                  <Tr key={data._id}>
                    <Td>{data.title}</Td>

                    <Td>
                      <Link
                        href={{
                          pathname:
                            "/[authcode]/dashboard/edit-category/[catId]",
                          query: {
                            authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                            catId: data._id,
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

export default ManageTaxonomy;
