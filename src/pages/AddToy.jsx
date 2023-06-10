import Layout from "../components/Layout";

export default function AddToy() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Layout>
      <div className="container">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex justify-start items-center gap-4">
            <input
              type="text"
              name="name"
              placeholder="Toy name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="price"
              placeholder="Toy price"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <input
              type="url"
              placeholder="Toy picture"
              name="picture"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Toy rating"
              name="rating"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <input
              type="number"
              placeholder="Toy quantity"
              name="quantity"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Toy description"
              name="description"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <button className="btn bg-[#6c6a69] text-white hover:bg-[#4f4d4c] mt-4">
            Add Toy
          </button>
        </form>
      </div>
    </Layout>
  );
}
