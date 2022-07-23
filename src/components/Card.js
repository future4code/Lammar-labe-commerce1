import React from 'react';
import { CardStyle } from '../style';


export const Card = ({key, addProduto, produto}) => {


    return (

        <CardStyle key={key}>
            <img src={produto.img} alt='imagemdoproduto' />
            <h2>{produto.nome}</h2>
            <span>R$ {produto.valor},00</span>
            <button onClick={() => addProduto(produto)}>Adicionar ao carrinho</button>

        </CardStyle>

    )

}



