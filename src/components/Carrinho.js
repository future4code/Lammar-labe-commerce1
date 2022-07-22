import React, { useState } from 'react';
import { ListaCarrinho, itemCarrinho } from '../style';


export const Carrinho = ({ itensCarrinho, valorTotal }) => {


    return (

        <ListaCarrinho>
            <h2>Carrinho</h2>
            {itensCarrinho}
            <span>Valor Total: {valorTotal} </span>
        </ListaCarrinho>
    )

}