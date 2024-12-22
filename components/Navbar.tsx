'use client';

import { useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Separate state for Register

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(false); // Close Register overlay if Login is opened
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
    setIsLoginOpen(false); // Close Login overlay if Register is opened
  };

  return (
    <>
      <nav className="flex items-center justify-between px-16 py-4 border-b shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Bars3Icon
            className="w-16 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
          <Link href="/" passHref>
            <div className="w-10 h-10 flex justify-center items-center border rounded-full cursor-pointer">
              <span className="font-bold text-xl">V</span>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring"
          />
          <button className="ml-2 hover:text-blue-500 transition duration-300 ease-in-out">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLogin}
            className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            SIGN IN
          </button>
          <HeartIcon className="w-6 h-6 hover:text-red-500 transition duration-300 ease-in-out" />
          <ShoppingCartIcon className="w-6 h-6 hover:text-green-500 transition duration-300 ease-in-out" />
        </div>
      </nav>

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-8 left-0 w-64 bg-white p-6 shadow-md transition-transform transform translate-y-10 duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4">
              <li>
                <Link href="/" passHref>
                  <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                    HOME
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about-website" passHref>
                  <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                    ABOUT WEBSITE
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about-varranrat" passHref>
                  <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                    ABOUT VARRANRAT T.
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/paintings" passHref>
                  <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                    PAINTINGS
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                    CONTACT
                  </button>
                </Link>
              </li>
              <li>
                <button className="w-full text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out">
                  CHANGE LANGUAGE
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Login Overlay */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center"
          onClick={toggleLogin}
        >
          <div
            className="bg-white w-[400px] h-[530px] p-6 rounded-lg shadow-lg relative transition-transform transform translate-y-0 duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <XMarkIcon
              className="w-6 h-6 absolute top-4 right-4 cursor-pointer hover:text-red-500"
              onClick={toggleLogin}
            />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Sign in</h2>
              <button
                onClick={toggleRegister}
                className="px-3 py-1 border border-black rounded-full text-sm font-normal hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-4 text-center">
                <Link href="/forgot-password" className="text-sm text-gray-500 hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-blue-600 text-white py-3 border rounded-full transition duration-300 ease-in-out"
              >
                SIGN IN
              </button>
              {/* Continue with Google and Facebook */}
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  className="w-full py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Continue with Google
                </button>
                <button
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Continue with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Overlay */}
      {isRegisterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center"
          onClick={toggleRegister}
        >
          <div
            className="bg-white w-[400px] h-[540px] p-6 rounded-lg shadow-lg relative transition-transform transform translate-y-0 duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <XMarkIcon
              className="w-6 h-6 absolute top-4 right-4 cursor-pointer hover:text-red-500"
              onClick={toggleRegister}
            />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Crreate your account</h2>
              <button
                onClick={toggleLogin}
                className="px-3 py-1 border border-black rounded-full text-sm font-normal hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Sign in
              </button>
            </div>
            <h1 className="text-1xl text-gray-500">Registration is easy.</h1>
            {/* Register Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium">
                  First name*
                </label>
                <input
                  type="firstname"
                  id="firstname"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              {/* <div className="mt-4 text-center">
                <Link href="/forgot-password" className="text-sm text-gray-500 hover:underline">
                  Forgot your password?
                </Link>
              </div> */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-blue-600 text-white py-3 border rounded-full transition duration-300 ease-in-out"
              >
                REGISTER
              </button>
              {/* Continue with Google and Facebook */}
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  className="w-full py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Continue with Google
                </button>
                <button
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Continue with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
