import { Heading, Stack, Box, Link, Container, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box mt="3rem" borderTop="1px" borderTopColor="gray.500">
      <footer>
        <Container maxW="container.xl" px="2rem" marginX="auto" py="3rem">
          <Stack direction={["column", "row"]}>
            <Box width={["100%", "24%"]}>
              <Heading as="h5" fontSize="1em" mb="1em">
                About
              </Heading>

              <Box color="gray.600">
                <Link href="/#" display="block" mb=".3em">
                  Who we are
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  Our mission
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  Our vision
                </Link>
                <Link href="/#" display="block">
                  Core values
                </Link>
              </Box>
            </Box>

            <Box width={["100%", "24%"]}>
              <Heading as="h5" fontSize="1em" mb="1em">
                Services
              </Heading>

              <Box color="gray.600">
                <Link href="/#" display="block" mb=".3em">
                  Blog
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  Tracked Projects
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  Citizens Forum
                </Link>
                <Link href="/#" display="block">
                  Escalation Form
                </Link>
              </Box>
            </Box>

            <Box width={["100%", "24%"]}>
              <Heading as="h5" fontSize="1em" mb="1em">
                Tracked Projects
              </Heading>

              <Box color="gray.600">
                <Link href="/#" display="block" mb=".3em">
                  Area
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  Street
                </Link>
                <Link href="/#" display="block" mb=".3em">
                  L.G.A
                </Link>
                <Link href="/#" display="block">
                  State
                </Link>
              </Box>
            </Box>

            <Box width={["100%", "24%"]}>
              <Heading as="h5" fontSize="1em" mb="1em">
                Follow Us
              </Heading>

              <Box
                color="gray.600"
                display="flex"
                flexWrap="wrap"
                columnGap=".8rem"
                rowGap=".8rem"
                alignItems="center"
              >
                <Box bgColor="#092A1E" p={[".5rem", ".8rem"]}>
                  <Link href="/#" mb=".3em" color="#fff">
                    <BsTwitter />
                  </Link>
                </Box>

                <Box bgColor="#092A1E" p={[".5rem", ".8rem"]}>
                  <Link href="/#" mb=".3em" color="#fff">
                    <BsInstagram />
                  </Link>
                </Box>

                <Box bgColor="#092A1E" p={[".5rem", ".8rem"]}>
                  <Link href="/#" mb=".3em" color="#fff">
                    <FaLinkedinIn />
                  </Link>
                </Box>

                <Box bgColor="#092A1E" p={[".5rem", ".8rem"]}>
                  <Link href="/#" mb=".3em" color="#fff">
                    <FaTiktok />
                  </Link>
                </Box>

                <Box bgColor="#092A1E" p={[".5rem", ".8rem"]}>
                  <Link href="/#" mb=".3em" color="#fff">
                    <FaFacebookF />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Stack>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="1em"
          >
            <Image
              src="/assets/logo.svg"
              alt="udeme's logo"
              width="4rem"
              height="4rem"
            />
            <Text mt=".8em">
              &copy; {`${new Date().getFullYear()} All Rights Reserved`}
            </Text>
          </Box>
        </Container>
      </footer>
    </Box>
  );
};
