import './Reviews.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import fire from '../../assets/icons/fire.svg'
import SwiperCore, {Autoplay} from 'swiper';
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../redux/courseReducer";
import Preloader from "../Preloader/Preloader";

SwiperCore.use([Autoplay]);

const Reviews = () => {
    const dispatch = useDispatch()
    let reviews = useSelector(state => state.coursePage.reviews)
    if (!reviews) {
        dispatch(getReviews())
        return <Preloader/>
    }
    return (
        <div className="container">
            <div className="reviews">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                >
                    {reviews.map((r, key) => <SwiperSlide key={key}>
                        <div className="slideContainer">
                            <div className="avatar">
                                <span><img src={fire} alt="Fire"/><h2 className="title">Отзывы студентов</h2></span>
                                <div className="student">
                                    <img src={r.image} alt="Student"/>
                                    <p className="name">{r.full_name}</p>
                                </div>
                            </div>
                            <div className="text">
                                <span><img src={fire} alt="Fire"/><h2 className="title">Отзывы студентов</h2></span>
                                <p>{r.description}</p>
                                <p className="name">{r.full_name}</p>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default Reviews;
