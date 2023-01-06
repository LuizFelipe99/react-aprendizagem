import React from 'react';
// import Img from 'react-image'
import Napoli from '../../escudos/napoli-logo.png';
import Liverpool from '../../escudos/liverpool-logo.png'
import Ajax from '../../escudos/ajax-logo.png'
import Rangers from '../../escudos/rangers-logo.png'
import './Grupo.css';

const Fase_Grupo = () =>{
  return (
    <div className='container'>
      <h1>Fase de Grupos CHAMPIONS LEAGUE</h1>
      <p className='group' >Grupo A</p>
      <table className='customers' >
        <tr>
          <th>Classificação</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>%</th>
        </tr>
        <tr>
          <td> <img className='escudos' src={Napoli} alt="Napoli" /> Napoli</td>
          <td>15</td>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>20</td>
          <td>6</td>
          <td>14</td>
          <td>83</td>
        </tr>
        <tr>
          <td> <img className='escudos' src={Liverpool} alt="Liverpool" /> Liverpool</td>
          <td>15</td>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>17</td>
          <td>6</td>
          <td>11</td>
          <td>83</td>
        </tr>
        <tr>
          <td> <img className='escudos' src={Ajax} alt="Ajax" /> Ajax</td>
          <td>6</td>
          <td>6</td>
          <td>2</td>
          <td>0</td>
          <td>5</td>
          <td>11</td>
          <td>16</td>
          <td>-5</td>
          <td>33</td>
        </tr>
        <tr>
          <td> <img className='escudos' src={Rangers} alt="Ajax" /> Rangers</td>
          <td>0</td>
          <td>6</td>
          <td>0</td>
          <td>0</td>
          <td>6</td>
          <td>2</td>
          <td>22</td>
          <td>-20</td>
          <td>0</td>
        </tr>
      </table>
      

      <p className='group' >Grupo B</p>
      <table className='customers' >
        <tr>
          <th>Classificação</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>%</th>
        </tr>
        <tr>
          <td>Porto</td>
          <td>12</td>
          <td>6</td>
          <td>4</td>
          <td>0</td>
          <td>2</td>
          <td>12</td>
          <td>7</td>
          <td>5</td>
          <td>66</td>
        </tr>
        <tr>
          <td>Club Brugge</td>
          <td>11</td>
          <td>6</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>7</td>
          <td>4</td>
          <td>3</td>
          <td>61</td>
        </tr>
        <tr>
          <td>Bayer Leverkusen</td>
          <td>5</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>8</td>
          <td>-4</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Atlético de Madrid</td>
          <td>5</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>5</td>
          <td>9</td>
          <td>-4</td>
          <td>27</td>
        </tr>
      </table>
    </div>
  );
}

export default Fase_Grupo;