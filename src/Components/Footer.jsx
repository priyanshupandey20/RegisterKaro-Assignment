import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02144A] text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <p className="text-gray-300 text-sm md:text-base">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaGoogle className="cursor-pointer hover:text-gray-400" />
              <FaApple className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400">START A BUSINESS</h4>
            <ul className="mt-2 space-y-1 text-gray-300 text-sm md:text-base">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400">GOVERNMENT REGISTRATION</h4>
            <ul className="mt-2 space-y-1 text-gray-300 text-sm md:text-base">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400">COMPLIANCE & TAX</h4>
            <ul className="mt-2 space-y-1 text-gray-300 text-sm md:text-base">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400">BIS & CDSCO</h4>
            <ul className="mt-2 space-y-1 text-gray-300 text-sm md:text-base">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-400 text-sm">© 2024 Registerkaro. All Rights Reserved.</p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition"
          >
            <FaArrowUp className="text-black" />
          </button>
        </div>
      </div>
    </footer>
  );
}
