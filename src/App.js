import React from 'react';
import Menu from './components/Menu'
import dadosInicial from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
function App() {
  return (
    <div style={{ background: "#141414" }} >
      <Menu />

      <BannerMain 
        videoTitle={dadosInicial.categorias[0].videos[0].titulo}
        url={dadosInicial.categorias[0].videos[0].url}
        videoDescription={"O que é front-End?"}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[0]}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[1]}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[2]}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[3]}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[4]}
      />

      <Carousel 
        ignoreFirtVideo
        category={dadosInicial.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
