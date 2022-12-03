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

  return (
    <div>
      <div>
        {pathname === "/[authcode]/auth/signup" ||
        pathname === "/[authcode]/auth/login" ? null : (
          <Header />
        )}
      </div>

      <main>{children}</main>

      <div>
        {pathname === "/[authcode]/auth/signup" ||
        pathname === "/[authcode]/auth/login" ? null : (
          <Footer />
        )}
      </div>
    </div>
  );
};
