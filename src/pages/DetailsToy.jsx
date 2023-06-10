import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import Loader from "../components/Loader";

export default function DetailsToy() {
  const { toyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [toy, setToy] = useState([]);

  useEffect(() => {
    document.title = "Toy Details Page";
  }, []);

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
      <div className="container py-10">
        <div className="grid grid-cols-12 gap-8">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="col-span-12 md:col-span-4">
                <img className="rounded-md shadow-md" src={picture} alt={name} />
              </div>
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-lg font-medium">${price}</p>
                <div className="flex items-center my-4">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={Number(rating)}
                    readOnly
                  />
                  ({rating})
                </div>
                <p className="text-lg">
                  <span>Quantity: {quantity}</span>
                </p>
                <p className="text-lg"><span className="font-semibold my-3">Sub category:</span> {sub_category}</p>
                <p className="text-lg">{description}</p>
                <div className="text-xl mt-5">
                  <h4><span className="font-semibold">Seller name:</span> {seller_name}</h4>
                  <h5><span className="font-semibold">Seller email:</span> {seller_email}</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
