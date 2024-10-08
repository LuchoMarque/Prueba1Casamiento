"use client"
import React, { useState, useEffect } from "react";

const Gift = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCVU, setShowCVU] = useState(false);
  const [buttonText, setButtonText] = useState("Copiar CBU");
  const [scale, setScale] = useState(0); // Estado para controlar la escala
  const [opacity, setOpacity] = useState(1);

  const CBU = "0720460388000035732754"; //ACA SE CAMBIA EL CBU

  const handleCopy = () => {
    navigator.clipboard.writeText(CBU);
    setButtonText("Copiado");
  };

  const handleClick = () => {
    setIsPlaying(true); // Inicia la reproducción del gif
    setShowCVU(false); // Asegúrate de ocultar el CVU al hacer clic
    setScale(0); // Reinicia la escala

    setTimeout(() => {
      setShowCVU(true); // Muestra el CVU después de que el gif se haya reproducido
      setScale(0);

      setTimeout(() => {
        setScale(1); // Escala a 100

        // No es necesario más tiempo aquí, puedes añadir otras lógicas si quieres
      }, 20); // Duración de la animación de 50 a 100
      setIsPlaying(false); // Detiene la reproducción del gif
    }, 4750); // Ajusta según la duración de tu gif
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        const interval = setInterval(() => {
          setOpacity((prevOpacity) => {
            if (prevOpacity <= 0) {
              clearInterval(interval);
              return 0;
            }
            return prevOpacity - 0.01;
          });
        }, 10);
      }, 3500); // Start decreasing opacity after 4.5 seconds
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <div id="Gift" className="flex flex-col items-center justify-center h-screen mt-10"
    style={{
      
      backgroundImage: `url('/images/fondoflores2.png')`, // Reemplaza con la ruta correcta de tu imagen
    
      backgroundRepeat: "no-repeat", // Evita la repetición
 
    }}
    >
      
      {/* Texto superior  */}
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Mesa de Regalos</h1>
      <div className="text-center text-lg lg:text-2xl text-gray-800 ">
        Solo nos importa tu presencia <br />pero si quieres hacernos un regalo solo haz click aqui
        <span className="ml-3 inline-block w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-gray-800 animate-bounce"></span>
      </div>

      {/* Contenedor del gif o CVU */}
      <div className="relative w-[350px] h-[350px] ">
        {!showCVU && isPlaying ? (
          <img
          onClick={handleClick}
          src="images/Gift/regalooo_sinfondo.gif"
          alt="Gift Animation"
          className="w-full h-full object-cover"
          style={{
            opacity,
            filter: "hue-rotate(300deg) ",
          }}
        />
        ) : !showCVU ? (
          <img
            onClick={handleClick}
            src="images/Gift/regalooo_sinfondo.png"
            alt="Static Gift"
            className="w-full h-full object-cover cursor-pointer"
            style={{
              opacity,
              filter: "hue-rotate(300deg) ",
            }}
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gray-00 text-center text-2xl font-bold text-gray-700 rounded-lg p-2 transition-transform duration-700`}
            style={{ transform: `scale(${scale})` }}>
            <div className="text-black flex flex-col ml-5 text-sm lg:text-base">
              <p>CBU: {CBU} </p>
              <p>ALIAS: tute.mp</p>
              <p>TITULAR: Zarandon Matias Joaquin</p>
              <p>BANCO: Galicia</p>
              <div className="tooltip">
                <button
                  onClick={handleCopy}
                  className={`text-black bg-transparent uppercase hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent mt-4 transition-all duration-300`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gift;