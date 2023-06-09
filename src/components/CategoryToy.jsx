import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ToyCard from "./ToyCard";

export default function CategoryToy({ category }) {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/api/toy")
      .then((res) => {
        setLoading(false);
        const result = res.data.filter((toy) => toy.sub_category === category);
        console.log(result);
        setToys(result);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div>
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
  );
}

CategoryToy.propTypes = {
  category: PropTypes.string,
};
