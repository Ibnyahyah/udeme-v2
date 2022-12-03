import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
export const DashboardWapper = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const router = useRouter();

  const nav = [
    { title: "Add Post", link: `/new-post` },
    { title: "Manage Posts", link: `/` },
    { title: "Add User", link: `/new-user` },
    { title: "Manage Users", link: `/manage-users` },
    { title: "Add Category", link: `new-category` },
    {
      title: "Manage Categories",
      link: `/manage-category`,
    },
    {
      title: "Manage Reports",
      link: `/manage-reports`,
    },
  ];

  return (
    <Box bgColor="#092A1E" p="2rem">
      <Stack direction={["column", "row"]} rowGap="2rem" columnGap="2rem">
        <Box bgColor="#fff" width={{ md: "28%", lg: "20%" }}>
          {nav.map((singleNav, i) => {
            return (
              <Box
                key={i}
                style={{ cursor: "pointer" }}
                color={
                  router.pathname === `/[authcode]/dashboard${singleNav.link}`
                    ? "#3AAFA9"
                    : "gray.600"
                }
                _hover={{ bgColor: "#092A1E", color: "#3AAFA9" }}
                bgColor={
                  router.pathname === `/[authcode]/dashboard${singleNav.link}`
                    ? "#092A1E"
                    : "#fff"
                }
              >
                <Link
                  href={{
                    pathname: "/[authcode]/dashboard/" + singleNav.link,
                    query: {
                      authcode: process.env.NEXT_PUBLIC_ADMIN_AUTH_CODE,
                    },
                  }}
                >
                  <Box
                    py="1.5rem"
                    px="1.5rem"
                    borderBottom={
                      nav[nav.length - 1] !== singleNav
                        ? "1px solid #092A1E"
                        : "0"
                    }
                  >
                    <Text>{singleNav.title}</Text>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>

        <Box width={{ md: "70%", lg: "78%" }}>{children}</Box>
      </Stack>
    </Box>
  );
};
