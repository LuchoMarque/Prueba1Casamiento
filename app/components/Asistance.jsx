"use client"

import { useState } from "react";
import React from "react";
import Confetti from "react-confetti";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebaseConfig";
import { FaCheck, FaTimes } from "react-icons/fa";

const Asistance = () => {
  const [isGoing, setIsGoing] = useState(null);
  const [name, setName] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [inputScale, setInputScale] = useState(0);
  const [selectScale, setSelectScale] = useState(0);
  const [buttonScale, setButtonScale] = useState(0);
  const [confirmationText, setConfirmationText] = useState("Confirmar asistencia");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSelect = (option) => {
    setIsGoing(option === true ? "Asistirá" : "No asistirá");

    if (option === true) {
      setTimeout(() => {
        setInputScale(1); // Muestra el input con un delay
        setTimeout(() => {
          setSelectScale(1); // Muestra el select después del input
          setTimeout(() => {
            setButtonScale(1); // Muestra el botón después del select
          }, 300);
        }, 300);
      }, 300);
    } else {
      setButtonScale(1); // Muestra el botón directamente
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    try {
      await addDoc(collection(db, "users"), {
        name: name || "No especificado",
        dieta: dietaryRestriction || "N/A",
        isGoing: isGoing,
      });
      setButtonScale(0);
      setTimeout(() => {
        setButtonScale(1);
        setConfirmationText("Te esperamos!");
      }, 800);
    } catch (error) {
      console.error("Error al guardar la asistencia: ", error);
    }
  };

  return (
    <div
      className="relative w-screen h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-gray-500"
      style={{
        backgroundImage: `url('/images/fondoflores3.png')`, // Reemplaza con la ruta correcta de tu imagen
      }}
    >
      <h2 className="text-4xl lg:text-6xl font-serif text-white text-center tracking-widest" style={{ textShadow: "4px 4px 8px black" }}>Confirmación de asistencia</h2>

      <div className="mt-8 space-x-4 flex justify-center">
        <button
          onClick={() => handleSelect(true)}
          className="bg-white text-black font-bold px-4 py-2 rounded-full flex items-center gap-2 border hover:bg-gray-100">
          <FaCheck /> Sí voy
        </button>
        <button
          onClick={() => handleSelect(false)}
          className="bg-white text-black font-bold px-4 py-2 rounded-full flex items-center gap-2 border hover:bg-gray-100">
          <FaTimes /> No voy
        </button>
      </div>

      {isGoing === "Asistirá" && (
        <div>
          <Confetti
            numberOfPieces={800}
            recycle={false}
            colors={['#ffffff', '#ff69b4']}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          />
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 flex flex-col">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-sm transition-shadow duration-300"
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: `scale(${inputScale})`,
              }}
              required
            />
            <select
              className="text-black px-4 py-2 border border-gray-300 rounded-full"
              value={dietaryRestriction}
              onChange={(e) => setDietaryRestriction(e.target.value)}
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: `scale(${selectScale})`,
              }}
              required
            >
              <option value="">Selecciona restricción alimenticia</option>
              <option value="sin_tacc">Sin TACC/Celíaco 🚫🍞</option>
              <option value="vegetariano">Vegetariano 🧀</option>
              <option value="vegano">Vegano 🥦</option>
              <option value="ninguna">Ninguna 🍔</option>
            </select>
          </form>
        </div>
      )}

      {isGoing === "No asistirá" && (
        <div className="mt-5 p-5 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-lg font-serif text-black text-center">Que lástima 😢</p>
        </div>
      )}

      {isGoing !== null && (
        <button
          style={{
            transition: "transform 0.3s ease-in-out",
            transform: `scale(${buttonScale})`,
          }}
          onClick={handleSubmit}
          className="w-full md:w-[50vh] text-black font-bold py-2 px-4 mt-6 rounded-full border border-gray-300 bg-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2"
          disabled={isButtonDisabled}
        >
          {confirmationText}
        </button>
      )}
    </div>
  );
}

export default Asistance;
