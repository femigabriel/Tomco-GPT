"use client";

import { Layout } from "@/components/dashboard/layout/Layout";
import { UploadDocuments } from "@/components/dashboard/upload/UploadDocuments";

export default function Home() {
  return (
    <Layout>
      <UploadDocuments />;
    </Layout>
  );
}
