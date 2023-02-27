import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {useParams, useNavigate} from 'react-router-dom';
import './styles.css';
import {toast} from 'react-toastify'

//https://sujeitoprogramador.com/r-api/?api=filmes/
export default function Filmes() {

  const {id} = useParams();
  const navigate = useNavigate();

  //criando state vazio para setar os filmes dentro
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //funcao pra carregar a api
    async function loadFilmes() {
      const dados = await api.get(`r-api/?api=filmes/${id}`)
      //inserindo valores no array filmes
      if (dados.data.length ===0) {
        //tentou acesso com id inexistente
        navigate('/');
        return;
      }

      setFilmes(dados.data);
      setLoading(false);
    }
    loadFilmes();
  }, [id, navigate])

  function salvaFilme(){

    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //verificar se já existe o filme salvo

    const existeFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filmes.id)
    if (existeFilme) {
      toast.error('Você já possui esse filme salvo')
      return;
    }

    filmesSalvos.push(filmes);
    localStorage.setItem('filmes',JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!');

  }

  if (loading) {
    return (
    <h1>Carregando os dados</h1>
    );
  }
  return(
    <div className="lista-filme-individual">
      <h1>{filmes.nome}</h1>
      <img src={filmes.foto}/>
      <h3>Sinopse</h3>
      <p>{filmes.sinopse}</p>
      <div className='botoes'>
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a target= "blank" href={`https://www.youtube.com/results?search_query=${filmes.nome}+Trailer`}>Trailer</a>          
        </button>
      </div>
    </div>
  );
}


