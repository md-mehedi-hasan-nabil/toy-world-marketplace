import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ToyCard from "../components/ToyCard";
import Toys from "../components/Toys";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <Hero />
        <Toys />
      </main>
    </Layout>
  );
}
