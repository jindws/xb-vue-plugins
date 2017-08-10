import Smalltab from './smalltab.vue'
import './smalltab.scss'

if(MULTY){
    Smalltab.install = Vue => Vue.component(Smalltab.name, Smalltab)
}
export default Smalltab
