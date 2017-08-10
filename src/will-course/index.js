import WillCourse from './will-course.vue'
import './will-course.scss'

if(MULTY){
    WillCourse.install = Vue => Vue.component(WillCourse.name, WillCourse)
}
export default WillCourse
