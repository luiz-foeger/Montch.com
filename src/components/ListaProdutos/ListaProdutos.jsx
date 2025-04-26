import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

function ListaProdutos() {
    const produtos = [
        {
            id: 1,
            imagem: '/assets/images/produtos/1.png',
            nome: 'Vanguard',
            preco: '44,90',
            descricao: 'Desafie o comum, seja extraordinário!',
        },
        {
            id: 2,
            imagem: '/assets/images/produtos/6.png',
            nome: 'Essência',
            preco: '44,90',
            descricao: 'A verdadeira força está no movimento!',
        },
        {
            id: 3,
            imagem: '/assets/images/produtos/2.png',
            nome: 'Impulso',
            preco: '179,90',
            descricao: 'Energia que veste, potência que impulsiona!',
        },
        {
            id: 3,
            imagem: '/assets/images/produtos/3.png',
            nome: 'Força Dupla',
            preco: '139,90',
            descricao: 'Dois lados e um só propósito: potência e determinação em cada movimento!',
        },
        {
            id: 4,
            imagem: '/assets/images/produtos/4.png',
            nome: 'Vibe',
            preco: '69,90',
            descricao: 'Acelere seus limites, movimente-se com intensidade!',
        },
        {
            id: 5,
            imagem: '/assets/images/produtos/5.png',
            nome: 'Fogo&Vento',
            preco: '139,90',
            descricao: 'Coragem que queima, leveza que voa!',
        },
    ];

    return (
        <div className={estilos.lista}>
            {produtos.map(produto => (
                <ProdutoCard
                    id={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                />
            ))}
        </div>
    );
}

export default ListaProdutos;
