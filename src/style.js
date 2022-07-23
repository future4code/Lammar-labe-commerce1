import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    background-color: #3b6fff;
    color: #FFF;
    box-shadow: 0 3px 6px 0 rgb(83 82 82);
    
    img {
        width: 60px;
        margin-right: 20px;
    }
`

export const MainContainer = styled.main`
    display: flex;
    flex: 1;

`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    top: 100%;
    position: sticky;
    background-color: #3b6fff;
    font-weight: 500;

    p {
        margin: 5px;
    }

`

export const Filter = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 20px;
    padding: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    h2 {
        color: #3b6fff;
        font-size: 1.7rem;
    }

`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    width: 80%;

    label {
        display: block;
        margin-bottom: 10px;
        font-weight: 700;
    }
    input {
        border: 1px solid #3b6fff;
        width: 100%;
        padding: 7px;
        border-radius: 6px;
    }

`

export const ListaCards = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
    width: 100%;
`

export const ListaCarrinho = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 15px;

    h2 {
        color: #3b6fff;
        font-size: 1.7rem;
    }    

    .vazio {
        margin-top: 10px;
    }
`

export const SpanValor = styled.aside`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(59, 111, 255, 0.6);
    width: 100%;
    padding-top: 15px;
    font-weight: bold;
    color: black;
    margin-top: 10px;
`



export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
    margin: 20px;

`
export const HeaderCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        margin-right: 10px;
    }

    select {
        border: 1px solid gray;
        padding: 3px;
        border-radius: 6px;
    }
`

export const ItemCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0px;
    border: solid 1px rgba(59, 111, 255, 0.6);

    img {
        width: 150px;
        margin-top: 10px;
    }

    p {
        margin-top: 10px;
    }

    




`
export const Contador = styled.div`
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    margin: 15px;

    button {
    background: transparent;
    cursor: pointer;    
    padding: 15px;
    border: none !important;
    }

    i {
      font-size: 10px;
      color: gray;
    }
    
    span {
        display: inline-block;
        text-align: center;
        width: 40px;
    }

`

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-top: 11px;
    margin-left: 15px;
    

    img {
        height: 70%;
        width: 70%;
        margin: 10px 0px;

    }

    h3 {
            margin: 5px;
        }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: whitesmoke;
        width: 100%;

        div {
            margin: 5px;
            span {
            align-self: flex-start;
            margin-left: 6px;
            color: #4FCC46;
            font-weight: 650;

        }

        p {
            align-self: flex-start;
            margin-left: 6px;
            font-size: 12px;
        }

        .crossed {
            text-decoration: line-through;
            font-size: 10px;
            color: red;
        }
        }

        button {
        border: none;
        outline: 0;
        padding: 8px;
        color: white;
        background-color: #3b6fff;
        text-align: center;
        cursor: pointer;
        width: 70%;
        font-size: 14px;
        border-radius: 5px;
        margin: 10px;
        
    }
        button:hover {
            opacity: 0.8;
        }
    }

`



