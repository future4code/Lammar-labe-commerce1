import React from 'react';
import { Container, Header, Main, Filter, ListaCarrinho, Footer, GlobalStyle } from './style';
import { ListaDeProdutos } from './components/ListaDeProdutos';
import { Carrinho } from './components/Carrinho';
import logo from './img/logo.png'



function App() {





  return (

    <Container>
      <GlobalStyle />

      <Header>
        <img src={logo}/>
        <h1>AstroToys</h1>
      </Header>

        <ListaDeProdutos />

      <Footer>
        <p>&copy; 2022 AstroToys Ltda.</p>
      </Footer>

    </Container>

  );

}

export default App;
