import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Header()
{
   return (
      <>
         <header>
            <div className="conteiner-global conteiner-header">
               <nav className="opcoes-header">
                  <NavLink to="/home" className={({isActive}) =>
                     isActive ? "opcao-item menu-ativo" : "opcao-item"}>
                     Início
                  </NavLink>
                  <NavLink to="/products" className={({isActive}) =>
                     isActive ? "opcao-item menu-ativo" : "opcao-item"}>
                     Produtos
                  </NavLink>
                  <NavLink to="/about" className={({isActive}) =>
                     isActive ? "opcao-item menu-ativo" : "opcao-item"}>
                     Sobre
                  </NavLink>
               </nav>
               <div>
                  <img className="imagem" src="./src/assets/home.svg" alt="Home" />
               </div>
            </div>
         </header>         
      </>
   );
}