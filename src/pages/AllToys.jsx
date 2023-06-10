import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ToyCard from "../components/ToyCard";

export default function AllToys() {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/api/toy")
      .then((res) => {
        setLoading(false);
        setToys(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12 gap-6 py-8 mt-2">
          {loading ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : toys?.length > 0 ? (
            toys?.map((toy) => <ToyCard key={toy._id} toy={toy} />)
          ) : (
            <h2 className="text-lg col-span-6">No toy found.</h2>
          )}
        </div>
      </div>
    </Layout>
  );
}
