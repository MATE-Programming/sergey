import './Support.scss'
import mobile from "../../assets/image/mobileTelegram.png";
import pc from "../../assets/image/pcDiscord.png";
import mobileSupport from "../../assets/image/mobileSupport.png";

const Support = () => {
    return (
        <div className="container">
            <div className="support">
                <h2 className="title">Поддержка по-красоте</h2>
                <h3>Discord для связи, Telegram для души</h3>
                <div className="imageContainer">
                    <img className="desktopImg" src={mobile} alt="Telegram"/>
                    <img className="desktopImg" src={pc} alt="Discord"/>
                    <img className="mobileImg" src={mobileSupport} alt="Discord&Telegram"/>
                </div>
            </div>
        </div>
    )
}

export default Support;
