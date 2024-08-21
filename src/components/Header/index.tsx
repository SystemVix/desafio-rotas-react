import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export default function Header()
{
   return (
      <>
         <header>
            <div className="conteiner-global conteiner-header">
               <nav className="opcoes-header">
                  <NavLink to="/home" className={({isActive}) =>
                     isActive ? "item-header menu-ativo" : "item-header"}>
                     Início
                  </NavLink>
                  <NavLink to="/products" className={({isActive}) =>
                     isActive ? "item-header menu-ativo" : "item-header"}>
                     Produtos
                  </NavLink>
                  <NavLink to="/about" className={({isActive}) =>
                     isActive ? "item-header menu-ativo" : "item-header"}>
                     Sobre
                  </NavLink>
               </nav>
               <Link to="/">
                  <img className="imagem" src="./src/assets/home.svg" alt="Home" />
               </Link>
            </div>
         </header>         
      </>
   );
}