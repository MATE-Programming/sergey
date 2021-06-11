import './Quality.scss'

const Quality = ({icon, icon2, icon3, title, title2, title3, text, text2, text3}) => {
    return (
        <div className="container">
            <div className='quality'>
                <div className="text">
                    <span><img src={icon} alt="icon"/><h3>{title}</h3></span>
                    <p>{text}</p>
                </div>
                <div className="text">
                    <span><img src={icon2} alt="icon"/><h3>{title2}</h3></span>
                    <p>{text2}</p>
                </div>
                <div className="text">
                    <span><img src={icon3} alt="icon"/><h3>{title3}</h3></span>
                    <p>{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default Quality;
