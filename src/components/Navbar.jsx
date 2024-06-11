import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/ss.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#fbfff1] flex p-4 sticky h-[12vh] top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-xl font-bold ">
          <Link to="/">
            <img src={Logo} className="h-[8rem] w-[8rem]" alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-2xl">
          <NavLink to="/" className={({ isActive }) => {
            return `navbar ${isActive ? 'text-primary' : ''}`
          }}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => {
            return `navbar ${isActive ? 'text-primary' : ''}`
          }}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => {
            return `navbar ${isActive ? 'text-primary' : ''}`
          }}>About Us</NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/signin" className="hover:opacity-75 navbar-btn">Sign In</Link>
          <Link to="/signup" className="hover:opacity-75 navbar-btn">Sign Up</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link to="/" className="block bg-white text-primary py-2 px-4  hover:opacity-75" onClick={toggleMenu}>Home</Link>
          <Link to="/shop" className="block bg-white text-primary py-2 px-4 hover:opacity-75" onClick={toggleMenu}>Shop</Link>
          <Link to="/about" className="block bg-white text-primary py-2 px-4  hover:opacity-75" onClick={toggleMenu}>About Us</Link>
          <Link to="/signin" className="block bg-white text-primary py-2 px-4  hover:opacity-75" onClick={toggleMenu}>Sign In</Link>
          <Link to="/signup" className="block bg-white text-primary py-2 px-4 hover:opacity-75" onClick={toggleMenu}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
