import React, { useState } from 'react';
import { ListaCarrinho, ItemCarrinho, Contador, SpanValor } from '../style';


export const Carrinho = ({ arrayCarrinho, deletarProduto, valorTotal, addProduto }) => {

    // Rezaderizar itens do carrinho

    const itensCarrinho = arrayCarrinho.map((elemento) => {
        return (
            <ItemCarrinho key={elemento.id}>
                <img src={elemento.img} />
                <p>{elemento.nome}</p>
                <p>R$ {(elemento.valor) * (elemento.qtd)},00</p>
                <Contador>
                    <button onClick={() => deletarProduto(elemento)}><i class="fa fa-minus"></i></button>
                    <span>{elemento.qtd}</span>
                    <button onClick={() => addProduto(elemento)}><i class="fa fa-plus"></i></button>
                </Contador>
            </ItemCarrinho>
        )
    })


    return (

        <ListaCarrinho>
            <h2>Carrinho</h2>
            <div>{arrayCarrinho.length === 0 && <p>O carrinho está vazio.</p>}</div>
            {itensCarrinho}
            {arrayCarrinho.length !== 0 && <SpanValor><span>Valor Total: </span><span>R$ {valorTotal},00</span> </SpanValor>}
        </ListaCarrinho>
    )

}