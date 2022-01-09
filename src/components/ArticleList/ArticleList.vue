<template>
  <div class="article-list-wrapper">
    <div class="article-box" v-for="item in 8" :key="item">
      this is text
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data: () => ({

  })
}
</script>

<style scoped>
.article-box {
  clear: both;
}

</style>
