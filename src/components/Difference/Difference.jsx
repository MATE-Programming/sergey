import './Difference.scss'
import Quality from "../Quality/Quality";
import heart from "../../assets/icons/lightning.svg";
import notebook from "../../assets/icons/notebook.svg";
import clover from "../../assets/icons/clover.svg";

const Difference = () => {
    return (
        <div className="container">
            <div className="difference" id="difference">
                <h2 className="title">А в чем отличие?</h2>
                <Quality icon={heart} icon2={notebook} icon3={clover} title="Материал" title2="Коммерческая разработка"
                         title3="Стажировка"
                         text="Каждый урок состоит из Computer Science, профильного предмета и заданий. Получаешь навыки для работы и фундамент IT для более лёгкого профессионального роста."
                         text2="Вся практика курса – подготовка к реальным заказам или их аналог. Ты учишься и собираешь себе портфолио, чтобы покорять сердца работодателей"
                         text3="Как готов, во время или после обучения, помогаем со стажировкой в компаниях-партнёрах: Tech-Yard, Express24, uDevs, Unicon Soft, IT-Park, MyTaxi, EPAM, Genesys (UzCard), Newmax…"/>
            </div>
        </div>
    )
}

export default Difference;
