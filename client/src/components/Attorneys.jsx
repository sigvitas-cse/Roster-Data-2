import { FaUserCircle } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Attorneys = () => {
  const attorneys = [
    { name: "John Doe", role: "Patent Attorney", linkedin: "#", email: "#" },
    { name: "Jane Smith", role: "Senior Legal Advisor", linkedin: "#", email: "#" },
    { name: "Robert Brown", role: "IP Consultant", linkedin: "#", email: "#" },
  ];

  return (
    <section className="max-w-full mx-auto px-6 py-12 text-center bg-white">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-gray-800">Meet Our Legal Experts</h2>
      <p className="text-lg text-gray-600 mt-4 mb-10">
        A team of dedicated professionals ready to protect your intellectual property.
      </p>

      {/* Attorney Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {attorneys.map((attorney, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 
                       hover:shadow-2xl hover:scale-105 hover:border-blue-500"
          >
            {/* Avatar or Default Icon */}
            <div className="relative mx-auto w-24 h-24">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={attorney.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 shadow-sm object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
              <FaUserCircle className="w-24 h-24 text-gray-400 absolute inset-0 mx-auto hidden" />
            </div>

            {/* Attorney Name */}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{attorney.name}</h3>

            {/* Attorney Title */}
            <p className="text-gray-600">{attorney.role}</p>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center gap-4 text-gray-500">
              <a href={attorney.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700 transition-all duration-300" />
              </a>
              <a href={`mailto:${attorney.email}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-2xl hover:text-red-600 transition-all duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attorneys;
