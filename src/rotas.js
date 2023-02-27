import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';


const Rotas = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/filmes/:id" element={<Filmes/>} />
                <Route exact path="/favoritos" element={<Favoritos/>} />
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;