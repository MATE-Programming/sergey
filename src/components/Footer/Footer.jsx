import './Footer.scss'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import email from '../../assets/icons/email.svg'


const Footer = () => {
    return (
        <footer className='container'>
            <div className="icons">
                <a href="https://www.instagram.com/mate_education/" target='_blank'><img src={instagram} alt="Instagram"/></a>
                <a href="#" target='_blank'><img src={telegram} alt="Telegram"/></a>
                <a href="#" target='_blank'><img src={email} alt="Email"/></a>
            </div>
            <h3>Присоединяйся</h3>
            <h4>@ 2021 MATE PROGRAMMING</h4>
        </footer>
    )
}

export default Footer;
