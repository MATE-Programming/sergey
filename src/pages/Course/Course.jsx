import './Course.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import clock from "../../assets/icons/clock.svg"
import cool from "../../assets/icons/cool.svg"
import Week from "../../components/Week/Week";
import VideoBanner from "../../components/VideoBanner/VideoBanner";
import Structure from "../../components/Structure/Structure";
import Contact from "../../components/Contact/Contact";
import {HashLink} from "react-router-hash-link";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCourse} from "../../redux/courseReducer";
import CourseSlider from "../../components/Sliders/CourseSlider/CourseSlider";
import Preloader from "../../components/Preloader/Preloader";

const Course = () => {
    const dispatch = useDispatch()
    let slug = useParams()
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        dispatch(getCourse(slug.name))
    }, [slug.name])
    const course = useSelector(state => state.coursePage.course)
    if (!course) {
        return <Preloader/>
    }
    return (
        <div className="container">
            <div className="course">
                <Header/>
                <div className='mainBanner'>
                    <div className="bannerText">
                        <h1>Курс по {course.title}</h1>
                        <h2>Ментор {course.teacher.full_name}</h2>
                        <p>{course.teacher.description}</p>
                        <HashLink smooth to="#contact">
                            <button>Записаться на пробный урок</button>
                        </HashLink>
                        <div className="price">
                            <h3><img src={clock} alt="Clock"/>Длительность: {course.duration}</h3>
                            <h3><img src={cool} alt="Cool"/>Стоимость: {course.price} сум в месяц</h3>
                        </div>
                    </div>
                    <div className="bannerImage">
                        <img src={course.teacher.image} alt="Banner"/>
                    </div>
                </div>
                <Week/>
                <Structure/>
                <CourseSlider slug={slug.name}/>
                <VideoBanner/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Course;
