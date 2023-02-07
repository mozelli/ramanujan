import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper orange accent-4">
            <Link to="/" className="brand-logo">Mozelli Marketing</Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Página Inicial</Link></li>
              <li><Link to="/">Categorias</Link></li>
              <li><Link to="/">Contato</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/">Categorias</Link></li>
        <li><Link to="/">Contato</Link></li>
      </ul>
    </header>
  )
}

export default Header;