import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="bg-[#008CFF] text-white rounded-b-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              Product
            </button>
          </div>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
             <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  </>
  )
}

export default Navbar
