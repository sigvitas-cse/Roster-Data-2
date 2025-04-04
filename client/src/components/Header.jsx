import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "bg-white shadow-lg text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Header Content */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8 transition-all duration-500">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">Triangle IP</h1>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {[
            { name: "Home", info: "" },
            { name: "Our Services", info: "We offer patent filing, IP protection, and legal consultation." },
            { name: "Attorneys", info: "Meet our expert legal team specializing in intellectual property law." },
            { name: "Contact", info: "Get in touch with us via email or phone for expert advice." },
          ].map((item, index) => (
            <li
              key={index}
              className="relative group transition duration-200 hover:text-blue-500"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href="#" className="flex items-center font-semibold">
                {item.name} {item.info && <FaChevronDown className="ml-1 text-sm" />}
              </a>

              {/* Dropdown */}
              {hoveredMenu === item.name && item.info && (
                <div className="absolute left-0 top-full w-72 bg-white text-gray-800 shadow-lg rounded-md p-4 mt-2 transition-opacity duration-300 opacity-100">
                  <p className="text-sm">{item.info}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-md transition duration-300 hover:bg-blue-500 hover:shadow-lg">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Header;
