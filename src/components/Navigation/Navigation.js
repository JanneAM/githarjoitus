import { BrowserRouter as Router, Link } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Navigation;
