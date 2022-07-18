import React, { useState } from 'react';


export const Carrinho = ({ itensCarrinho }) => {




    return (

        <div>
            <h1>Carrinho</h1>
            <div>
                {itensCarrinho}
            </div>
            <span>Valor Total:</span>
        </div>
    )

}