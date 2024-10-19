// creating card section for our website
// import Image from next/images to use images in our website
import Image from "next/image";
// export default function Card Section of the website
export default function CardSection() {
  return (
    <div className="flex flex-col items-center justify-center p-2 mt-10 min-h-screen">
      {/* main heaidng of the page give style and gradient color */}
      <h1 className="text-5xl font-bold uppercase  bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
        new series
      </h1>
      {/* Creating cards to display Iphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-4 w-full  max-w-4xl">
        {/*  Card 1 for iphone 16 */}
        <div className="mt-4 ">
          {/* Content for iphone 16 */}
          <div className="text-center justify-center mb-5">
            <h1 className="text-3xl font-bold "> iPhone 16</h1>
            <p className="text-2xl mt-5 font-semibold italic text-orange-700">
              Now in Exciting New Shades
            </p>
            <p className="mt-2">
              6.1-inch Super Retina XDR display, 48MP dual-camera system with 4K
              video recording.
            </p>
          </div>
          <Image
            src={"/images/images4.png"}
            height={300}
            width={500}
            alt="iphone"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
        </div>
        {/* Card 2 iphone 16 pro  */}

        <div className="mt-4 ">
          <div className="text-center justify-center mb-5">
            <h1 className="text-3xl font-bold "> iPhone 16 Pro</h1>
            <p className="text-2xl mt-5 font-semibold italic text-orange-700">
              Available in Trendy Colors
            </p>
            <p className="mt-2">
              6.7-inch Super Retina XDR display, 48MP triple-camera system with
              5x optical zoom and 4K video recording.
            </p>
          </div>
          <Image
            src={"/images/images5.jpg"}
            height={300}
            width={500}
            alt="iphone"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
        </div>
        {/* Card 3 iphone 16 pro max */}

        <div className="mt-5 ">
          <div className="text-center justify-center mb-5">
            <h1 className="text-3xl font-bold "> iPhone 16 ProMax</h1>
            <p className="text-2xl mt-5 font-semibold italic text-orange-700">
              Stylish and Modern Color Variants
            </p>
            <p className="mt-2">
              6.9-inch Super Retina XDR display, 48MP triple-camera system with
              5x optical zoom and 4K video recording.
            </p>
          </div>
          <Image
            src={"/images/images7.jpg"}
            height={300}
            width={500}
            alt="iphone"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
        </div>
      </div>
      <p className=" text-center text-orange-600 text-2xl italic mt-5 mb-5">
        Choose the iPhone that suits you best and make it yours now!
      </p>
    </div>
  );
}
