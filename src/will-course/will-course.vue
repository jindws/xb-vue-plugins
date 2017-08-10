<template lang="html">
   <div id="BeginningofClass" v-if="item.length"><!--1-4个皆有可能  -->
      <p id="jjkk">即将开课</p>
      <section id='allcourses'>
        <div id='coursediv' v-for='itm in item'><!--循环产生n个div  -->
          <!-- 当today,tomorrow,start_time皆为false时，显示为敬请期待 -->
          <p v-if="itm[0].today" class="istoday">今日</p>
          <p v-else-if="itm[0].tomorrow">明日</p>
          <p v-else>{{_getDate(itm[0].start_time)}}</p>
          <!-- 图片以及效果 -->
          <section class="courses">
              <figure class="effect-bubba" v-for='it in itm' @click="_click(it._id)">
                <img class="zbicon" src="./zhibo.png"    v-if="it.live">
                <img :src="it.img" alt="无法显示" class='courses__image'>
    						<figcaption>
    							<p>查看课程详情</p>
    						</figcaption>
			        </figure>
          </section>
         <!-- 时间及状态 -->
          <section class='coursetime' v-for='it in itm'>
            <span v-if="it.live" class='on'>正在直播中...</span>
            <span v-else>{{_getDate(it.start_time,true)}}</span>
          </section>
        </div>
        <div v-for='i in (4-len)'>
          <p>敬请期待</p>
          <img v-if="i==1" src="http://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/PC_WILLCOURSE_A.png" alt="">
          <img v-else-if="i==2" src="http://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/PC_WILLCOURSE_B.png" alt="">
          <img v-else src="http://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/PC_WILLCOURSE_C.png" alt="">
        </div>
     </section>
   </div>
</template>

<script>
export default {
  name: 'will-course',
  data(){
    return{
      item:[],
      len:0,
    }
  },
  methods:{
    // 查看详情
    _click(id){
      location.href=`#course/${id}`;
    },
    // 获取数据
    _fetch(){
        fetch('/api/coulson/willcourse').then(data=>data.json()).then(re=>{
            this.item = re.data;
            re.data.map((itm)=>this.len+=itm.length)
        })
    },
    // 获取时间及对应格式
    _getDate(date,time=false){
        const dt = new Date(date);
        const day = dt.getDate();
        const month =dt.getMonth() + 1;
        let local = dt.toLocaleString();
        local = local.substring(local.indexOf(' '));
        local = local.substring(0,local.lastIndexOf(':'));
        return `${month}月${day}日${time?local:''}`;
    }

  },
  mounted(){
    this._fetch()
  }
}
</script>
