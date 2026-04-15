import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
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
            </ul>
        </nav>
    );
}

export default Navbar;