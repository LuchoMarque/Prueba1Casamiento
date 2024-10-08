"use client"
import React from 'react';
import { motion } from 'framer-motion';

const horarios = [
  {
    title: 'RECEPCIÓN',
    time: '18:00 hrs',
    image: '/images/Schedule/recepcion.png', //ICONOS
  },
  {
    title: 'CEREMONIA',
    time: '19:00 hrs',
    image: '/images/Schedule/ceremonia1.png', //ICONOS
  },
  {
    title: 'CENA',
    time: '20:00 hrs',
    image: '/images/Schedule/cena.png', //ICONOS
  },
  {
    title: 'BAILE',
    time: '00:00 hrs',
    image: '/images/Schedule/baile.png', //ICONOS
  },
];

const Schedule = () => {
  return (
    <section className="min-h-screen lg:h-[70vh] flex flex-col justify-center items-center bg-gray-500 lg:mt-12">
      <h2 className=" text-6xl font-serif text-black mb-12">HORARIOS</h2>
      <div className="w-full max-w-xl">
        {horarios.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row w-full max-w-4xl justify-between items-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-12 w-12 object-contain mr-4"
              />
              <p className="text-2xl font-serif text-black">{item.title}</p>
            </div>
              {/* Línea divisoria */}
              <div className="w-px h-16 md:absolute lg:right-44 lg:h-px lg:w-36 bg-black my-2 lg:my-0 flex-shrink-0"></div>
              
            <p className="text-2xl font-serif text-black">{item.time}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
