<template>
  <div class="content-wrapper">
    <div class="article-list-wrapper">
      <div class="article-title"><b>我的博客</b></div>
      <div class="article-box" v-for="item in 8" :key="item">
        <iv-row>
          <iv-col span="8">
            <img src="https://img.rosystar.cn/11.png" alt="">
          </iv-col>
          <iv-col span="16"></iv-col>
        </iv-row>
      </div>
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
.article-list-wrapper{
  width: 720px;
  margin-top: 10px;
}

.article-title{
  text-align: left;
  line-height: inherit;
  font-size: 20px;
}

.article-box {
  clear: both;
  margin-top: 10px;
  height: 100%;
  background: white;
  border: #ffffff 1px solid;
  border-radius: 10px;
}

.article-box img{
  width: 280px;
  height: 100%;
}

</style>
