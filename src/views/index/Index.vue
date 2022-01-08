<template>
  <div class="main-wrapper">
    <MyHeader></MyHeader>
    <router-view name="content"></router-view>
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
  }
}
</script>

<style scoped>

</style>
