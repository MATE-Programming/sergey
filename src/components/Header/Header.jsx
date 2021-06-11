import logo from '../../assets/image/logo.svg'
import mobileMenu from '../../assets/icons/mobileMenu.svg'
import './Header.scss'
import {Link} from 'react-router-dom'
import {useState} from "react";
import instagram from "../../assets/icons/instagram.svg";
import telegram from "../../assets/icons/telegram.svg";
import email from "../../assets/icons/email.svg";
import {HashLink} from 'react-router-hash-link';

const Header = () => {
    let [openMenu, setOpenMenu] = useState(false)
    return (
        <header className='container'>
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo"/></Link>
            </div>
            <nav>
                <HashLink smooth to="/#video">
                    <p>Кто мы?</p>
                </HashLink>
                <HashLink smooth to="/#difference">
                    <p>Наша программа</p>
                </HashLink>
                <HashLink smooth to="/#contact">
                    <p>Запись на урок</p>
                </HashLink>
            </nav>
            <div className="mobileMenu">
                <img src={mobileMenu} onClick={() => {
                    setOpenMenu(!openMenu)
                }} alt="Menu"/>
                {openMenu && <div className="mobileMenuContainer">
                    <div className="links">
                        <HashLink smooth to="/#video">
                            <p>Кто мы?</p>
                        </HashLink>
                        <HashLink smooth to="/#difference">
                            <p>Наша программа</p>
                        </HashLink>
                        <HashLink smooth to="/#contact">
                            <p>Запись на урок</p>
                        </HashLink>
                    </div>
                    <div className="icons">
                        <a href="https://www.instagram.com/mate_education/" target='_blank'>
                            <img src={instagram} alt="Instagram"/>
                        </a>
                        <a href="#" target='_blank'>
                            <img src={telegram} alt="Telegram"/>
                        </a>
                        <a href="#" target='_blank'>
                            <img src={email} alt="Email"/>
                        </a>
                    </div>
                </div>}
            </div>
        </header>
    )
}

export default Header;
