import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Card()
{
   return (
      <main>
         <section className="conteiner-global">
            <div className="conteiner-card mt20">
               <NavLink to="/computers" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Computadores
               </NavLink>
               <NavLink to="/eletronics" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Eletrônicos
               </NavLink>
               <NavLink to="/books" className={({isActive}) =>
                  isActive ? "item-card menu-ativo" : "item-card"}>
                  Livros
               </NavLink>
            </div>
         </section>
      </main>
   );
}