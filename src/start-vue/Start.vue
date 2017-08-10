<template lang="html">
  <div class="block">
    <span class="demonstration">页数较少时的效果</span>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
</div>
</template>

<script>
import {Pagination} from 'element-ui'

export default {
  name:'start-vue',
  components:{
      elPagination:Pagination
  }
}
</script>

<style lang="css">
</style>
