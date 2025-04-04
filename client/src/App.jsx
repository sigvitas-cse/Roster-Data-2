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
    <div className="relative min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Background GIF */}
      <div className="absolute inset-0 -z-10">
        <img
          // src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2J3ejhhbTEya3A2MTg1ZWRxNzhlcnd4b2V4cG9lZTM5MW5vZ2xtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pl0n6cq0Ly1giE19Ey/giphy.gif"
          // src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXEzbW84YTY5NWJ2cTJoemkyaGVzazQzaXoyNzVuMjdrOGV0bzYydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5kvxFZqlxiabJG8LDn/giphy.gif"
          src="https://media.istockphoto.com/id/1092254154/photo/modern-tv-or-pc-monitor-on-gray-background.jpg?s=612x612&w=0&k=20&c=P7Fz9AK368w1NmR7CHgGF_CR80S6bhcho2TogqQ2HpQ="
          alt="Cool Animated Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-1/2 right-4 px-2 py-1 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center pt-24">
        {/* Content Container */}
        <div className="w-full max-w-7xl px-0 py-3 bg-white dark:bg-gray-800 dark:border-gray-600 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200">
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
