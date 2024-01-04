"use client";

import { Layout } from "@/components/auth/Layout";
import { ForgetPassword } from "@/components/auth/forgetPassword/ForgetPassword";

export default function Home() {
  return (
    <Layout>
      <ForgetPassword />
    </Layout>
  );
}
