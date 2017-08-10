import AllCourse from './AllCourse.vue'
import './allcourse.scss'

if(MULTY){
    AllCourse.install = Vue => Vue.component(AllCourse.name, AllCourse)
}
export default AllCourse
