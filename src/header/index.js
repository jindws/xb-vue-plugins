import Header from './header.vue'
import './header.scss'

if(MULTY){
    Header.install = Vue => Vue.component(Header.name, Header)
}
export default Header
