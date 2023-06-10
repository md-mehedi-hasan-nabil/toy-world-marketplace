import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ToyCard from "../components/ToyCard";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../components/Loader";

export default function MyToy() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_BASE_URL + `/api/toy/email/${user.email}`)
      .then((res) => {
        setLoading(false);
        setToys(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12 gap-6 py-8 mt-2">
          {loading ? (
            <Loader />
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
