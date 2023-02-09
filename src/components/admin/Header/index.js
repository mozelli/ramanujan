import { Link } from 'react-router-dom';
import "./styles.css";

const Header = () => {
  return (
    <nav>
    <div className="nav-wrapper grey darken-3">
      <Link to={"/dashboard"} className="brand-logo">Mozelli Blog - Dashboard</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Configurações</a></li>
        <li><a href="#">Usuários</a></li>
        <li><a href="#">Sair</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;