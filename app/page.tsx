

import Asistance from "./components/Asistance";
import HomeFlip from "./components/HomeFlip";
import ShowData from "./components/ShowData";
import ContadorTiempo from "./components/ContadorTiempo";
import Gift from "./components/Gift";
import Ubicacion from "./components/Ubicacion";
import Ubicacion2 from "./components/Ubicacion2";
import Vestimenta from "./components/Vestimenta";
import Music from "./components/Music";
import ProgressBar from "./components/BarraProgreso";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <div className=" overflow-x-hidden font-script">
      
      <HomeFlip />
      <Ubicacion2 />
      <Schedule></Schedule>
      <ContadorTiempo /> 
      <ProgressBar />
      <Gift />
      <Vestimenta />
      <Music></Music>
      <Asistance />
      <ShowData />


    </div>
  );
}
