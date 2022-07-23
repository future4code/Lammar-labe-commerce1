import React, { useState } from 'react';
import { ListaCarrinho, ItemCarrinho } from '../style';


export const Carrinho = ({ arrayCarrinho, deletarProduto, valorTotal, addProduto }) => {

    // Rezaderizar itens do carrinho

    const itensCarrinho = arrayCarrinho.map((elemento) => {
        return (
            <ItemCarrinho key={elemento.id}>
                <img src={elemento.img}/>
                <p>{elemento.nome}</p>
                <p>{(elemento.valor)*(elemento.qtd)}</p>
                <div>
                <button onClick={() => deletarProduto(elemento)}><i class="fa fa-minus"></i></button>
                <span>{elemento.qtd}</span>
                <button onClick={() => addProduto(elemento)}><i class="fa fa-plus"></i></button>
                </div>
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