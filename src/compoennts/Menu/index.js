import './Menu.css';
import Rotas from '../../routes';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>   
      <nav>
        <ul>
          <li  className="active">
            <Link to="/">Pagina inicial</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
      <Rotas/>
    </div>
  );
}

export default Menu;
