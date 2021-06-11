//Action Type
import {contactAPI, courseAPI} from "../api/api";

const SET_COURSE = 'mate/courseReducer/SET_COURSE'
const SET_LIST_COURSES = 'mate/courseReducer/SET_LIST_COURSES'
const SET_REVIEWS = 'mate/courseReducer/SET_REVIEWS'
const SET_SLIDER = 'mate/courseReducer/SET_SLIDER'


let initialState = {
    course: '',
    listCourses: '',
    reviews: '',
    slider: ''
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE:
            return {
                ...state,
                course: action.data
            }
        case SET_LIST_COURSES:
            return {
                ...state,
                listCourses: action.data
            }
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.data
            }
        case SET_SLIDER:
            return {
                ...state,
                slider: action.data
            }
        default:
            return state
    }
}

//Action Creators
let setCourse = (data) => ({type: SET_COURSE, data})
let setListCourses = (data) => ({type: SET_LIST_COURSES, data})
let setReviews = (data) => ({type: SET_REVIEWS, data})
let setSlider = (data) => ({type: SET_SLIDER, data})
let setClearSlider = (data) => ({type: SET_SLIDER, data})

//Thunk
export let getCourse = (slug) => async (dispatch) => {
    let data = await courseAPI.getCourseDetail(slug)
    dispatch(setCourse(data))
    return data
}

export let getListCourses = () => async (dispatch) => {
    let data = await courseAPI.getCourses()
    dispatch(setListCourses(data))
    return data
}

export let sendEmail = (body) => async () => {
    await contactAPI.sendEmail(body)
}

export let getReviews = () => async (dispatch) => {
    let data = await courseAPI.getReviews()
    dispatch(setReviews(data))
    return data
}

export let getSlider = (slug) => async (dispatch) => {
    let data = await courseAPI.getSlider(slug)
    dispatch(setSlider(data))
    return data
}

export let clearSlider = () => async (dispatch) => {
    dispatch(setClearSlider(''))
}


export default courseReducer
