import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const ManageReports = () => {
  const mockData = new Array(10).fill(null).map((_, idx) => ({
    _id: Math.random().toString(36).substring(2, 13),
    title: "Demo report",
    status: idx % 2 === 0 ? "Approved" : "Not Approved",
  }));

  return (
    <Container maxW="container.lg" mx="auto">
      <Box mt="3em" mb="2em">
        <InputGroup mx="auto">
          <Input
            type="text"
            _focus={{ ring: 0, borderColor: "#3AAFA9" }}
            placeholder="Search"
            borderRadius="0"
          />
          <InputRightAddon color="#fff" bgColor="#092A1E" borderRadius="0">
            <BsSearch />
          </InputRightAddon>
        </InputGroup>
      </Box>

      <Stack spacing={4}>
        {mockData.map((data) => {
          return (
            <div key={data._id}>
              <Link
                href={{
                  pathname:
                    "/[authcode]/dashboard/manage-reports/edit/" + data._id,
                  query: {
                    authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                  },
                }}
              >
                <Flex
                  cursor="pointer"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius=".3em"
                  p={{ base: ".8em", md: "1em", lg: "1.5em" }}
                >
                  <Box>{data.title}</Box>

                  <Box display="flex" columnGap=".8em" alignItems="center">
                    <Box
                      width=".5em"
                      height=".5em"
                      borderRadius="full"
                      bgColor={
                        data.status.toLowerCase() === "approved"
                          ? "blue.500"
                          : data.status.toLowerCase() === "pending"
                          ? "green.600"
                          : "red.400"
                      }
                    ></Box>
                    {data.status}
                  </Box>
                </Flex>
              </Link>
            </div>
          );
        })}
      </Stack>
    </Container>
  );
};

export default ManageReports;
