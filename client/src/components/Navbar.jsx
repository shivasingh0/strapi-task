import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <header className="bg-[#008CFF] text-white rounded-b-2xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative flex gap-5">
              <Link to="/hotel">
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                  aria-expanded="false"
                >
                  Product
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                  aria-expanded="false"
                >
                  Login Page
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
