import './Contact.scss'
import {Controller, useForm} from "react-hook-form";
import payMe from '../../assets/icons/payme.png'
import {Link} from "react-router-dom";
import {message, Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getListCourses, sendEmail} from "../../redux/courseReducer";
import Preloader from "../Preloader/Preloader";

let {Option} = Select
const Contact = () => {
    const dispatch = useDispatch()
    const {register, control, reset, handleSubmit} = useForm();
    const listCourses = useSelector(state => state.coursePage.listCourses)
    const onSubmit = (data) => {
        dispatch(sendEmail(data)).then(() => {
            reset()
            message.success('Ваша заявка отправлена');
        })
    }

    if (!listCourses) {
        dispatch(getListCourses())
        return <Preloader/>
    }
    return (
        <div className="container">
            <div className="contact" id="contact">
                <div className="contactForm">
                    <div className="publicLesson">
                        <div className="title">
                            <h3>Запишись на урок</h3>
                            <p className="subTitle">Записывайся на открытые уроки, которые проходят каждую неделю чтобы
                                почувствовать атмосферу
                                МАТЕ!</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Имя</p>
                            <input {...register("first_name")} required type='text' placeholder="Александр"/>
                            <p>Фамилия</p>
                            <input {...register("last_name")} required type='text' placeholder="Пушкин"/>
                            <p>Возраст</p>
                            <input {...register("age")} required type='number' min={10} placeholder="Возраст"/>
                            <p>Какая программа тебя интересует?</p>
                            <Controller
                                name='course'
                                control={control}
                                defaultValue="Выбери программу:"
                                render={({field}) => <Select {...field}
                                >
                                    {listCourses.map((c, key) => <Option key={key} value={c.id}>{c.title}</Option>)}
                                </Select>}
                            />
                            <div className="button">
                                <button type="submit">Записаться</button>
                            </div>
                        </form>
                    </div>
                    <div className="oneClick">
                        <div className="title">
                            <h3>Или купи курс в один клик</h3>
                            <p className="subTitle">Курс можно приобрести с помощью Payme</p>
                        </div>
                        <div className="buttons">
                            <Link rel="noreferrer"
                                  to={{pathname: 'https://payme.uz/fallback/merchant/?id=60a3602fb8d597ed134da740'}}
                                  target='_blank'>
                                <button>Оплата с помощью <img src={payMe} alt="PayMe"/></button>
                            </Link>
                            {/*<button type="submit">Оплата с помощью <img src={click} alt="Click"/></button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
