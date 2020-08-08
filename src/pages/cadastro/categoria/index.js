import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaut from '../../../components/PageDefault';


function CadastroCategoria(){
    return (
      <>
        <PageDefaut>
            <h1>
                Cadastro de Categoria
            </h1>

            <Link to="/">
                Ir pra home
            </Link>
        </PageDefaut>
      </>
    )
}

export default CadastroCategoria;