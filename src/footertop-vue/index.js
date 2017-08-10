import Footertop from './Footertop.vue'
import './footertop.scss'

if(MULTY){
    Footertop.install = Vue => Vue.component(Footertop.name, Footertop)
}
export default Footertop
