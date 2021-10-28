import { Link } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
  return (
      <nav>
        <li>
            <ul>
                <Link to='/'>Hello</Link>
            </ul>
            <ul>
                <Link to='hola'>Hola</Link>
            </ul>
            <ul>
                <Link to='hei'>Hei</Link>
            </ul>
        </li>
      </nav>
  );
};

export default Navigation;
