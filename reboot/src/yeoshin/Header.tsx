import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <footer className="fixed top-0 w-full">
      <nav className="w-full m-auto max-w-3xl bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="text-xs mt-1">여신티켓</span>
          </div>

          <div className="w-full py-2 flex flex-col items-center text-gray-600 hover:text-blue-500">
            <FaSearch className="text-2xl" />
            <span className="text-xs mt-1">Search</span>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Header;
