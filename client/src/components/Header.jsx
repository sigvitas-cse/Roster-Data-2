import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";


function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleLoginClick = () => {
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 800); // Reset after 800ms
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Home",
      info: "Start your journey with Triangle IP, your trusted partner in intellectual property.",
      subInfo: "Learn about our mission, vision, and what makes us stand out.",
    },
    {
      name: "Our Services",
      info: "We provide comprehensive patent services, including filing, IP protection, and strategy consulting.",
      subInfo: "Expert assistance in patent drafting, legal advisory, and innovation protection.",
    },
    {
      name: "Attorneys",
      info: "Meet our expert legal team with years of experience in intellectual property law.",
      subInfo: "Skilled professionals dedicated to protecting your innovations.",
    },
    {
      name: "Contact",
      info: "Reach out for personalized guidance on your intellectual property needs.",
      subInfo: "Call, email, or visit us for expert advice on patents and IP protection.",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-10">
        {/* Logo */}
        {/* <h1 className="text-3xl font-bold tracking-wide">Triangle IP</h1> */}
        <img 
          src="/Triangle-IP-Logo.png" 
          alt="Triangle IP Logo" 
          className="h-16 w-auto"
        />


        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer hover:text-blue-500 transition-all duration-200"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href="#" className="flex items-center font-semibold">
                {item.name} <FaChevronDown className="ml-1 text-sm" />
              </a>

              {/* Dropdown */}
              {hoveredMenu === item.name && (
                <div className="absolute left-0 top-full w-80 bg-white text-gray-800 shadow-lg rounded-md p-4 mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-sm font-semibold">{item.info}</p>
                  <p className="text-xs mt-1 text-gray-600">{item.subInfo}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Login Button */}
        {/* <button className="hidden md:block bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-md transition duration-300 hover:bg-blue-500">
          Login
        </button> */}
        <motion.button
          onClick={handleLoginClick}
          animate={{ rotateY: isFlipping ? 720 : 0 }} // Flip twice (360° x 2)
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-md transition duration-300 hover:bg-blue-500"
        >
          Login
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 text-center">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 text-lg font-semibold hover:text-blue-400 transition">
                <a href="#">{item.name}</a>
                <p className="text-sm opacity-75">{item.info}</p>
              </li>
            ))}
            <button className="bg-blue-600 px-6 py-3 mx-auto rounded-lg text-white font-semibold text-lg shadow-md transition duration-300 hover:bg-blue-500">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
