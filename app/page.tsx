import { Category } from "./components/Catgeories";
import { Homepage } from "./components/Homepage";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Homepage />
      <Category />
    </Layout>
  );
}
