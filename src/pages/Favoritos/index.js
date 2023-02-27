import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import {toast} from 'react-toastify'

//https://sujeitoprogramador.com/r-api/?api=filmes/
export default function Favoritos() {

  //criando state vazio para setar os filmes dentro
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesSalvos = localStorage.getItem('filmes');
    setFilmes(JSON.parse(filmesSalvos) || []);

  }, [])

  function excluirFilme(id){
    let filtroFilmes = filmes.filter((item)=>{
      return(item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem('filmes',JSON.stringify(filtroFilmes))
    toast.success('Filme excluido com sucesso!')
  }

  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span> }
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
              </div>

            </li>
          )
        })}
      </ul>
    </div>
  );
}


