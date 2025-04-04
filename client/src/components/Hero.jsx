import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative text-white text-center py-28 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?w=1200')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-[450px] space-y-3"
      >
        <p className="text-2xl font-medium tracking-wide text-gray-200 drop-shadow-md">
          Welcome to <span className="text-blue-400 font-semibold">Triangle IP</span>
        </p>
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          Triangle IP
        </h1>
        <p className="text-lg font-semibold text-gray-300">
          US Patent Attorney Roster
        </p>
        <p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
          Your Trusted Partner in Patent Law and Intellectual Property Protection.
        </p>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 bg-blue-600 px-8 py-3 rounded-full text-white text-lg font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
