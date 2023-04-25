 //import "./Navbar.css"

 import CartWidget from "../CartWidget/CartWidget";
 import styles from "./Navbar.module.css";
 import { Outlet, Link } from "react-router-dom";
 
 export const Navbar = () => {
   return (
     <div>
       <div className={styles.containerNavbar}>
         <Link to="/">LucasShop</Link>
          <div className={styles.categories}>
           <Link to="/">Todos</Link>
           <Link to="/category/usados">usados</Link>
           <Link to="/category/nuevos">nuevos</Link>
         </div>
 
         <CartWidget />
       </div>
 
       <Outlet />
     </div>
   );
 };