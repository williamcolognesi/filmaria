import './style.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Filmaria</Link>
            <Link className='salvos' to='favoritos'>Salvos</Link>
        </header>
        
    )
}