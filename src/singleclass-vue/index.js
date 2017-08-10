import Singleclass from './singleclass-vue.vue'
import './singleclass-vue.scss'

if(MULTY){
    Singleclass.install = Vue => Vue.component(Singleclass.name, Singleclass)
}
export default Singleclass
