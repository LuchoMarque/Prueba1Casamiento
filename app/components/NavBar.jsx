'use client'
import React from "react";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="w-screen flex items-center justify-between p-5 bg-gray-500">
        <div className="hidden md:flex flex-auto text-center space-x-20">
          <ul className="flex-auto text-center space-x-20">
            <li className="componentList underline-slide"><a href="">Ubicación</a></li>
            <li className="componentList underline-slide"><a href="#Songs">Canciones</a></li>
            <li className="componentList underline-slide"><a href="#Gift">Regalos</a></li>
            <li className="componentList underline-slide"><a href="#Asistance">Confirmar Asistencia</a></li>
          </ul>
        </div>

        <div className="absolute right-0 md:hidden flex items-center">
        <button onClick={toggleMenu} className="relative focus:outline-none">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className=" w-full md:hidden ">
          <ul className="flex flex-col items-center p-4 space-y-4">
            <li className="componentList underline-slide flex"><a href="">Ubicación</a></li>
            <li className="componentList underline-slide flex"><a href="">Canciones</a></li>
            <li className="componentList underline-slide flex"><a href="">Regalos</a></li>
            <li className="componentList underline-slide flex"><a href="#Asistance">Confirmar Asistencia</a></li>
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default NavBar;