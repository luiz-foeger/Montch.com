import estilos from './ListaProdutos.module.css';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

function ListaProdutos() {
    const produtos = [
        { id: 1, imagem: '/assets/images/produtos/1.png', nome: 'Vanguard', preco: '44,90' },
        { id: 2, imagem: '/assets/images/produtos/2.png', nome: 'Impulso', preco: '179,90' },
        { id: 3, imagem: '/assets/images/produtos/3.png', nome: 'Força Dupla', preco: '139,90' },
        { id: 3, imagem: '/assets/images/produtos/4.png', nome: 'Vibe', preco: '69,90' },
        { id: 4, imagem: '/assets/images/produtos/5.png', nome: 'Fogo&Vento', preco: '139,90' },
        { id: 4, imagem: '/assets/images/produtos/6.png', nome: 'Essência', preco: '44,90' },
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
