import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <nav className="w-full bg-white text-black p-4 shadow-lg border-b border-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-black">
          QueryVista
        </h1>
        <div className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-gray-600 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-600 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/history"
            className="hover:text-gray-600 transition duration-300 ease-in-out"
          >
            Query History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
