import Content from "@/components/Content";
import Layout from "@/components/Layout";
import { Banner, Modal } from "@sketchybar-gray/react";
import Providers from "@/components/Providers";

export default function App() {
  return (
    <Providers>
      <Layout>
        <Banner />
        <Content />
      </Layout>
      <Modal />
    </Providers>
  );
}
