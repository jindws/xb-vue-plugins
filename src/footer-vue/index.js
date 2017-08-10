import Footer from './Footer.vue'
import './footer.css'

if(MULTY){
    Footer.install = Vue => Vue.component(Footer.name, Footer)
}
export default Footer
