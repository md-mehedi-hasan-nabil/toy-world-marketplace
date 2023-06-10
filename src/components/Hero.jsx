import hero from "../assets/hero-photo.png";
import car from "../assets/car.png";

export default function Hero() {
  return (
    <div className="grid grid-cols-12 justify-between items-center min-h-[90vh]">
      <div data-aos="fade-right" className="col-span-12 md:col-span-6">
        <img src={car} alt="car" />
        <h1 className="text-[3.5rem] text-[#403E3D] font-semibold leading-[4rem] mt-3">
          Discover the World <br /> of Play and toys that <br /> Spark Joy
        </h1>
        <p className="text-2xl text-[#5D5B5A] my-6">
          It contributes to the development of <br /> cognitive, motor,
          psychosocial, emotional <br /> and linguistic skills.
        </p>
        <button className="btn text-white bg-[#6C6A69] hover:bg-[#4f4d4c]">
          Get Started
        </button>
      </div>
      <div data-aos="fade-left" className="col-span-12 md:col-span-6 py-8">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
