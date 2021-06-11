import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import '../Sliders.scss'
import harvard from '../../../assets/image/harvard.png'
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Pagination} from 'swiper'


SwiperCore.use([Pagination]);
const HarvardSlider = () => {
    return (
        <div className="container">
            <div className="slider">
                <div className="imageContainer">
                    <img src={harvard} alt="Harvard"/>
                </div>
                <div className="text">
                    <h2 className="title">CS50</h2>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination
                    >
                        <SwiperSlide>
                            <h3>Курс Гарварда по Computer Science</h3>
                            <p>Совершенно не скучная подача довольно тяжёлого для понимания материала со стороны
                                CS50 подкреплена краткими видеороликами со стороны Mate для ещё большего упрощения
                                процесса усвоения информации.
                                В этой программе вы получаете фундаментальные знания, которые в будущем помогут не
                                застрять на определённом уровне и постоянно развиваться, легче разбираться в
                                новшествах и создавать свои решения для поставленных задач.
                                Теория, подкреплённая практикой и примерами из реальной жизни, вот, что из себя
                                представляет этот курс.
                                А технически:
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>Курс Гарварда по Computer Science</h3>
                            <p>1. Основы программирования.<br/>
                                2. Системы счисления. Алгоритмы. Визуальный язык Scratch и программы на нём.<br/>
                                3. Основные команды Linux. Язык Си, его синтаксис. Первая программа (hello world).<br/>
                                4. Что такое криптография? Простые криптографические шифры. Баги. Си: строки и
                                массивы.<br/>
                                5. Алгоритмы сортировки. Компилятор. Побитовые операции.<br/>
                                6. Рекурсия. Стек памяти и локальные переменные. Кодирование изображения. Структуры
                                (struct). Основы адресной арифметики.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>Курс Гарварда по Computer Science</h3>
                            <p>7. Указатели, структура памяти, стек, очереди и связные списки.<br/>
                                8. Начинаем программировать в вебе. HTML, CSS, протокол TCP/IP и HTTP.<br/>
                                9. Язык программирования PHP. Динамическая типизация.<br/>
                                10. Шаблон MVC. Немного о языке запросов SQL.<br/>
                                11. JavaScript, Ajax и DOM.<br/>
                                12. Глобальное информационное поле. Искусственный интеллект
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HarvardSlider;
