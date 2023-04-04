 //import "./Navbar.css"

 import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
 
 export const Navbar = ()=>{
    return <div className={styles.containerNavbar}>

        <h3>Lucas Shop</h3>
        <ul>
            <li>Productos</li>
            <li>Servicios</li>
            <li>Contactos</li>
        </ul>
        <CartWidget />
    </div>
}
