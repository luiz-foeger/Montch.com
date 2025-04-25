import estilos from './ProdutoCard.module.css';

function ProdutoCard({ imagem, nome, preco }) {
    return (
        <div className={estilos.card}>
            <img src={imagem} alt={nome} className={estilos.imagem} />
            <h2 className={estilos.nome}>{nome}</h2>
            <p className={estilos.preco}>R$ {preco}</p>
        </div>
    );
}

export default ProdutoCard;

