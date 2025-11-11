import Content from "@/components/Content";
import Layout from "@/components/Layout";
import Banner from "@/components/common/Banner";
import Modal from "@/components/common/Modal";
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
