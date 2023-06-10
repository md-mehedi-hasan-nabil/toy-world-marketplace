import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function EditToy() {
  const { toyId } = useParams();
  const { user } = useContext(AuthContext);
  const [categories, setCategiries] = useState([]);
  const [toy, setToy] = useState({});

  useEffect(() => {
    document.title = "Update Toy Page";
  }, []);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE_URL + `/api/toy/${toyId}`)
      .then((res) => {
        setToy(res.data);
      })
      .catch((err) => console.error(err));
  }, [toyId]);


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/api/category")
      .then((res) => {
        setCategiries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const picture = form.picture.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const sub_category = form.sub_category.value;
    const description = form.description.value;

    if (
      user.displayName &&
      user.email &&
      name &&
      price &&
      picture &&
      rating &&
      quantity &&
      sub_category &&
      description
    ) {
      console.log({
        seller_name: user.displayName,
        seller_email: user.email,
        name,
        price,
        picture,
        rating,
        quantity,
        sub_category,
        description,
      });
      axios
        .patch(`${import.meta.env.VITE_API_BASE_URL}/api/toy/${toyId}`, {
          seller_name: user.displayName,
          seller_email: user.email,
          name,
          price,
          picture,
          rating,
          quantity,
          sub_category,
          description,
        })
        .then(function (response) {
          console.log(response);
          e.target.reset();
          toast.success("Toy update Successfull");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.success("Field required");
    }
  }
  return (
    <Layout>
      <div className="container">
        <h2 className="text-3xl font-semibold py-5 text-center">
          Update Your Toy
        </h2>
        <form onSubmit={handleSubmit} className="p-12 w-1/2 mx-auto">
          <div className="flex justify-start items-center gap-4">
            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">Toy Name</label>
              <input
                required
                type="text"
                defaultValue={toy?.name ? toy.name : ""}
                name="name"
                placeholder="Toy name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>

            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">Toy Price</label>
              <input
                required
                type="number"
                defaultValue={toy?.price ? toy.price : ""}
                name="price"
                placeholder="Toy price"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">Toy picture</label>
              <input
                required
                type="url"
                defaultValue={toy?.picture ? toy.picture : ""}
                placeholder="Toy picture"
                name="picture"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>

            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">Toy rating</label>
              <input
                required
                type="number"
                min={0}
                max={5}
                defaultValue={toy?.rating ? toy.rating : ""}
                placeholder="Toy rating"
                name="rating"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">
                Toy quantity
              </label>
              <input
                required
                type="number"
                defaultValue={toy?.quantity ? toy.quantity : ""}
                placeholder="Toy quantity"
                name="quantity"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <label className="pl-3 pb-1 block font-medium">
                Add Sub category
              </label>
              <select
                required
                name="sub_category"
                defaultValue={toy?.sub_category ? toy.sub_category : ""}
                className="select select-primary w-full"
              >
                {categories?.length > 0 ? (
                  categories.map((category) => (
                    <option
                      className="capitalize"
                      value={category.name}
                      key={category._id}
                    >
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option>No category found.</option>
                )}
              </select>
            </div>
          </div>

          <textarea
            required
            placeholder="Toy description"
            name="description"
            defaultValue={toy?.description ? toy.description : ""}
            className="mt-5 textarea textarea-bordered textarea-lg w-full"
          ></textarea>

          <button className="btn bg-[#6c6a69] text-white hover:bg-[#4f4d4c] mt-4">
            Update Toy
          </button>
        </form>
      </div>
    </Layout>
  );
}
