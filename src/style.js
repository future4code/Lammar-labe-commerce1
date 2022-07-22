import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    img {
        width: 200px;
    }

`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`


export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 60px;
        margin-right: 20px;
    }
`


export const MainContainer = styled.main`
    display: flex;
    flex: 1;

`

export const Filter = styled.nav`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 20px;
    border: 1px solid black;

    input {
        width: 70%;
        margin: 10px 0;
    }

`

export const ListaCards = styled.div`
    display: flex;
    flex-wrap: wrap;    
`

export const ListaCarrinho = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 20px;
    border: 1px solid black;
    
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    top: 100%;
    position: sticky;

`

export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 20px 50px;

`
export const HeaderCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ItemCarrinho = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`

