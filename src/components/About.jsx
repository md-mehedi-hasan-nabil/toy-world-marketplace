
export default function About() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-12 gap-8 justify-between items-center py-8">
        <div className="col-span-12 md:col-span-6">
          <img
            className="w-full md:w-3/4 rounded-lg shadow-md"
            src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1"
            alt="toy world"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h5 className="mb-3 text-base font-medium">About us</h5>
          <h2 className="text-5xl font-semibold">
            Welcome to our toy wonderland!
          </h2>
          <p className="text-lg mt-4">
            At Toy world, we believe that childhood should be filled with
            laughter, creativity, and endless possibilities. We are dedicated to
            providing a wide range of high-quality toys that spark imagination,
            promote learning, and bring joy to children of all ages.
          </p>
          <button className="btn mt-4">About More</button>
        </div>
      </div>
    </div>
  );
}
