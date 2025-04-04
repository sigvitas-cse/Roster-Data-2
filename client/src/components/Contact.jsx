import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-14 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-600 mt-2">
        Have questions? We’re here to help.
      </p>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* Phone */}
        <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200
                        w-72 transition-transform duration-300 hover:shadow-lg hover:scale-105">
          <FaPhone className="text-blue-600 text-xl" />
          <span className="text-gray-700 text-lg font-medium">+1 234 567 890</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200
                        w-72 transition-transform duration-300 hover:shadow-lg hover:scale-105">
          <FaEnvelope className="text-blue-600 text-xl" />
          <span className="text-gray-700 text-lg font-medium">support@triangleip.com</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200
                        w-72 transition-transform duration-300 hover:shadow-lg hover:scale-105">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          <span className="text-gray-700 text-lg font-medium">New York, USA</span>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md 
                     transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Send a Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
