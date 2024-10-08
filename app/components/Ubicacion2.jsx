"use client";

const Ubicacion2 = () => {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-center text-center">
      {/* Fecha de la boda */}
      <div className="w-full flex flex-col justify-center items-center p-4 mt-8 animate-fadeIn">
        <p className="text-black text-2xl lg:text-3xl font-semibold transition-opacity duration-700 ease-in-out">
          Fecha de la boda:
        </p>
        <p className="text-black text-xl lg:text-2xl uppercase">
          12 de Diciembre, 2024
        </p>
      </div>

      {/* Título de ubicación con ícono */}
      <div className="w-full flex flex-col items-center mt-12 animate-fadeIn">
        <div className="flex items-center transform transition-transform duration-700 ease-out hover:scale-105">
          {/* Ícono de ubicación */}
          <img
            src="/images/icono_location.png" // Ruta del ícono .png
            alt="Ícono de ubicación"
            className="w-20 h-20 mr-2" // Ajusta el tamaño del ícono
          />
          <p className="text-black text-3xl lg:text-4xl font-bold uppercase">
            Ubicación
          </p>
        </div>
      </div>

      {/* Nombre del salón */}
      <div className="w-full flex flex-col justify-center items-center p-4 mt-8 animate-fadeIn">
        <p className="text-black text-3xl lg:text-4xl uppercase font-bold transition-opacity duration-700 ease-in-out">
          LA ENTRADA EVENTOS
        </p>
      </div>

      {/* Información detallada de la ubicación */}
      <div className="w-full flex flex-col justify-center items-center p-4 mt-8 animate-fadeIn">
        <p className="text-black text-xl lg:text-2xl uppercase transform transition-transform duration-700 ease-out hover:scale-105">
          Dirección: <br />
          Roque Saenz Peña 5630 <br />
          Mendoza, Argentina
        </p>
        <p className="text-gray-700 text-lg mt-4 transition-opacity duration-700 ease-in-out">
          El salón de eventos se encuentra en el corazón de Mendoza, ofreciendo
          un lugar perfecto para la celebración.
        </p>
        <a
          href="https://www.google.com/maps/place/Sal%C3%B3n+La+Entrada/@-33.0319381,-68.9473758,15z/data=!4m6!3m5!1s0x967ddfe8ca2ae57d:0x36e83734261b1fc4!8m2!3d-33.0319392!4d-68.9391999!16s%2Fg%2F11rmtmzjlq?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent mt-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
        >
          VER UBICACIÓN EN GOOGLE MAPS
        </a>
      </div>
    </section>
  );
};

export default Ubicacion2;
