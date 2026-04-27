import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/acerca">Acerca</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/tablas">Tablas</Link>
                </li>
                <li>
                    <Link to="/usuarios">Usuarios</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;