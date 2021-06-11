import './Structure.scss'
import speak from '../../assets/icons/speak.svg'
import notebook from '../../assets/icons/notebook.svg'
import backpack from '../../assets/icons/backpack.svg'
import handshake from '../../assets/icons/handshake.svg'

const Structure = () => {
    return (
        <div className="container">
            <div className="structure">
                <h3 className="title">Структура урока:</h3>
                <div className="structureGrid">
                    <div className="item">
                        <span><img src={speak} alt="Speak"/><h4>Теория</h4></span>
                        <p>Гардвадский Computer Science </p>
                    </div>
                    <div className="item">
                        <span><img src={notebook} alt="Notebook"/><h4>Тесты</h4></span>
                        <p>Проверка усвоения материала</p>
                    </div>
                    <div className="item">
                        <span><img src={backpack} alt="Backpack"/><h4>Задачи</h4></span>
                        <p>Лабораторные работы и реальные проекты</p>
                    </div>
                    <div className="item">
                        <span><img src={handshake} alt="Handshake"/><h4>Мастер-классы</h4></span>
                        <p>Онлайн и оффлайн встречи с менторами</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Structure;
