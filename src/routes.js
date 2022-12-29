import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './compoennts/Home';
import Sobre  from './compoennts/Sobre';
import Elvis from './compoennts/Elvis';

function Rotas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/elvis" element={<Elvis/>} />
      </Routes>
    </div>
  );
}

export default Rotas;
