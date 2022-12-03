import {
  Box,
  Heading,
  Container,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormControl,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const EditPost = () => {
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
              Edit Post
            </Heading>

            <form>
              <Input type="text" placeholder="TITLE" mb="1.5rem" />

              <Select mb="1.5rem">
                <option value="ecological-projects">Ecological Projects</option>
                <option value="constituency-projects">
                  Constituency Projects
                </option>
              </Select>

              <Textarea placeholder="BODY" mb="1.5rem" height="12rem" />

              <Checkbox>Featured</Checkbox>

              <FormControl mb="1.5rem">
                <FormLabel>Add thumbnail</FormLabel>
                <Input type="file" />
              </FormControl>

              <Button type="submit" bgColor="#3AAFA9" width="full" color="#fff">
                Update Post
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </>
  );
};

export default EditPost;
