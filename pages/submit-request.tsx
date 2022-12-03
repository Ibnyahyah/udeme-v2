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
import axios from "axios";
import React from "react";
import { useConvertToBs64 } from "../helper/useConvertToBs64";

const SubmitRequest = () => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    lga: "",
    street: "",
    state: "",
    images_url: [],
  });
  const [thumbnail, setThumbnail]: any = React.useState("");

  const { convertFile } = useConvertToBs64();

  const submitHandler = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!thumbnail) return;
    const picture = convertFile(thumbnail);
    let pictures = [];
    pictures.push(picture);
    console.log(pictures);
    const payload = {
      ...data,
      images_url: pictures,
    };
    const { token } = JSON.parse(localStorage.getItem("user") as any);

    console.log(payload);
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_ENDPOINT}api/v1/citizens-forum/submit-report`,
        payload,
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container maxW="container.xl" px="2rem" marginX="auto">
        <Box
          p={["1rem", "3rem", "5rem"]}
          mx={["1rem", "3rem", "5rem"]}
          boxShadow="2xl"
          mt="4rem"
          mb="6rem"
        >
          <Heading fontSize="1.3rem" color="#3AAFA9" mb="2rem">
            Report New Project
          </Heading>

          <form onSubmit={submitHandler}>
            <Input
              type="text"
              placeholder="TITLE"
              mb="1.5rem"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <Textarea
              placeholder="DESCRIPTION"
              mb="1.5rem"
              height="12rem"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />

            <Input
              type="text"
              placeholder="L.G.A"
              mb="1.5rem"
              onChange={(e) => setData({ ...data, lga: e.target.value })}
            />

            <Input
              type="text"
              placeholder="STREET"
              mb="1.5rem"
              onChange={(e) => setData({ ...data, street: e.target.value })}
            />

            <Input
              type="text"
              placeholder="STATE"
              mb="1.5rem"
              onChange={(e) => setData({ ...data, state: e.target.value })}
            />

            <FormControl mb="1.5rem">
              <FormLabel>Add thumbnail</FormLabel>
              <Input
                type="file"
                onChange={(e: React.ChangeEvent<any>) =>
                  setThumbnail(e.target.files[0])
                }
              />
            </FormControl>

            <Button type="submit" bgColor="#3AAFA9" width="full" color="#fff">
              REPORT PROJECT
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default SubmitRequest;
