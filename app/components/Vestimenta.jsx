"use client";
import { useState } from "react";

const Vestimenta = () => {
  const [colores, setColores] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [animate, setAnimate] = useState(false); // Estado para manejar la animación
  // Colores permitidos para hombre y mujer
  const coloresHombre = ["#000", "#555", "#777"]; // Colores para hombre
  const coloresMujer = ["#FFB6C1", "#FFF0F5", "#FAEBD7"]; // Colores para mujer

  // Función para manejar la animación y cambio de colores
  const mostrarColoresHombre = () => {
    setColores([]); // Para forzar el re-render y activar la animación
    setTimeout(() => {
      setColores(coloresHombre); // Mostrar los colores de hombre
      setMensaje(
        "Estos son los colores que NO están permitidos para la boda"
      ); // Actualizar mensaje
      setAnimate(true); // Habilitar la animación
    }, 10);
  };

  const mostrarColoresMujer = () => {
    setColores([]); // Limpiar antes de mostrar nuevos colores
    setTimeout(() => {
      setColores(coloresMujer); // Mostrar los colores de mujer
      setMensaje(
        "Estos son los colores que NO están permitidos para la boda"
      ); // Actualizar mensaje
      setAnimate(true); // Habilitar la animación
    }, 10);
  };

  return (
    <div className="flex flex-col items-center h-fit mb-20 mt-20 ">
      <h1 className="text-2xl mb-4">CODIGO DE VESTIMENTA</h1>
      <div className="flex space-x-4">
        {/* Imagen de hombre */}
        <div onClick={mostrarColoresHombre}>
          <img
            src="images/Vestimenta/hombre.png"
            alt="Hombre"
            className="w-32 h-50 object-cover cursor-pointer"
          />
          <p className="text-center mt-2">Hombre</p>
        </div>

        {/* Imagen de mujer */}
        <div onClick={mostrarColoresMujer}>
          <img
            src="images/Vestimenta/mujer.png"
            alt="Mujer"
            className="w-32 h-50 object-cover cursor-pointer"
          />
          <p className="text-center mt-2">Mujer</p>
        </div>
      </div>

      {/* Mensaje aclaratorio */}
      {mensaje && (
        <p className="text-red-500 mt-4 text-lg font-semibold">{mensaje}</p>
      )}

      {/* Lista de colores */}
      <div className="mt-8 flex space-x-4">
        {colores.map((color, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-full border-2 border-black ${
              animate ? "transition-transform transform scale-0 animate-grow" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default Vestimenta;
