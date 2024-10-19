// creating header for our website
// import icon from react icon library
import { FaApple, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

// export default function header
export default function HeaderSection() {
  return (
    // give specific width ,and display flex
    <header className="flex justify-between w-full fixed">
      {/* Set backgrouond,textcolor,padding */}
      <div className="flex text-white bg-black w-full p-2 justify-between">
        <div className="flex items-center">
          {/* logo , set height width or margin  */}
          <FaApple className="w-6 h-6 ml-2 hover:text-blue-400" />
          {/*text size marginleft ,or give specific color */}
          <span className="text-xl ml-1 italic hover:text-blue-400">
            Latest iPhone
          </span>
        </div>
        <div className="flex items-center space-x-4 mr-2">
          {/* search icon */}
          <FaSearch className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
          {/* shoping cart icon */}
          <FaShoppingCart className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
          {/* user profile */}
          <FaUser className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
