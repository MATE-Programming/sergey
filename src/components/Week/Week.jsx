import './Week.scss'

const Week = () => {
    return (
        <div className="container">
            <div className="week">
                <h2 className="title">Неделя обучения:</h2>
                <div className="steps">
                    <div className="step">
                        <div className="circle">1</div>
                        <p>2 теоретических урока</p>
                    </div>
                    <div className="step">
                        <div className="circle">2</div>
                        <p>Час Поддержки по Discord</p>
                    </div>
                    <div className="step">
                        <div className="circle">3</div>
                        <p>Практический урок в Академии</p>
                    </div>
                    <div className="step">
                        <div className="circle">4</div>
                        <p>Доступ в коворкинг без ограничений</p>
                    </div>
                    <div className="line"/>
                </div>
            </div>
        </div>
    )
}

export default Week;
