'use client'
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebaseConfig";

const Music = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [exploding, setExploding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setExploding(true);
    setTimeout(() => {
      setSubmitted(true);
      setExploding(false);
    }, 600);

    try {
      await addDoc(collection(db, 'songs'), {
        name: song,
        artist: artist,
      });
    } catch (error) {
      console.error("Error al guardar la canción: ", error);
    }
    setSong('');
    setArtist('');
  };

  return (
    <div id="Songs" className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-6 mt-10">
      <h2 className="lg:mt-12 text-6xl font-serif text-black text-center tracking-widest">Música</h2>
      {/* <p className="lg:mt-8 text-lg font-serif text-black text-center max-w-3xl leading-relaxed">
        Nos encantaría que nos compartas esas canciones especiales que te gustaría escuchar durante la celebración. ¡Hagamos que la música refleje nuestros momentos y los tuyos!
      </p> */}
      <p className="lg:mt-4 text-lg font-serif text-black text-center max-w-3xl leading-relaxed">
         Comparte que canciones no pueden faltar en esta noche tan especial
      </p>

      <h2 className="text-2xl font-semibold text-black mb-4 mt-8">Recomienda una Canción</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="song" className="block text-black font-semibold mb-2">Canción:</label>
          <input
            type="text"
            id="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-sm transition-shadow duration-300"
            placeholder="Introduce una canción"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="artist" className="block text-black font-semibold mb-2">Artista:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-sm transition-shadow duration-300"
            placeholder="Introduce un artista"
            required
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className={`w-[50vh] text-black font-bold py-2 px-4 mt-6 rounded-full border border-gray-300 bg-white transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 flex items-center justify-center
          ${exploding ? 'opacity-0' : submitted ? 'animate-fadeIn' : ''}`}
          >
            {/* Ícono a la izquierda */}
            <img src="/images/musica2.png"
              alt="icono"
              className="w-5 h-5 mr-2"
            />
            {/* Texto del botón */}
            {submitted ? 'Envía otra sugerencia' : 'Enviar'}
            {/* Ícono a la derecha */}
            <img src="/images/musica1.png"
              alt="icono"
              className="w-5 h-5 ml-2"
            />
          </button>
        </div>

      </form>
    </div>
  );
};

export default Music;
