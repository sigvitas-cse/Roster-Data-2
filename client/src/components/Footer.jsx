import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Triangle IP</h3>
          <p className="text-gray-400">
            We provide expert patent law services to help protect your innovations. Our experienced attorneys ensure your intellectual property stays secure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Attorneys</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Patent Filing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">IP Protection</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Trademark Registration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Legal Consultation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Corporate Legal Services</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaPhone className="text-blue-500" /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-blue-500" /> support@triangleip.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" /> New York, USA</li>
          </ul>
        </div>

      </div>

      {/* Additional Footer Sections */}
      <div className="max-w-7xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">

        {/* Testimonials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What Our Clients Say</h3>
          <p className="text-gray-400 italic">
            "Triangle IP helped us secure our patents with ease. Their expertise in intellectual property law is unmatched!"  
            <br />- Alex Johnson, Startup Founder
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-3">Get the latest legal updates and patent news.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-800 outline-none"
          />
          <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-500 transition-all">
            Subscribe
          </button>
        </div>

        {/* Recent Blog Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Latest Blog Posts</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">How to Protect Your Intellectual Property</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Understanding Patent Law in 2025</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Common IP Mistakes & How to Avoid Them</a></li>
          </ul>
        </div>

      </div>

      {/* Social Media Links */}
      <div className="text-center mt-12">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
        </div>
      </div>

      {/* Office Hours */}
      <div className="text-center text-gray-400 mt-10">
        <p className="border-t border-gray-700 pt-4">Office Hours: Mon - Fri | 9 AM - 6 PM (EST)</p>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-4 border-t border-gray-700 pt-4">
        <p>© 2025 Triangle IP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
