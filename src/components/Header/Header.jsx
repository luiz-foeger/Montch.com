import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from "react-icons/ri";

import estilos from './Header.module.css';

function Header() {
    return (
        <header className={estilos.header}>
            <img className={estilos.logo} src="/assets/images/logos/logo.png" alt="Logo" />
            <nav className={estilos.nav}>
                <h3>
                    <Link to="/">Início</Link>

                    <div className={estilos.opcaoDropdown}>
                        <Link to="#">Produtos <RiArrowDownSLine /></Link>
                        <ul className={estilos.dropdownProdutos}>
                            <li><Link to="/conjuntos" style={{ marginTop: "20px" }}>Conjuntos</Link></li>
                            <li><Link to="/shorts">Shorts</Link></li>
                            <li><Link to="/camisetas">Camisetas</Link></li>
                            <li><Link to="/bermudas">Bermudas</Link></li>
                        </ul>
                    </div>

                    <Link to="/sobre-nos">Sobre nós</Link>
                </h3>
            </nav>
            <img className={estilos.logo} src="/assets/images/logos/logo.png" alt="Logo" />
        </header>
    );
}


export default Header;