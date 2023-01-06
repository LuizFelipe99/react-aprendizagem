import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './compoennts/Home';
import Sobre  from './compoennts/Sobre';
import Help  from './compoennts/Help';
import Fase_Grupo  from './compoennts/Fase-Grupo';

function Rotas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/fase-grupo" element={<Fase_Grupo/>} />
      </Routes>
    </div>
  );
}

export default Rotas;
