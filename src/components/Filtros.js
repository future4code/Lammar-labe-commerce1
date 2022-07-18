import React from 'react';


export const Filtros = ({ minValue, maxValue, nome, handleFilterMin, handleFilterMax, handleFilterNome }) => {



    return (

        <div>
            <h1>Filtros</h1>
            <input placeholder='Min' type='number' value={minValue} onChange={handleFilterMin}/>
            <input placeholder='Max' value={maxValue} type='number'onChange={handleFilterMax}/>
            <input type='text' value={nome} onChange={handleFilterNome} />
        </div>
    )

}