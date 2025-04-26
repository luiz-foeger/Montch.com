import { useState } from 'react';
import estilos from './ProdutoCard.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function ProdutoCard({ imagem, nome, preco, descricao }) {
    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <>
            <div className={estilos.card} onClick={() => setMostrarModal(true)}>
                <img src={imagem} alt={nome} className={estilos.imagem} />
                <h2 className={estilos.nome}>{nome}</h2>
                <p className={estilos.preco}>R$ {preco}</p>
                <a href={`https://api.whatsapp.com/send?phone=5527996180495&text=Oi, vim pelo site e gostaria de saber mais sobre o produto ${nome}! 🚀`} target="_blank" rel="noopener noreferrer" className={estilos.botaoContato}>
                    Saiba mais <FaWhatsapp className={estilos.icone} />
                </a>
            </div>

            {mostrarModal && (
                <div className={estilos.modalOverlay} onClick={() => setMostrarModal(false)}>
                    <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={imagem} alt={nome} className={estilos.modalImagem} />
                        <div>
                            <h2>{nome}</h2>
                            <p>{descricao}</p>
                            <p className={estilos.preco}>R$ {preco}</p>
                            <p>#VaiComTudo</p>
                            <button onClick={() => setMostrarModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProdutoCard;
