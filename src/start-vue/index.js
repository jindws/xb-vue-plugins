

import Start from './Start.vue'
import './start.css'

if(MULTY){
    Start.install = Vue => Vue.component(Start.name, Start)
}
export default Start
