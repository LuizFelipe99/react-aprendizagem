import React from 'react';
import './Grupo.css';

const Fase_Grupo = () =>{
  return (
    <div className='container'>
      <h1>Fase de Grupos</h1>
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
          <td>Napoli</td>
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
          <td>Liverpool</td>
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
          <td>Ajax</td>
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
          <td>Rangers</td>
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