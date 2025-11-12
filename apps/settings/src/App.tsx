import Content from "@/components/Content";
import Layout from "@/components/Layout";
import { Banner } from "@sketchybar-gray/react";
import ModalWrapper from "@/components/common/ModalWrapper";
import Providers from "@/components/Providers";

export default function App() {
  return (
    <Providers>
      <Layout>
        <Banner />
        <Content />
      </Layout>
      <ModalWrapper />
    </Providers>
  );
}
