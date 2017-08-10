import Allclasses from './allclasses-vue'
import './allclasses-vue.scss'

if(MULTY){
    Allclasses.install = Vue => Vue.component(Allclasses.name, Allclasses)
}
export default Allclasses
