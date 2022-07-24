import React from 'react';
import { Campo, Filter } from '../style';


export const Filtros = ({ minValue, maxValue, nome, handleFilterMin, handleFilterMax, handleFilterNome }) => {

    return (

        <Filter>
            <h2>Filtros</h2>
            <Campo>
                <label for='nome'>Nome:</label>
                <input name='nome' placeholder='Digite o nome' type='text' value={nome} onChange={handleFilterNome} />
            </Campo>
            <Campo>
                <label for='valormin'>Valor Mínimo:</label>
                <input name='valormin' placeholder='Digite o valor' type='number' value={minValue} onChange={handleFilterMin} />
            </Campo>
            <Campo>
                <label for='valormax'>Valor Máximo:</label>
                <input name='valormax' placeholder='Digite o valor' value={maxValue} type='number' onChange={handleFilterMax} />
            </Campo>
        </Filter>
    )

}