"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ubicacion = () => {
  // Configuración para el carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Velocidad de desplazamiento automático
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white">
      {/* Nombre del salón */}
      <div className="w-full flex flex-col justify-center items-center p-4 mt-16">
        <p className="text-black text-3xl lg:text-4xl uppercase font-bold">
          LA ENTRADA EVENTOS
        </p>
      </div>

      {/* Carrusel de imágenes */}
      <div className="w-3/4 p-4 mt-8">
        <Slider {...settings}>
          <div>
            <img
              src="/images/Ubicacion/laentrada1.jpg"
              alt="Imagen 1"
              className="w-full h-[80vh] object-cover" // Hace que las imágenes del carrusel ocupen gran parte de la pantalla
            />
          </div>
          <div>
            <img
              src="/images/Ubicacion/laentrada2.jpg"
              alt="Imagen 2"
              className="w-full h-[80vh] object-cover"
            />
          </div>
          <div>
            <img
              src="/images/Ubicacion/laentrada4.jpg"
              alt="Imagen 3"
              className="w-full h-[80vh] object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Información de la ubicación y botón */}
      <div className="w-full flex flex-col justify-center items-center p-4 mt-8">
        <p className="text-black text-xl lg:text-2xl uppercase">
          Roque Saenz Peña 5630 <br /> Mendoza
        </p>
        <a
          href="https://www.google.com/maps/place/Sal%C3%B3n+La+Entrada/@-33.0319381,-68.9473758,15z/data=!4m6!3m5!1s0x967ddfe8ca2ae57d:0x36e83734261b1fc4!8m2!3d-33.0319392!4d-68.9391999!16s%2Fg%2F11rmtmzjlq?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent mt-4"
        >
          VER UBICACIÓN
        </a>
      </div>
    </section>
  );
};

export default Ubicacion;
