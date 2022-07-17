import React from 'react';
import { Container, Header, Main, Filter, ListaCarrinho, Footer, GlobalStyle } from './style';
import { ListaDeProdutos } from './components/ListaDeProdutos';
import { Carrinho } from './components/Carrinho';


function App() {





  return (

    <Container>

      <GlobalStyle />

      <Header></Header>

      <Main>

        <ListaDeProdutos />

        <Carrinho />

      </Main>

      <Footer></Footer>

    </Container>

  );

}

export default App;
