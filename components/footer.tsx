// design footer for our website
// import logo for footer from react icon library 
import { FaApple } from "react-icons/fa";
// export default footer to our website
export default function FooterPage() {
  return (
    <>
    {/* give style background color text white*/}
      <footer className="bg-black text-white ">
        {/* set width,padding and display */}
        <div
          className="max-w-6xl mx-auto grid  grid-cols-2 sm:grid-cols-2
          lg:grid-cols-4 gap-2 p-4 sm:p-6 lg:p-8 mb-4 "
        >
          {/* 1st ,product logo */}
          <div>
            <h2 className=" text-2xl m-2 font-medium text-blue-400 "> Logo</h2>
            <FaApple className="w-20 h-20 text-white hover:text-blue-400" />
          </div>
          {/* 2nd, servies */}
          <div>
            <h2 className=" text-2xl m-2 font-medium text-blue-400 ">
              Services
            </h2>
            <div className="text-white ">
              <p>Software Assistance </p>
              <p>Warranty & Repairs </p>
              <p> Data Transfer Services</p>
              <p>24/7 Support </p>
            </div>
          </div>
          {/* 3rd Social media contacts */}
          <div>
            <h2 className="text-2xl m-2 font-medium text-blue-400">
              follow us
            </h2>
            {/* list items */}
            <ul className="m-2 space-y-1">
              <li>Linkdin</li>
              <li>Facebook</li>
              <li> twitter </li>
          </ul>
          </div>
          {/* 4th contact us*/}
          <div>
            <h1 className="text-2xl m-2 font-medium text-blue-400">
             
              contact us
            </h1>
            <p>Email: iphone@gmail.com</p>
            <p> Address: USA, New York, America.</p>
          </div>
        </div>
        {/* copy right of the product */}
        <p className="text-center text-blue-400 text-xm bg-slate-800 mb-0 p-1 space-y-2">
          © 2024 Apple. All rights reserved.
        </p>
      </footer>
    </>
  );
}
