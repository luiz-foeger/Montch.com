import { Link } from 'react-router-dom';
import estilos from './Buttons.module.css';

const Buttons = () => {
    return (
        <div className={estilos.sectionButtons}>
            <ul className={estilos.buttons}>
                <li><Link to="/conjuntos">Conjuntos</Link></li>
                <li><Link to="/shorts">Shorts</Link></li>
                <li><Link to="/camisetas">Camisetas</Link></li>
                <li><Link to="/bermudas">Bermudas</Link></li>
            </ul>
        </div>
    )
}

export default Buttons;