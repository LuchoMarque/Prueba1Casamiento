'use client'
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0); // Estado para el porcentaje
  const startDate = '2024-09-01'; // Fecha de inicio
  const endDate = '2024-12-12';   // Fecha de fin

  useEffect(() => {
    const calculatePercentage = () => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const today = new Date();

      // Asegura que la fecha actual no supere la fecha final
      if (today > end) {
        setPercentage(100);
        return;
      }

      // Calcula el número total de días entre la fecha de inicio y la fecha final
      const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      // Calcula el número de días desde la fecha de inicio hasta la fecha actual
      const daysElapsed = Math.ceil((today - start) / (1000 * 60 * 60 * 24));

      // Calcula el porcentaje de días transcurridos
      const newPercentage = (daysElapsed / totalDays) * 100;

      // Actualiza el porcentaje, asegurando que no sea menor que 0
      setPercentage(newPercentage > 0 ? newPercentage : 0);
    };

    // Calcula el porcentaje cuando el componente se monta
    calculatePercentage();

    // Si quieres actualizar el porcentaje dinámicamente cada día, puedes usar un intervalo
    const interval = setInterval(calculatePercentage, 1000 * 60 * 60 * 24); // Se actualiza cada día

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [startDate, endDate]);

  const containerStyles = 'w-full h-6 bg-gray-200 rounded-xl relative ml-4';
  const fillerStyles = `h-full bg-black rounded-xl transition-width duration-300 ease-out`;
  const imageStyles = `absolute top-0 transform -translate-y-1/2 h-20`; // Aumenta el tamaño de la imagen movible
  const endImageStyles = `h-20 ml-4`; // Aumenta el tamaño de la imagen final

  return (
    <div className="relative flex items-center mt-10 lg:mt-1">
      {percentage > 98 ? (
        // Mostrar la imagen cuando el porcentaje es mayor al 98%
        <img
          src="/images/Barra/juntosbarra.png"
          alt="Final"
          className="h-64 mx-auto"// Puedes ajustar el tamaño aquí si lo deseas
        />
      ) : (
        <>
          <div className={containerStyles}>
            <div
              className={fillerStyles}
              style={{ width: `${percentage}%` }}
            ></div>
            <img
              src="/images/Barra/noviabarra.png" // Reemplaza con la ruta de la imagen
              alt="Moving"
              className={imageStyles}
              style={{ left: `${percentage}%` }}
            />
          </div>
          <img
            src="/images/Barra/noviobarra.png" // Reemplaza con la ruta de la imagen final
            alt="End"
            className={endImageStyles}
          />
        </>
      )}
    </div>
  );
};

export default ProgressBar;