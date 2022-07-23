import React, { useEffect, useState } from 'react';
import { ListaCards, ContainerLista, HeaderCards, MainContainer } from '../style';
import { Carrinho } from './Carrinho';
import { Filtros } from './Filtros';
import { arrayCards } from '../MockDeDados';
import { Card } from './Card';



export const Main = () => {

    const options = [
        { value: 'Menor Preço' },
        { value: 'Maior Preço' },
    ];

    const [filterNome, setFilterNome] = useState('')
    const [filterValorMax, setFilterValorMax] = useState('')
    const [filterValorMin, setFilterValorMin] = useState('')
    const [selected, setSelected] = useState(options[0].value);
    const [arrayCarrinho, setArrayCarrinho] = useState([])
    const [valorTotal, setValorTotal] = useState(0)

    // Filtros

    const arrayFiltrado = arrayCards.filter((item, index, array) => {
        if (filterNome === '') {
            return array
        } else {
            return item.nome.toLowerCase().includes(filterNome.toLowerCase())
        }
    }).filter((item, index, array) => {
        if (filterValorMax === '') {
            return array
        } else {
            return (item.valor <= filterValorMax)
        }
    }).filter((item, index, array) => {
        if (filterValorMin === '') {
            return array
        } else {
            return (item.valor >= filterValorMin)
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

    // useEffect


    useEffect(
        () => {
            const retornoArrayCarrinho = JSON.parse(localStorage.getItem("arrayCarrinho"))
            const retornoValorTotal = JSON.parse(localStorage.getItem("valorTotal"))
            setArrayCarrinho(retornoArrayCarrinho)
            setValorTotal(retornoValorTotal)
        }, []
    )

    useEffect(
        () => {
            localStorage.setItem("arrayCarrinho", JSON.stringify(arrayCarrinho))
            localStorage.setItem("valorTotal", JSON.stringify(valorTotal))
        }, [arrayCarrinho, valorTotal]
    )

    


    return (

        <MainContainer>

            <Filtros
                nome={filterNome}
                minValue={filterValorMin}
                maxValue={filterValorMax}
                handleFilterNome={(e) => { setFilterNome(e.target.value) }}
                handleFilterMin={(e) => { setFilterValorMin(e.target.value) }}
                handleFilterMax={(e) => { setFilterValorMax(e.target.value) }}
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

            <Carrinho arrayCarrinho={arrayCarrinho} addProduto={addProduto} deletarProduto={deletarProduto} valorTotal={valorTotal} />

        </MainContainer>

    )

}