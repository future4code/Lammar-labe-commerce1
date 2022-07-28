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

    @media (max-width: 950px) {

        h1 {
            font-size: 1.6rem;
        }  

        img {
            width: 50px;
            margin-right: 10px;
        }
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

    @media (max-width: 950px) {

        width: 25%;

        h2 {
            font-size: 1.3rem;
        }  

    }

    @media (max-width: 600px) {

        margin: 10px;
        padding: 5px;

        h2 {
            font-size: 1rem;
        }     

    }

`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    width: 90%;

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

    @media (max-width: 950px) {

        width: 100%;

        label {
            font-size: 0.9rem;
        }

        input {
            padding: 5px;
            font-size: 0.7rem;
        }
    }

    @media (max-width: 600px) {


        label {
            font-size: 0.7rem;
        }

        input {
            padding: 3px;
            font-size: 0.5rem;
        }
    }

`

export const ListaCards = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
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
        text-align: center;
    }

    @media (max-width: 950px) {

        width: 25%;

        h2 {
            font-size: 1.3rem;
        }
        
        .vazio {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 600px) {

        margin: 10px;
        padding: 5px;

        h2 {        
            font-size: 1rem;
        }     

        .vazio {
            font-size: 0.6rem;
        }

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

    @media (min-width: 951px) and (max-width: 1100px) {
        display: block;
        text-align: center;

        span {
            display: block;
            margin-bottom: 2px;
        }
    }


    @media (max-width: 950px) {

        span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 770px) {
        display: block;
        text-align: center;

        span {
            display: block;
            margin-bottom: 2px;
        }
    }

    @media (max-width: 600px) {
        display: block;
        text-align: center;
        margin-top: 5px;
        padding-top: 10px;

        span {
            display: block;
            font-size: 0.6rem;
            margin-bottom: 2px;
        }
    }
    
`

export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 20px;

    @media (max-width: 950px) {        
        width: 50%;
    }

    @media (max-width: 600px) {        
        margin: 10px 0px;
    }

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

    @media (max-width: 950px) {

        span {
            font-size: 0.8rem;
        }

        label {
            font-size: 0.8rem;
        }

        select {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 830px) {

        label {
            display: block;
        }

    }

    @media (max-width: 600px) {

        span {
            font-size: 0.6rem;
        }

        label {
            font-size: 0.6rem;
        }

        select {
            font-size: 0.5rem;
        }
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

    @media (max-width: 950px) {

        img {
            width: 80px;
        } 

        h3 {
            font-size: 1rem;
            text-align: center;
        }

        p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 600px) {

        margin: 5px 0;

        img {
            width: 50px;
        } 

        h3 {
            font-size: 0.8rem;
            text-align: center;
        }

        p {
            font-size: 0.6rem;
        }
    }



`
export const Contador = styled.div`
    display: flex;
    align-items: center;
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

    @media (max-width: 950px) {

        button {
            padding: 6px;
        }

        i {
            font-size: 8px;
        }

        span {
            width: 25px;
            font-size: 0.7rem;
        }
    }

    @media (max-width: 600px) {

        margin: 10px 0;

        button {
            padding: 3px 4px 5px 4px;
        }

        i {
            font-size: 6.5px;
        }

        span {
            
            font-size: 0.6rem;
            width: 20px;
        }
    }


`

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 250px;
    margin: 11px 8px 0 8px;
    

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

    @media (max-width: 950px) {

        width: 200px;

        h3 {
            font-size: 1rem;
            text-align: center;
        }

        p {
            font-size: 0.8rem;
        }

        div {
            div {
                span {
                    font-size: 0.8rem;
                }
                p {
                    font-size: 11px;
                }
                .crossed {
                    font-size: 9px;
                }
            }
            
            button {
                font-size: 12px;
            }
        }
    }

        @media (max-width: 950px) {

        width: 200px;

        h3 {
            font-size: 1rem;
            text-align: center;
        }

        p {
            font-size: 0.8rem;
        }

        div {
            div {
                span {
                    font-size: 0.8rem;
                }
                p {
                    font-size: 11px;
                }
                .crossed {
                    font-size: 9px;
                }
            }
            
            button {
                font-size: 12px;
            }
        }
    }

            @media (max-width: 600px) {

            width: 150px;
            margin: 11px 0 0 0;


            h3 {
                font-size: 0.8rem;
                text-align: center;
            }

            p {
                font-size: 0.6rem;
            }

            div {
                div {
                    span {
                        font-size: 0.6rem;
                    }
                    p {
                        font-size: 10px;
                    }
                    .crossed {
                        font-size: 8px;
                    }
                }
            
                button {
                    width: 80%;
                    font-size: 10px;
                    margin: 10px 0;
                }
            }
    }

    


`



