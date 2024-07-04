import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <nav className="w-full m-auto max-w-3xl bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-center">
          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </div>

          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <FaSearch className="text-2xl" />
            <span className="text-xs mt-1">Search</span>
          </div>

          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <FaBell className="text-2xl" />
            <span className="text-xs mt-1">Notification</span>
          </div>

          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <FaUser className="text-2xl" />
            <span className="text-xs mt-1">My</span>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
