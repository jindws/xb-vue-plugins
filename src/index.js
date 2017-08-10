import StarVue from './start-vue'
import WillCourse from './will-course'
import FooterVue from './footer-vue'
import FooterTopVue from './footertop-vue'
import Slider from './slider'
import AllCourse from './all-course'

const install = Vue => {
    Vue.component(StarVue.name, StarVue);
    Vue.component(WillCourse.name, WillCourse);
    Vue.component(FooterVue.name, FooterVue);
    Vue.component(FooterTopVue.name, FooterTopVue);
    Vue.component(Slider.name, Slider);
    Vue.component(AllCourse.name, AllCourse);
}

export default install
