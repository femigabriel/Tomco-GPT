import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="login-page">
      <div className="">{children}</div>
      <div className="text-[#475467] text-sm py-8 px-8">
        © Tomco Service Group 2024
      </div>
    </div>
  );
};
