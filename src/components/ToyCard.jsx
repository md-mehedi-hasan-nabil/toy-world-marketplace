import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ToyCard({ toy }) {
  const { _id, name, picture, price, rating, sub_category } =
    toy || {};
    
  return (
    <article
      data-aos="zoom-out-up"
      className="col-span-12 md:col-span-3 rounded-xl shadow-lg bg-[#F3F3F3] p-4 border-2 transition-all border-[#F3F3F3] hover:border-[#6C6A69]"
    >
      <div className="flex justify-between items-center">
        <p className="uppercase text-[#6C6A69] tracking-widest font-semibold text-[14px]">
          {sub_category}
        </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[#FF0000] hover:fill-[#FF0000] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </div>
      <img
        className="w-[148px] h-[148px] object-cover rounded-full mx-auto mt-3"
        src={picture}
        alt={name}
      />
      <h2 className="text-2xl font-semibold line-clamp-1 text-[#403E3D] my-3">
        {name}
      </h2>
      <div className="flex items-center">
        <Rating /> <span className="text-lg">(4)</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-[#312F2E]  font-medium text-lg tracking-widest">
          ${price}
        </span>
        <Link
          to={`/details/${_id}`}
          className="text-[#312F2E]  font-medium text-lg"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

ToyCard.propTypes = {
  toy: PropTypes.object.isRequired,
};
