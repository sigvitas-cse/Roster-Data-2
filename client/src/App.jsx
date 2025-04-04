import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Attorneys from "./components/Attorneys";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("Dark Mode Applied:", document.documentElement.classList.value);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Background Overlay (Always Visible) */}
      <div className="absolute inset-0 -z-10 bg-pattern bg-cover bg-center opacity-20 dark:opacity-30"></div>

      {/* Header */}
      <Header />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-28 right-0 px-0 py-0 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center pt-20">
        {/* Content Container */}
        <div className="w-full max-w-7xl px-10 py-10 bg-white dark:bg-gray-800 dark:border-gray-600 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200">
          <Hero />
          <About />
          <Services />
          <Attorneys />
          <Testimonials />
          <FAQs />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
