<template lang="html">
    <section>
      <v-header :on='1'></v-header>
      <slider></slider>
      <will-course></will-course>
      <allclasses-vue :index='true'></allclasses-vue>
      <smalltab-vue></smalltab-vue>
      <footertop-vue></footertop-vue>
      <footer-vue></footer-vue>
      <all-course></all-course>
    </section>
</template>

<script>
export default {
  data(){
      return {
        pageNum:1
      }
  },
  mounted(){
    // setTimeout(()=>this.pageNum = 2,3000)
  }
}
</script>
