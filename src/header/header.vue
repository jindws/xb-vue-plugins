<template lang="html">
  <section class='myheader' :class='{nobg:on===1}'>
      <dl>
        <dt></dt>
        <dd :class='{on:on===1}' @click='toindex'>首页</dd>
        <dd :class='{on:on===2}' @click='toall'>全部课程</dd>
      </dl>
  </section>
</template>

<script>
export default {
  name:'v-header',
  props:['on'],
  methods:{
    toall(){
        location.href='#/courselist';
    },
    toindex(){
        location.href='#/';
    }
  }
}
</script>

<style lang="css">
</style>
