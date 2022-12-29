import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './compoennts/Home';
import Sobre  from './compoennts/Sobre';
import Help  from './compoennts/Help';

function Rotas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </div>
  );
}

export default Rotas;
