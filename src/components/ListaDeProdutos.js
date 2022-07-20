import React, { useState } from 'react';
import { ListaCards, ContainerLista } from '../style';
import { arrayCards } from './../MockDeDados';
import { Carrinho } from './Carrinho';
import { Filtros } from './Filtros';
import arma from './img/arma.png'
import foguete from './img/foguete.png'
import foguete2 from './img/foguete2.png'
import foguete3 from './img/foguete3.png'
import lego from './img/lego.png'
import robo from './img/robo.png'


export const ListaDeProdutos = () => {

    const options = [
        { value: 'Maior Preço' },
        { value: 'Menor Preço' },
    ];


    const [filterHandle, setFilterHandle] = useState('')
    const [filterHandle2, setFilterHandle2] = useState('')
    const [filterHandle3, setFilterHandle3] = useState('')
    const [selected, setSelected] = useState(options[1].value);
    const [arrayCarrinho, setArrayCarrinho] = useState([])


    const newArray = arrayCards.filter((item, index, array) => {
        if (filterHandle === '') {
            return array
        } else {
            return item.nome.toLowerCase().includes(filterHandle.toLowerCase())
        }
    })

    const newArray2 = newArray.filter((item, index, array) => {
        if (filterHandle2 === '') {
            return array
        } else {
            return (item.valor <= filterHandle2)
        }
    })

    const newArray3 = newArray2.filter((item, index, array) => {
        if (filterHandle3 === '') {
            return array
        } else {
            return (item.valor >= filterHandle3)
        }
    })

    const qtdProdutos = newArray3.length

    let orderedArray

    if (selected === 'Maior Preço') {
        orderedArray = newArray3.sort((a, b) => a.valor < b.valor ? 1 : -1)
    } else {
        orderedArray = newArray3.sort((a, b) => a.valor > b.valor ? 1 : -1)
    }


    const listaDeItensCarrinho = arrayCarrinho.map((elemento, index) => {
        const deletarItem = () => {
            const novoArrayCarrinho = [...arrayCarrinho]
            const deletar = novoArrayCarrinho.findIndex((itemExcluido) => {
                return itemExcluido === elemento
            })
            novoArrayCarrinho.splice(deletar, 1)
            setArrayCarrinho(novoArrayCarrinho)
        }
        return (
            <div key={index}>
                <p>{elemento.quantidade}</p>
                <p>{elemento.nome}</p>
                <p>{elemento.valor}</p>
                <button onClick={deletarItem}>Remover</button>
            </div>
        )
    })

    let valorTotal = 0
    for (let item of arrayCarrinho) {
        valorTotal += item.valor;
    }


    return (

        <div>

            <Filtros minValue={filterHandle3} nome={filterHandle} maxValue={filterHandle2} handleFilterNome={(e) => { setFilterHandle(e.target.value) }} handleFilterMax={(e) => { setFilterHandle2(e.target.value) }} handleFilterMin={(e) => { setFilterHandle3(e.target.value) }} />

            <ContainerLista>

                <div>

                    <span>Quantidade de Produtos: {qtdProdutos}</span>

                    <div>

                        <label>Ordenar por:</label>

                        <select value={selected} onChange={(e) => { setSelected(e.target.value) }}>

                            {options.map((option, index) => (

                                <option key={index} value={option.value}>

                                    {option.value}

                                </option>

                            ))}

                        </select>

                    </div>

                </div>

                <ListaCards>

                    {orderedArray.map((e, i) => {

                        return (

                            <div key={i}>

                                <img src={e.img} alt='imagemdoproduto' />

                                <h2>{e.nome}</h2>

                                <span>{e.valor}</span>

                                <button onClick={(event) => {

                                    event.preventDefault()
                                    const novoItem = { quantidade: 1, nome: e.nome, valor: e.valor }
                                    const novoArrayCarrinho = [...arrayCarrinho, novoItem]
                                    setArrayCarrinho(novoArrayCarrinho)

                                }}>Adicionar ao carrinho</button>

                            </div>

                        )

                    })}

                </ListaCards>

            </ContainerLista>

            <Carrinho itensCarrinho={listaDeItensCarrinho} valorTotal={valorTotal} />

        </div>

    )

}