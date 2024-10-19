// Hero Section of the website
// import images from next
import Image from "next/image";
// export default function Hero Section 
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:flex-row lg:gap-6">
      <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mt-0">
        {/*Main content that represnet website */}
        <h1 className=" text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-700 to-green-600 bg-clip-text text-transparent
       mt-16 mb-5">
          Now Available
        </h1>

        <p className="text-3xl lg:text-5xl font-semibold italic">
          The All-New iPhone 16 ProMax{" "}
        </p>
        <p className="text-3xl lg:text-4xl mt-4 text-red-600 font-semibold italic text-gradient-to-r from-orange-400 to-red-400 ">
          2024 Edition
        </p>
        <button className="text-white bg-black font-semibold rounded border-white hover:bg-slate-700 mt-5 p-2">
          Order Now
        </button>
      </div>
      {/* iPhone 16 pro max image */}
      <div>
        <Image
          src={"/images/images6.jpg"}
          height={300}
          width={300}
          alt="iPhone"
          className="rounded-xl mt-10"
        />
      </div>
    </div>
  );
}

