<template>
  <div class="main-wrapper">
    <MyHeader></MyHeader>
    <router-view name="content" class="content-wrapper"></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/header/MyHeader";
import MyFooter from "@/components/footer/MyFooter";

export default {
  name: "Index",
  components: {
    MyHeader,
    MyFooter
  },
  data: () => ({})
}
</script>

<style scoped>
.main-wrapper{
  background: #f1f1f1;
}
.content-wrapper {
  min-height: 600px;
  margin-left: 200px;
}
</style>
