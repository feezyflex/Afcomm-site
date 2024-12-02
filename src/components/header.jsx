import React, { useState } from "react";
import AfcommLogo from "../assets/AfcommLogo.png";
import { Link } from "react-router-dom";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      setIsServicesOpen(false);
    };
  
    const toggleServices = () => {
      setIsServicesOpen(!isServicesOpen);
      };
  
   return (
      <>
        <div className="sticky z-20">
          <header className="bg-gradient-to-r from-blue-950 to-orange-700 text-white font-bold">
            <nav className="flex items-center justify-between p-4">
              <div className="md:flex-none flex justify-center md:justify-start">
                <Link to="/" className="flex flex-row place-items-center gap-3">
                  <img
                    src={AfcommLogo}
                    className="flex justify-start"
                    width={80}
                    height={80}
                    alt="Logo"
                  />
                  <p className="font-bold font-sans text-2xl drop-shadow-2xl hidden sm:block md:block">
                    Afcomm Technology
                  </p>
                </Link>
              </div>
              <div className="hidden md:flex space-x-20 mr-10">
                <div className="relative">
                  <button
                    onClick={toggleServices}
                    className="hover:text-gray-300"
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div
                      onMouseLeave={toggleServices}
                      className="absolute left-0 mt-2 bg-white text-black shadow-lg text-xs"
                    >
                      <Link
                        to="/installations"
                        className="block px-10 py-2 hover:bg-gray-200"
                      >
                        Installations
                      </Link>
                      <Link
                        to="/support&maintenances"
                        className="block px-10 py-2 hover:bg-gray-200"
                      >
                       Support & Maintenances
                      </Link>
                      <Link
                        to="/supply&procurements"
                        className="block px-10 py-2 hover:bg-gray-200"
                      >
                        Supply & Procurements
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  
                  <Link to="/products"
                   className="hover:text-gray-300"
                  >
                    Products
                  </Link>
                 </div>
                <a href="#store" className="hover:text-gray-300">
                  Store
                </a>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </nav>
            {isOpen && (
              <div className="absolute top-28 left-0 right-0 bg-gradient-to-r from-blue-300 to-orange-300 z-50 text-xs">
                <div className="relative flex flex-col">
                  <button
                    onClick={toggleServices}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700 text-start"
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div className="left-0 right-0 mt-2 bg-white text-black shadow-lg">
                      <Link
                        to="/installations"
                        onClick={toggleMenu}
                        className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700"
                      >
                        Installations
                      </Link>
                      <Link
                        to="/support&maintenances"
                        onClick={toggleMenu}
                        className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700"
                      >
                        Support & Maintenances
                      </Link>
                      <Link
                        to="/supply&procurements"
                        onClick={toggleMenu}
                        className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700"
                      >
                        Supply & Procurements
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative flex flex-col">
                  <Link to="/products"
                  onClick={toggleMenu}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700 text-start"
                  >
                    Products
                  </Link>
                  </div>
                <a
                  href="#store"
                  className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700"
                >
                  Store
                </a>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gradient-to-r from-blue-950 to-orange-700"
                >
                  Contact us
                </Link>
              </div>
            )}
          </header>
        </div>
</>
    )
}


export default Header;

        
