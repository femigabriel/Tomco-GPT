import React from "react";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      <div className="">{children}</div>
    </div>
  );
};
