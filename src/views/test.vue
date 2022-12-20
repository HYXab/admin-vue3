<template>
  <div>
    test
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { test } from "@/api/login";
const http = async () => {
  await test()
}
onMounted(()=> {
  http()
})

</script>

<style lang="less" scoped>

</style>