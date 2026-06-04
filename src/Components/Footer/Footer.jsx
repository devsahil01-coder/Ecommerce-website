import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 opacity-0 translate-y-5 animate-fadeIn">
      <div className="max-w-[1400px] mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          
          <div>
            <h2 className="text-3xl font-bold text-[#059669]">
              ShopSphere
            </h2>
            <p className="text-gray-400 mt-4">
              Your one-stop destination for quality products,
              great deals, and a seamless shopping experience.
            </p>
          </div>

       
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Shop</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Customer Support
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-green-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-green-400 transition" />
              <FaTwitter className="cursor-pointer hover:text-green-400 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-green-400 transition" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 ShopSphere. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}