import {Link } from "react-router-dom";
import styles from './NavBar.module.css'
import logo from "../../img/costs_logo.png"

function NavBar() {
    return(
        <div className={styles.navContainer}>
            <ul className={styles.navUl}>
                <div className="flex items-center">
                    <li>
                        <img src={logo} alt="Costs" className="h-[9vh]"></img>
                    </li>
                    <li className="font-bold text-white">
                        Stage Softwares
                    </li>
                </div>
                <div className={styles.navItens}>
                    <li>
                        <Link to='/' className={styles.navLink} key={'home'}>Home</Link>
                    </li>
                    <li>
                        <Link to='/projetos' className={styles.navLink} key={'projects'}>Plano de contas</Link>
                    </li>
                    <li>
                        <Link to='/empresa' className={styles.navLink} key={'empresa'}>Empresa</Link>
                    </li>
                    <li>
                        <Link to='/contato' className={styles.navLink} key={'contato'}>Contato</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar