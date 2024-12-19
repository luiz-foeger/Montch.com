import estilos from './Header.module.css';
import logo from '../../img/icon/logo.png'

function Header() {
    return (
        <header className={estilos.header}>
            <div className={estilos.logo}>
                <img src={logo} alt="Logotipo StreetWear" />
        </div>
           <nav  className={estilos.itensHeader}>
            <ul>
                <li>
                    <a href="index.html"className={estilos.ankorResponsive} className={estilos.linkAtivo}>LOJA</a>
                </li>
                <li>
                    <a href="#" id="opcao-dropdown">PRODUTOS<i style="color: #dddddd; margin-left: 5px;"
                            class="fa-solid fa-angle-down"></i></a></i>
                    <ul class="dropdown-produtos">
                        <li><a href="html/acessorios.html">ACESSÓRIOS</a></li>
                        <li><a href="html/produtos.html">VESTUÁRIO</a></li>
                        <li><a href="html/sneakers.html">TÊNIS</a></li>
                        <li><a href="html/decks.html">SKATE</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="ankor-responsive">SOBRE</a>
                </li>
            </ul>
        </nav>
</header >
    );
}

export default Header;


    {/* <nav class="itensHeader">
    <ul>
        <li>
            <a href="index.html" class="ankor-responsive link-ativo">LOJA</a>
        </li>
        <li>
            <a href="#" id="opcao-dropdown">PRODUTOS<i style="color: #dddddd; margin-left: 5px;"
                    class="fa-solid fa-angle-down"></i></a></i>
            <ul class="dropdown-produtos">
                <Link to="/acessorios">ACESSÓRIOS</Link>
                <Link to="/camisetas">VESTUÁRIO</Link>
                <Link to="/calcados">CALÇADOS</Link>
                <Link to="/skate">SKATEBOARD</Link>
            </ul>
        </li>
        <li>
            <a href="#" class="ankor-responsive">SOBRE</a>
        </li>
    </ul>
</nav > */}