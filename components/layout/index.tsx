import { useRouter } from "next/router";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const router = useRouter();
  const { pathname } = router;
  const onAuthPage = pathname.includes("auth");

  return (
    <div>
      <div>{onAuthPage ? null : <Header />}</div>
      <main>{children}</main>
      <div>{onAuthPage ? null : <Footer />}</div>
    </div>
  );
};
