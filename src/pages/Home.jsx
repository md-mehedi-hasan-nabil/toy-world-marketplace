import { useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Toys from "../components/Toys";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <Layout>
      <main className="container">
        <Hero />
        <About />
        <Toys />
        <Contact />
      </main>
    </Layout>
  );
}
