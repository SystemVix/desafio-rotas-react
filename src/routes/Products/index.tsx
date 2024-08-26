import { NavLink, Outlet } from "react-router-dom";
import './styles.css';

export default function Products()
{
   return (
      <>      
         <section className="conteiner-global">
            <nav className="conteiner-card mt20">
               <NavLink to="computers" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Computadores
               </NavLink>
               <NavLink to="eletronics" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Eletrônicos
               </NavLink>
               <NavLink to="books" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Livros
               </NavLink>
            </nav>
            <Outlet/>               
         </section>                           
      </>
   );
}