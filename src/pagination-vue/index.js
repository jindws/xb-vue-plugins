import Pagination from './pagination-vue'
import './pagination-vue.css'

if(MULTY){
    Pagination.install = Vue => Vue.component(Pagination.name, Pagination)
}
export default Pagination
