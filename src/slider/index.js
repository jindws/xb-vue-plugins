import Slider from './slider.vue'
import './slider.scss'

if(MULTY){
    Slider.install = Vue => Vue.component(Slider.name, Slider)
}
export default Slider
