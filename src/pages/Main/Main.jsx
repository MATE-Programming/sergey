import Header from "../../components/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import Quality from "../../components/Quality/Quality";
import Products from "../../components/Products/Products";
import Difference from "../../components/Difference/Difference";
import heart from '../../assets/icons/heart.svg'
import eyes from '../../assets/icons/eyes.svg'
import rose from '../../assets/icons/rose.svg'
import Support from "../../components/Support/Support";
import Reviews from "../../components/Reviews/Reviews";
import VideoBanner from "../../components/VideoBanner/VideoBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HarvardSlider from "../../components/Sliders/HarvardSlider/HarvardSlider";
import Specialist from "../../components/Sliders/Specialist/Specialist";

const App = () => {
    return (
        <div>
            <Header/>
            <MainBanner/>
            <Quality icon={heart} icon2={eyes} icon3={rose} title="Поддержка" title2="Слежка" title3="Антиутопия"
                     text="Co-working с ПК, конфетками и кофе, ручная проверка программ, группы в соц. сетях"
                     text2="Сколько прошёл, как прошёл, как долго проходил урок, - мы знаем о студенте всё."
                     text3="Никакой воды. Коммерческая разработка. Работа в команде. Только нужные навыки."/>
            <Products/>
            <Difference/>
            <Support/>
            <HarvardSlider/>
            <VideoBanner/>
            <Specialist/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;
