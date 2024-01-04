"use client";

import { Layout } from "@/components/auth/Layout";
import { Login } from "@/components/auth/login/Login";
import { Index } from "@/components/dashboard/Index";
import Image from "next/image";

export default function Home() {
  return (
    // <Layout>
    //   {/* <Login /> */}
    //   <Index />
    // </Layout>
    <div>
        <Index />
    </div>
  );
}
