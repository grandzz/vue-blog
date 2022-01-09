<template>
  <iv-menu mode="horizontal" theme="light" active-name="1">
    <div class="header-nav">
      <iv-menu-item name="1">首页</iv-menu-item>
      <iv-menu-item name="2">文章归档</iv-menu-item>
      <iv-menu-item name="3">默认分类</iv-menu-item>
      <iv-menu-item name="4">关于</iv-menu-item>
    </div>
  </iv-menu>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>
.ivu-menu {
  opacity: 80%;
}

.header-nav {
  width: 420px;
  margin: 0 auto;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active {
  color: #e67474;
  border-bottom: coral solid 5px;
}

.ivu-menu .header-nav .ivu-menu-item:hover {
  color: #e67474;
  border-bottom: coral solid 5px;
}
</style>
