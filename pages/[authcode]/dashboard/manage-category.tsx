import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ManageTaxonomy from "../../../components/dashboard/ManageTaxonomy";
import ManageUsers from "../../../components/dashboard/ManageUsers";

const ManageAllCategrories = () => {
  const router = useRouter();
  const { authcode } = router.query;

  return (
    <Box>
      {authcode !== process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="99vh"
          width="full"
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            textAlign="center"
            width={["98%", "80%", "75%"]}
          >
            You don't have what it takes to be here.
          </Text>
        </Box>
      ) : (
        <Container maxW="container.xl" px="2rem" marginX="auto">
          <ManageTaxonomy />
        </Container>
      )}
    </Box>
  );
};

export default ManageAllCategrories;
