import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailsToy() {
  const { toyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [toy, setToy] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_BASE_URL + `/api/toy/${toyId}`)
      .then((res) => {
        setLoading(false);
        setToy(res.data);
      })
      .catch((err) => console.error(err));
  }, [toyId]);

  console.log(toy);

  const {
    picture,
    name,
    price,
    rating,
    quantity,
    sub_category,
    description,
    seller_name,
    seller_email,
  } = toy || {};

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <img src={picture} alt={name} />
          </div>
          <div className="col-span-12 md:col-span-8">

          </div>
        </div>
      </div>
    </Layout>
  );
}
