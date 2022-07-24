import React from 'react';
import { Container, Header, Footer, GlobalStyle } from './style';
import { Main } from './components/Main';
import logo from './img/logo.png'



function App() {





  return (

    <Container>
      <GlobalStyle />

      <Header>
        <img src={logo} />
        <h1>AstroToys</h1>
      </Header>

      <Main />

      <Footer>
        <p>&copy; 2022 AstroToys Ltda.</p>
      </Footer>

    </Container>

  );

}

export default App;
