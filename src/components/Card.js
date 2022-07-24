import React from 'react';
import { CardStyle } from '../style';


export const Card = ({ key, addProduto, produto }) => {


    return (

        <CardStyle key={key}>
            <h3>{produto.nome}</h3>
            <p>{produto.desc}</p>
            <img src={produto.img} alt='imagemdoproduto' />
            <div>
                <div>
                    <p className='crossed'>R$ {parseFloat((produto.valor) + ((produto.valor) * 0.15)).toFixed(2)}</p>
                    <span>10x R$ {parseFloat((produto.valor) / 10).toFixed(2)}</span>
                    <p>R$ {parseFloat((produto.valor) - ((produto.valor) * 0.05)).toFixed(2)} à vista!</p>
                </div>
                <button onClick={() => addProduto(produto)}>Adicionar ao carrinho</button>
            </div>
        </CardStyle>

    )

}



