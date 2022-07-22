import React, { useState } from 'react';
import { ListaCards, ContainerLista, HeaderCards, MainContainer } from '../style';
import { Carrinho } from './Carrinho';
import { Filtros } from './Filtros';
import { arrayCards } from '../MockDeDados';
import { Card } from './Card';



export const Main = () => {

    const options = [
        { value: 'Maior Preço' },
        { value: 'Menor Preço' },
    ];

    const [filterHandle, setFilterHandle] = useState('')
    const [filterHandle2, setFilterHandle2] = useState('')
    const [filterHandle3, setFilterHandle3] = useState('')
    const [selected, setSelected] = useState(options[1].value);
    const [arrayCarrinho, setArrayCarrinho] = useState([])
    const [valorTotal, setValorTotal] = useState(0)

    // Filtros

    const arrayFiltrado = arrayCards.filter((item, index, array) => {
        if (filterHandle === '') {
            return array
        } else {
            return item.nome.toLowerCase().includes(filterHandle.toLowerCase())
        }
    }).filter((item, index, array) => {
        if (filterHandle2 === '') {
            return array
        } else {
            return (item.valor <= filterHandle2)
        }
    }).filter((item, index, array) => {
        if (filterHandle3 === '') {
            return array
        } else {
            return (item.valor >= filterHandle3)
        }
    })

    //Add os itens do carrinho.

    const addProduto = (produto) => {
        const existe = arrayCarrinho.find((e) => e.id === produto.id);
        setValorTotal(valorTotal + produto.valor)
        if (existe) {
            setArrayCarrinho(
                arrayCarrinho.map((e) =>
                    e.id === produto.id ? { ...existe, qtd: existe.qtd + 1 } : e
                )
            )
        } else {
            setArrayCarrinho([...arrayCarrinho, { ...produto, qtd: 1 }])
        }
    }

    //Deleta os itens do carrinho.

    const deletarProduto = (produto) => {
        const existe = arrayCarrinho.find((e) => e.id === produto.id);
        setValorTotal(valorTotal - produto.valor)
        if (existe.qtd === 1) {
            setArrayCarrinho(arrayCarrinho.filter((e) => e.id !== produto.id))
        } else {
            setArrayCarrinho(
                arrayCarrinho.map((e) =>
                    e.id === produto.id ? { ...existe, qtd: existe.qtd - 1 } : e
                )
            )
        }
    }


    // Quantidade de produtos

    const qtdProdutos = arrayFiltrado.length

    // Ordernar por ordem crescente ou dedescente

    let orderedArray

    if (selected === 'Maior Preço') {
        orderedArray = arrayFiltrado.sort((a, b) => a.valor < b.valor ? 1 : -1)
    } else {
        orderedArray = arrayFiltrado.sort((a, b) => a.valor > b.valor ? 1 : -1)
    }




    return (

        <MainContainer>

            <Filtros
                nome={filterHandle}
                minValue={filterHandle3}
                maxValue={filterHandle2}
                handleFilterNome={(e) => { setFilterHandle(e.target.value) }}
                handleFilterMin={(e) => { setFilterHandle3(e.target.value) }}
                handleFilterMax={(e) => { setFilterHandle2(e.target.value) }}
            />

            <ContainerLista>

                <HeaderCards>
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

                </HeaderCards>

                <ListaCards>
                    {orderedArray.map((e) => {
                        return (
                            <Card addProduto={addProduto} key={e.id} produto={e} />
                        )

                    })}

                </ListaCards>

            </ContainerLista>

            <Carrinho arrayCarrinho={arrayCarrinho} deletarProduto={deletarProduto} valorTotal={valorTotal} />

        </MainContainer>

    )

}