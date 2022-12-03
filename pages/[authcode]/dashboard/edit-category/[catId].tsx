import {
  Box,
  Heading,
  Container,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const EditCategory = () => {
  const router = useRouter();
  const { authcode } = router.query;

  return (
    <>
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
          <Box
            p={["1rem", "3rem", "5rem"]}
            mx={["1rem", "3rem", "5rem"]}
            boxShadow="2xl"
            mt="4rem"
            mb="6rem"
          >
            <Heading fontSize="1.3rem" color="#3AAFA9" mb="2rem">
              Edit Category
            </Heading>

            <form>
              <Input type="text" placeholder="TITLE" mb="1.5rem" />

              <Textarea placeholder="DESCRIPTION" mb="1.5rem" height="12rem" />

              <Button type="submit" bgColor="#3AAFA9" width="full" color="#fff">
                Update Category
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </>
  );
};

export default EditCategory;
