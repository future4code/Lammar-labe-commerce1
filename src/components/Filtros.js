import React from 'react';
import { Filter } from '../style';


export const Filtros = ({ minValue, maxValue, nome, handleFilterMin, handleFilterMax, handleFilterNome }) => {

    return (

        <Filter>
            <h2>Filtros</h2>
            <input placeholder='Min' type='number' value={minValue} onChange={handleFilterMin}/>
            <input placeholder='Max' value={maxValue} type='number'onChange={handleFilterMax}/>
            <input type='text' value={nome} onChange={handleFilterNome} />
        </Filter>
    )

}