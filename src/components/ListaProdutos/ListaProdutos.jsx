import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

function ListaProdutos() {
    const produtos = [
        { id: 1, imagem: '/assets/images/produtos/1.png', nome: 'Conjunto Verão', preco: '119,90' },
        { id: 2, imagem: '/assets/images/produtos/2.png', nome: 'Shorts Casual', preco: '79,90' },
        { id: 3, imagem: '/assets/images/produtos/3.png', nome: 'Camiseta Básica', preco: '49,90' },
        { id: 3, imagem: '/assets/images/produtos/4.png', nome: 'Camiseta Básica', preco: '49,90' },
        { id: 4, imagem: '/assets/images/produtos/5.png', nome: 'Bermuda Esportiva', preco: '89,90' },
        { id: 4, imagem: '/assets/images/produtos/6.png', nome: 'Bermuda Esportiva', preco: '89,90' },
    ];

    return (
        <div className={estilos.lista}>
            {produtos.map(produto => (
                <ProdutoCard
                    key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                />
            ))}
        </div>
    );
}

export default ListaProdutos;
