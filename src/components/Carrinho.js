import React, { useState } from 'react';
import { ListaCarrinho, ItemCarrinho } from '../style';


export const Carrinho = ({ arrayCarrinho, deletarProduto, valorTotal }) => {




    // Rezaderizar itens do carrinho

    const itensCarrinho = arrayCarrinho.map((elemento) => {
    

        

        return (
            <ItemCarrinho key={elemento.id}>
                <p>{elemento.nome}</p>
                <p>{elemento.qtd}x{(elemento.valor)}</p>
                <button onClick={() => deletarProduto(elemento)}>Remover</button>
            </ItemCarrinho>
        )
    })


    return (

        <ListaCarrinho>
            <h2>Carrinho</h2>
            <div>{arrayCarrinho.length === 0 && <p>O carrinho está vazio.</p>}</div>
            {itensCarrinho}
            {arrayCarrinho.length !== 0 && <span>Valor Total: {valorTotal} </span>}
        </ListaCarrinho>
    )

}