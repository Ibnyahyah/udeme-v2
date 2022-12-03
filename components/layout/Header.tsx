import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const mobileNavHandler = () => setShowNav(!showNav);
  const router = useRouter();

  return (
    <header>
      <Box bgColor="#3AAFA9" py="1rem" mb="2rem">
        <Container maxW="container.xl" px="2rem" marginX="auto">
          <Flex
            justifyContent="space-between"
            alignItems={["flex-start", "center"]}
          >
            <Box flexGrow={2}>
              <Image
                src="/assets/logo.svg"
                alt="udeme's logo"
                width="2.5rem"
                height="2.5rem"
              />
            </Box>

            <Stack
              direction={["column", "row"]}
              flexGrow={1}
              alignItems="center"
              display={[showNav ? "block" : "none", "block"]}
            >
              <Stack
                direction={["column", "row"]}
                justifyContent="space-between"
                width="full"
              >
                <Box color={router.pathname === "/" ? "gray.800" : "#fff"}>
                  <Link href="/">Home</Link>
                </Box>
                <Box
                  color={router.pathname === "/projects" ? "gray.800" : "#fff"}
                >
                  <Link href="/projects">Projects</Link>
                </Box>

                <Box color={router.pathname === "/forum" ? "gray.800" : "#fff"}>
                  <Link href="#">Citizens Forum</Link>
                </Box>

                <Box color={router.pathname === "/blog" ? "gray.800" : "#fff"}>
                  <Link href="/blog">Blog</Link>
                </Box>
                <Box
                  color={
                    router.pathname === "/submit-request" ? "gray.800" : "#fff"
                  }
                >
                  <Link href="/submit-request">Submit Request</Link>
                </Box>
              </Stack>
              {/* // TODO: If user.loggedIn && profile picture
              <Box
                width="2.5rem"
                height="2.5rem"
                bgColor="gray.300"
                borderRadius="full"
              ></Box> */}
            </Stack>
            <Box
              display={["block", "none"]}
              cursor="pointer"
              onClick={mobileNavHandler}
              alignSelf={!showNav ? "center" : "flex-start"}
            >
              {!showNav ? (
                <BiMenu fontSize="1.5em" color="#fff" />
              ) : (
                <IoClose fontSize="1.5em" color="#fff" />
              )}
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};
