import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ToyCard from "../components/ToyCard";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <Hero />
        
        <div className="grid grid-cols-12 gap-6 py-8 mt-8">
          <ToyCard />
          <ToyCard />
          <ToyCard />
          <ToyCard />
          <ToyCard />
          <ToyCard />
          <ToyCard />
          <ToyCard />
        </div>
      </main>
    </Layout>
  );
}
