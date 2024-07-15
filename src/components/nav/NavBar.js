import {Link } from "react-router-dom";
import styles from './NavBar.module.css'
import logo from "../../img/image.png"

function NavBar() {
    return(
        <div className={styles.navContainer}>
            <ul className={styles.navUl}>
                
                <a href="/" className="font-bold text-white"> Games </a>
                
                    <img src={logo} alt="Jogos" className="w-[15%]"/>
            
            </ul>
        </div>
    )
}

export default NavBar