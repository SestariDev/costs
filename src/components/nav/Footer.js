import style from './Footer.module.css'
import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
    return(
        <footer>
                <ul className={style.footerList}>
                    <li>
                        <FaFacebook/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                    <li>
                        <FaLinkedin/>
                    </li>
                </ul>
           <p><span>Stage Softwares </span> &copy; 2024</p>
            
           
        </footer>
    )
}

export default Footer