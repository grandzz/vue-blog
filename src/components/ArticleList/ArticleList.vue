<template>
  <div class="content-wrapper">
    <iv-card style="width:320px" v-for="(index) in 10" :key="index">
      <div style="text-align:center">
        <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
        <h3>A high quality UI Toolkit based on Vue.js</h3>
      </div>
    </iv-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data: () => ({})
}
</script>

<style scoped>

</style>
