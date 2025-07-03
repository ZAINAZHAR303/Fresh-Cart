import React from 'react';
import { gsap } from 'gsap';

function Navbar() {
  React.useEffect(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <nav className="neumorphic p-4 flex justify-between items-center m-4">
      <h1 className="text-xl font-bold">Recipe Share</h1>
      {/* <h1 className='text-xl '>hello</h1> */}
      <ul className="flex gap-4">
        <li className="nav-item text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
        <li className="nav-item text-gray-700 hover:text-blue-500 cursor-pointer">Recipes</li>
        <li className="nav-item text-gray-700 hover:text-blue-500 cursor-pointer">About Us</li>
        <li className="nav-item text-gray-700 hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
