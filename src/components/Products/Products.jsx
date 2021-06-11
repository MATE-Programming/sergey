import './Products.scss'
import {Link} from 'react-router-dom'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getListCourses} from "../../redux/courseReducer";
import Preloader from "../Preloader/Preloader";

const Products = () => {
    const dispatch = useDispatch()
    const listCourses = useSelector(state => state.coursePage.listCourses)
    useEffect(() => {
        if(!listCourses){
            dispatch(getListCourses())
        }
    }, [])
    if (!listCourses) {
        return <Preloader/>
    }
    return (
        <div className="container">
            <div className='products'>
                <h2 className="title">Наши продукты</h2>
                <div className="products-container">
                    {listCourses.map((c, key) => <Link key={key} to={`/course/${c.slug}`}>
                        <img src={c.image} alt={c.slug}/>
                    </Link>)}
                </div>
            </div>
        </div>
    )
}

export default Products;
