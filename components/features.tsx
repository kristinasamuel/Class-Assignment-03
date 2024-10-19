// Features section of our website
// export default function of the website 
export default function FeaturesSection() {
  return (

    <div className="flex flex-col min-h-screen mt-10 p-2">
      {/*  main heading of the page */}
      <h1
        className="text-6xl font-bold bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent
       text-center justify-center mt-5 mb-5"
      > Features
      </h1>
      {/* Detail of the new iphone features */}
      <div className="flex  items-center justify-center p-2 mt-10">
        <div className="flex flex-col bg-gradient-to-r from-black to-slate-500 w-full md:w-1/2  text-center justify-center md:p-8">
          <h1 className="text-3xl mt-5 font-bold text-teal-500">
           {/* sub heading  */}
            Introducing Latest Features
          </h1>
          {/* content  */}
          <p className=" text-xl mt-10 text-white ">
            The iPhone 16 series, released in 2024, includes models 
            iPhone 16, 16 Pro, and 16 Pro Max. It features the powerful new A18
            chip, which enhances AI capabilities and overall performance. The
            Pro models come with an upgraded camera system for better zoom and
            low-light photos, while all models offer longer battery life. The
            series also has stronger displays with Ceramic Shield technology for
            improved durability.
          </p>
          {/* create button */}
          <div className="mt-5 mb-10"> 
          <button className="bg-amber-400 p-2  font-medium rounded-full shadow-lg hover:bg-gray-400"> Explore iPhone 16</button>
          </div>
        </div>
      </div>
    </div>
  );
}
