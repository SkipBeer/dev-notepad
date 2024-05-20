import axios from "axios";

export const CourseService = {
    async getCourses() {
        const response = await axios.get('http://localhost:8080/courses')
        return response.data
    },

    async getCourse(id) {
        const response = await axios.get(`http://localhost:8080/courses/${id}`)
        return response.data
    },

    async addComment(id, comment) {
        const response = await axios.post(`http://localhost:8080/courses/${id}`, comment)
        return response.data
    },

    async createCourse(newCourse) {
        const response = await axios.post('http://localhost:8080/courses', newCourse)
        return response.data
    },

    async deleteComment(courseId, commentId) {
        const response = await axios.delete(`http://localhost:8080/courses/${courseId}/${commentId}`)
    }
}