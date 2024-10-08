"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";

const HomeFlip = () => {
    const [isFading, setIsFading] = useState(false); // Controla la transición de desvanecimiento
    const [showStory, setShowStory] = useState(false); // Controla si se muestra la historia o la imagen original

    const handleClick = () => {
        setIsFading(true); // Inicia el proceso de desvanecimiento
    };

    // Controlar el cambio entre imagen y la historia con la transición
    useEffect(() => {
        if (isFading) {
            const timeout = setTimeout(() => {
                setShowStory(prevShowStory => !prevShowStory); // Alterna entre la imagen y la historia
                setIsFading(false); // Reinicia el estado de desvanecimiento
            }, 1000); // Tiempo de la transición en milisegundos
            return () => clearTimeout(timeout); // Limpiar el timeout cuando el componente se desmonte
        }
    }, [isFading]);

    return (
        <div className="mb-10 relative w-screen h-screen mb-0">
            {!showStory ? (
                // Contenido inicial con la imagen de portada
                <div
                    className={`relative w-screen h-screen transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'
                        }`} // Transición suave de opacidad
                    onClick={handleClick} // Al hacer clic, inicia la transición
                >
                    <Image
                        src="/images/fotosMiliSanti/foto6.jpg" /////////ACA SE CAMBIA LA FOTOOOOOOOOO
                        alt="Mili & Santi"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="object-cover w-full h-full cursor-pointer brightness-175"
                    />

                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-5xl font-serif tracking-wide">Mili & Santi</h1>
                        <p className="text-xl mt-4">Click para ver nuestra historia</p>
                    </div>
                </div>
            ) : (
                // Contenido con la historia de la pareja
                <div
                    className={`relative w-screen h-screen transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'
                        }`} // Transición suave de opacidad
                    onClick={handleClick} // Al hacer clic, vuelve a la imagen original
                >
                    <Image
                        src="/images/fotosMiliSanti/foto1.jpg" /////////ACA SE CAMBIA LA FOTOOOOOOOOO
                        alt="Nuestra Historia"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="object-cover w-full h-full cursor-pointer"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="absolute top-1/4 lg:top-32 left-1/2 transform -translate-x-1/2 text-white text-center px-4"> {/* Ajustado para móviles */}
                        <h2 className="text-3xl lg:text-4xl font-serif">Nuestra Historia</h2>
                        <p className="text-lg lg:text-xl mt-4">
                            Todo empezó con una casualidad: un encuentro inesperado en una librería. Desde ese día, Mili y Santi supieron que sus vidas estarían unidas para siempre.
                        </p>
                        {/* Añade más contenido sobre la historia aquí */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeFlip;
