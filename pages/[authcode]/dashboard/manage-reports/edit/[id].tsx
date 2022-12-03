import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

const Edit = () => {
  const [title, setTitle] = useState(
    "Lorem ipsum dolor sit amet, consectetuer"
  );
  const [description, setDescription] =
    useState(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligu
la eget dolor. Aenean massa. Cum sociis nato que penatibus et magnis dispartur
ient montes, nascetur ridi culus mus. Donec quam felis, ultricies nec, pellentesq
ue eu, pretium quis, sem. Nulla consequat massa quis enim. Donecped e justo,
fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinci
dunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
lorem ante, dapibus in, viverra quis, feugiata, tellus. Phasellus viverra nulla ut 
metus varius laoreet. Quisq`);
  const [lga, setLga] = useState("Lorem ipsum dolor sit amet, consectetuer");
  const [localState, setLocatState] = useState(
    "Lorem ipsum dolor sit amet, consectetuer"
  );
  const [street, setStreet] = useState(
    "Lorem ipsum dolor sit amet, consectetuer"
  );
  const [images, setImages] = useState([
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ]);

  return (
    <Container maxW="container.xl" px="2rem" marginX="auto">
      <Box
        p={["1rem", "3rem", "5rem"]}
        mx={["1rem", "3rem", "5rem"]}
        boxShadow="2xl"
        mt="4rem"
        mb="6rem"
      >
        <Text>BY: okikiola@gmail.com</Text>
        <form>
          <Box my="1em">
            <FormControl>
              <FormLabel>TITLE</FormLabel>

              <Input
                type="text"
                placeholder="TITLE"
                mb="1.5rem"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>DESCRIPTION</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl mt="1.5em">
              <FormLabel>L.G.A</FormLabel>
              <Input
                type="text"
                placeholder="L.G.A"
                mb="1.5rem"
                value={lga}
                onChange={(e) => setLga(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>STATE</FormLabel>
              <Input
                // mt="1.5em"
                type="text"
                placeholder="State"
                mb="1.5rem"
                value={localState}
                onChange={(e) => setLocatState(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>STREET</FormLabel>
              <Input
                // mt="1.5em"
                type="text"
                placeholder="Street"
                mb="1.5rem"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </FormControl>

            <Flex rowGap="1em" columnGap="1em" flexWrap="wrap">
              {images.map((image, i) => {
                return (
                  <Box key={i}>
                    <Image src={image} width="200px" height="200px" alt="" />
                  </Box>
                );
              })}
            </Flex>

            <Flex rowGap="1em" columnGap="1em" flexWrap="wrap" mt="1em">
              <Button
                fontWeight="medium"
                bgColor="blue"
                colorScheme="blue"
                width={["100%", "48%"]}
              >
                Approve
              </Button>

              <Button
                fontWeight="medium"
                bgColor="red"
                colorScheme="red"
                width={["100%", "48%"]}
              >
                Reject
              </Button>
            </Flex>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Edit;
