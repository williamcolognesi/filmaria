import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './styles.css';


//https://sujeitoprogramador.com/r-api/?api=filmes/
export default function Home() {

  //criando state vazio para setar os filmes dentro
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    //funcao pra carregar a api
    async function loadFilmes() {
      const dados = await api.get('r-api/?api=filmes')
      //inserindo valores no array filmes
      setFilmes(dados.data);
    }
    loadFilmes();
  }, [])

  return (
    <div className="container">
      <div className='lista-filmes'>
        {filmes.map((filmesApi) => {
          return (
            <article key={filmesApi.id}>
              <strong>{filmesApi.nome}</strong>
              <div className='zoom'>
                <img src={filmesApi.foto} />
              </div>
              
              <Link to={`/filmes/${filmesApi.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}


