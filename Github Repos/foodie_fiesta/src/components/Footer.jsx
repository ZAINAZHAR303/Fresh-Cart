import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <footer className="neumorphic p-6 text-center mt-10 m-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Recipe Share</h3>
          <p className="text-sm">
            Recipe Share is a platform where you can explore, share, and enjoy a variety of recipes from around the world. Join our community and unleash your inner chef!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Recipes</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <div className="flex items-center text-sm space-x-2">
            <MdEmail className="text-blue-500" />
            <p>support@recipeshare.com</p>
          </div>
          <div className="flex items-center text-sm space-x-2 mt-2">
            <MdPhone className="text-green-500" />
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center text-sm space-x-2 mt-2">
            <MdLocationOn className="text-red-500" />
            <p>123 Recipe Lane, Food City</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
        <div className="flex justify-center space-x-4 text-2xl">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="mt-6 text-sm">© 2024 Recipe Share. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
