'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

function ContadorTiempo() {
  const targetDate = new Date("2024-12-12T00:00:00").getTime(); // ACA SE CAMBIA LA FECHA
  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [textColor, setTextColor] = useState("text-black"); // Estado para el color del texto

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Cambio de color basado en el tiempo restante
        if (days < 7) {
          setTextColor("text-yellow-600"); // Oro
        } else if (days < 30) {
          setTextColor("text-yellow-400"); // Bronce
        } else if (days <= 30) {
          setTextColor("text-gray-400"); // Plateado
        } else {
          setTextColor("text-white"); // Default
        }

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    }

    setIsMounted(true);
    if (isMounted) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isMounted, targetDate]);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-around h-screen w-screen relative" id="downtime">
      
      {/* Contador */}
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col items-center bg-opacity-10 z-20">
        <div className={`text-4xl font-bold font-script items-center justify-arund flex flex-col ${textColor} text-shadow-white`}>
        <p className="text-5xl mb-2 animate-pulse" style={{ textShadow: "2px 2px 4px black" }}>¡FALTAN!</p>
        </div>
        <div className="flex flex-col lg:flex-row w-screen justify-around text-center uppercase" style={{ textShadow: "2px 2px 4px black" }}>
          <div className={`text-6xl ${textColor} flex flex-col font-script text-shadow-white`}>
            <p>{timeLeft.days}</p>
            <p className="text-xl mt-2 font-script text-shadow-white" style={{ textShadow: "2px 2px 4px black" }}>Días</p>
          </div>
          <div className={`text-6xl ${textColor} flex flex-col font-script text-shadow-white`}>
            <p>{timeLeft.hours}</p>
            <p className="text-xl mt-2 font-script text-shadow-white" style={{ textShadow: "2px 2px 4px black" }}>Horas</p>
          </div>
          <div className={`text-6xl ${textColor} flex flex-col font-script text-shadow-white`}>
            <p>{timeLeft.minutes}</p>
            <p className="text-xl mt-2 font-script text-shadow-white" style={{ textShadow: "2px 2px 4px black" }}>Min</p>
          </div>
          <div className={`text-6xl ${textColor} flex flex-col font-script text-shadow-white`}>
            <p>{timeLeft.seconds}</p>
            <p className="text-xl mt-2 font-script text-shadow-white" style={{ textShadow: "2px 2px 4px black" }}>Seg</p>
          </div>
        </div>
      </section>

      {/* Imágenes */}
      <section className="flex w-full lg:h-2/3 h-full flex-col lg:flex-row lg:gap-8 relative z-10 mt-16">
        <div className="lg:w-1/3 w-full h-full lg:ml-1 relative">
          <Image
            src="/images/CountDown/foto3.jpeg"
            alt="Descripción de la imagen 1"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg"
          />
        </div>
        <div className="lg:w-1/3 w-full h-full lg:ml-5 relative ">
          <Image
            src="/images/CountDown/foto4.jpg"
            alt="Descripción de la imagen 2"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg"
          />
        </div>
        <div className="lg:w-1/3 w-full h-full lg:mr-5 relative">
          <Image
            src="/images/CountDown/foto7.jpg"
            alt="Descripción de la imagen 3"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg"
          />
        </div>
      </section>
      
    </section>
  );
}

export default ContadorTiempo;
