import React from 'react';
import { Container, Header, Main, Filter, ListaCards, ListaCarrinho, Footer, GlobalStyle } from './style';

function App() {





  return (

    <Container>

      <GlobalStyle />

      <Header></Header>

      <Main>

        <Filter></Filter>

        <ListaCards></ListaCards>

        <ListaCarrinho></ListaCarrinho>

      </Main>

      <Footer></Footer>

    </Container>

  );
  
}

export default App;
