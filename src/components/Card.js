import React from 'react';


export const Card = ({key, addProduto, produto}) => {


    return (

        <div key={key}>
            <img src={produto.img} alt='imagemdoproduto' />
            <h2>{produto.nome}</h2>
            <span>{produto.valor}</span>
            <button onClick={() => addProduto(produto)}>Adicionar ao carrinho</button>

        </div>

    )

}



