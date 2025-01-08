import { AboutUs } from "./components/Homepage/AboutUs";
import { Experience } from "./components/Homepage/Experience";
import { Header } from "./components/Homepage/Header";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <Experience />
    </Layout>
  );
}
