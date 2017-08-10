<template>
  <div class="Group">
      <v-header :on='1'></v-header>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <!-- <div class="swiper-slide" v-for='itm in items' @click='to(itm.link)'>-->
              <div class="swiper-slide" v-for='itm in items' >
                  <!-- <a href="javascript:;" @click='to(itm.link)'></a> -->
                  <em :style='{backgroundImage:"url("+itm.image_url+")"}'></em>
              </div>
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import VHeader from '../header'

import '../../node_modules/swiper/dist/css/swiper.min.css'

export default {
    name: 'slider',
    components(){
      VHeader
    },
    // methods: {
    //     to(link) {
    //         location.href = link;
    //     }
    // },
    data() {
        return {
            items: [],
        }
    },
    mounted() {
        fetch('/api/coulson/mobile/banner/list?type=pc_home_setting').then(data => data.json()).then(re => this.items = re.data).then(() => {
          let swiperpage = {
            paginationClickable: true,
            autoplayDisableOnInteraction : false,
            preventClicks : false,//默认true
            onClick:swiper=>{
                const item = this.items;
                window.open(item[(swiper.activeIndex-1)%item.length].link)
            }
          }
          if(this.items.length>1){
            Object.assign(swiperpage,{
              autoplay: 5000,
              loop: true,
              pagination: '.swiper-pagination',
            })
          }else{
            Object.assign(swiperpage,{
              allowSwipeToNext : false,
              allowSwipeToPrev : false,
            })
          }
            new Swiper('.swiper-container', swiperpage);
        })
    }
}
</script>
