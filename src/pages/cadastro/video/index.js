import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaut from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <>
      <PageDefaut>
        <h1>
          Cadastro de Vídeo
        </h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefaut>
    </>
  );
}

export default CadastroVideo;
