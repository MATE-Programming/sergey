import * as axios from 'axios'
// import i18next from 'i18next';

const instance = axios.create({
    baseURL: 'https://api.mate-edu.io/',
    // withCredentials: true,
})

// instance.interceptors.request.use(config => {
//     config.headers['Accept-Language'] = i18next.language;
//     return config;
// })

export const courseAPI = {
    getCourses() {
        return instance.get(`course/list`).then((data) => {
            return data.data
        })
    },
    getCourseDetail(slug) {
        return instance.get(`course/${slug}`).then((data) => {
            return data.data
        })
    },
    getReviews() {
        return instance.get(`feedback/list`).then((data) => {
            return data.data
        })
    },
    getSlider(slug) {
        return instance.get(`course/${slug}/slider/list`).then((data) => {
            return data.data
        })
    },
}

export const contactAPI = {
    sendEmail(body) {
        return instance.post(`request/create`, body).then((data) => {
            return data.data
        })
    },
}