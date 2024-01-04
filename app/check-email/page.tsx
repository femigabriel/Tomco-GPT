"use client";

import { Layout } from "@/components/auth/Layout";
import CheckEMail from "@/components/auth/checkEmail/CheckEMail";
import { ForgetPassword } from "@/components/auth/forgetPassword/ForgetPassword";

export default function Home() {
  return (
    <Layout>
      <CheckEMail />
    </Layout>
  );
}
