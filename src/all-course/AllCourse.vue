<template lang="html">
<section class='allClass'>
  <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部课程" name="全部课程"></el-tab-pane>
      <!-- <el-tab-pane :label="itm" :name="itm" v-for='itm in type'></el-tab-pane> -->
      <el-tab-pane :label="itm" :name="itm" v-for='itm in category'></el-tab-pane>
  </el-tabs>
  <allclassess-vue :pageNum='pageNum' v-on:getcount = 'getCounts' :category='categoryNow'></allclassess-vue>
    <el-pagination :page-size='12'
      v-if='count'
      layout="prev, pager, next"
      @current-change="val=>pageNum=val"
      :total="count">
    </el-pagination>
    <section id='none' v-else>
      <!-- <none></none> -->
      <img src="./none.jpg" alt="">
      这里什么都没有，去别处看看吧
    </section>
</section>
</template>

<script>
import AllclassessVue from '../allclasses-vue'
// import None from './none.vue'

import {Pagination,Tabs,TabPane} from 'element-ui'
export default {
  name:'all-course',
  components:{
      AllclassessVue,
      'el-pagination':Pagination,
      'el-tabs':Tabs,
      'el-tab-pane':TabPane,
      // None,
  },
  data(){
    return{
        pageNum:1,
        count:0,
        type:[],
        category:[],
        activeName: '全部课程',
        categoryNow:'',
    }
  },
  methods:{
    getCounts(val){
        this.count = val;
    },
    handleClick(tab) {
        document.getElementsByClassName('el-tabs__active-bar')[0].style.marginLeft = +tab.index * 40 + 20 +'px';
        this.categoryNow = tab.label === '全部课程'?'':tab.label;
        this.pageNum = 1;
      }
  },
  created(){
      fetch('/api/coulson/get_courses').then(re=>re.json()).then(({data})=>{
        this.type = data.type;
        this.category = data.category;
      })
  }
}
</script>
