import React, { useState } from 'react';


export const Carrinho = ({ itensCarrinho, valorTotal }) => {




    return (

        <div>
            <h1>Carrinho</h1>
            <div>
                {itensCarrinho}
            </div>
            <span>Valor Total: {valorTotal} </span>
        </div>
    )

}