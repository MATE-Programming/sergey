import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import '../Sliders.scss'
import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Pagination} from 'swiper'
import {clearSlider, getSlider} from "../../../redux/courseReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../Preloader/Preloader";

SwiperCore.use([Pagination]);
const CourseSlider = ({slug}) => {
    const dispatch = useDispatch()
    let slider = useSelector(state => state.coursePage.slider)
    useEffect(() => {
        dispatch(getSlider(slug))
    }, [])
    useEffect(() => {
        return () => dispatch(clearSlider())
    }, [])
    return (
        <div className="container">
            {!slider ? '' :
                <div className="slider">
                    <div className="imageContainer">
                        <img src={slider.image} alt={slug}/>
                    </div>
                    <div className="text">
                        <h2 className="title">{slider.title}</h2>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination
                        >
                            {slider.children.map((s, key) =>
                                <SwiperSlide key={key}>
                                    <span>
                                        <div className="circle">{s.id}</div>
                                        <h3>{s.title}</h3>
                                    </span>
                                    <p>{s.description}</p>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>}
        </div>
    )
}

export default CourseSlider;
