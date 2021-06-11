import './MainBanner.scss'
import banner from '../../assets/image/mainBanner.png'
import {HashLink} from "react-router-hash-link";

const MainBanner = () => {
    return (
        <div className='container'>
            <div className='mainBanner'>
                <div className="bannerText">
                    <h2>Уникальная программа смешанного обучения</h2>
                    <h1>Стань частью семьи MATE</h1>
                    <p>Сообщество, образование, амбиции и успех, - чего ты ждёшь? Давай к нам!</p>
                    <HashLink smooth to="/#contact">
                        <button>Купить курс</button>
                    </HashLink>
                </div>
                <div className="bannerImage">
                    <img src={banner} alt="Banner"/>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
