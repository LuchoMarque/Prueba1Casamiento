"use client";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "./../../firebaseConfig"; // Asegúrate de que este sea el correcto


const ShowData = () => {
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
   
    const fetchData = async () => {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      
      const songsCollection = collection(db, "songs");
      const songsSnapshot = await getDocs(songsCollection);
      const songsList = songsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //setSongs(songsList);
      const uniqueSongs = [];
      const songSet = new Set();

      songsList.forEach((song) => {
       // Normalizar y eliminar espacios en blanco
       const name = song.name.trim().toLowerCase();
       const artist = song.artist.trim().toLowerCase();
       const key = `${name}-${artist}`; // Crear una clave única

       if (!songSet.has(key)) {
         songSet.add(key); // Agregar la clave al conjunto
         uniqueSongs.push(song); // Agregar la canción a la lista única
       }
      });

      setSongs(uniqueSongs);
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5">Lista de Confirmaciones de Asistencia</h1>
      {users.length > 0 ? (
        <table className="table-auto w-full max-w-3xl border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 w-1/3">#</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">Nombre</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">Restricción Alimenticia</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.dieta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay confirmaciones aún.</p>
    )}
    <h1 className="text-2xl font-bold mb-5">Lista de canciones recomendadas</h1>
      {songs.length > 0 ? (
        <table className="table-auto w-full max-w-3xl border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 w-1/3">#</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">Nombre</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">Artista</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{song.name}</td>
              <td className="border border-gray-300 px-4 py-2">{song.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay recomendaciones aún.</p>
    )}
    </div>
  );
};

export default ShowData;