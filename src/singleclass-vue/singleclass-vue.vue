<template lang="html">

  <div class = "basic-class-item" @click='gocourse'>
    <div class="basic-class-item-pic">
      <img :src="classpic" style="width:280px;height:163.3px" onerror="javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';">
    </div>
    <div class="basic-class-item-info">

        <div class="class-title">
          {{classtitle}}
        </div>

        <div class="register-num">
          <!-- {{classamount||0}}人已报名 -->
          {{category}}
        </div>

        <div class="class-evaluate"></div>

        <div v-show='classheadpic' class="class-head">
          <img :src="classheadpic" style="width:24px;height:24px;border-radius:12px;">
        </div>

        <div class="class-name">
          {{classname}}
        </div>

        <!-- <div class="class-price" v-bind:class="{'orange':notFree(classprice)}">
          {{classprice}}
        </div> -->
        <div v-if='free' class="class-price">
          免费
        </div>
        <div v-else-if='classprice' class="class-price orange">
          ¥{{classprice}}
        </div>

    </div>


  </div>

</template>

<script>
export default {
  name: 'singleclass-vue',
  props:['classtitle','classamount','classevaluate','classname','classprice','classpic','classheadpic','id','free','category'],
  methods: {
    //设置价格部分的样式 免费绿色,不免费为橘黄色
    notFree: function(x) {
      return x != '免费';
    },
    gocourse(){
      if(this.id)
      location.href=`#/course/${this.id}`
    }
  },
}
</script>
