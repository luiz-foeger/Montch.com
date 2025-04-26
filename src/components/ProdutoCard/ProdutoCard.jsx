import estilos from './ProdutoCard.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function ProdutoCard({ imagem, nome, preco }) {
    return (
        <div className={estilos.card}>
            <img src={imagem} alt={nome} className={estilos.imagem} />
            <h2 className={estilos.nome}>{nome}</h2>
            <p className={estilos.preco}>R$ {preco}</p>

            <a href={`https://api.whatsapp.com/send?phone=5527996180495&text=Oi, vim pelo site e gostaria de saber mais sobre o produto ${nome}`} target="_blank" rel="noopener noreferrer" className={estilos.botaoContato}>
                Saiba mais <FaWhatsapp className={estilos.icone} />
            </a>


        </div>
    );
}

export default ProdutoCard;

