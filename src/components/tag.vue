<template>
  <div class="tag_container" @click="emit('click')">
    <div class="close" @click.stop="closeHandler">x</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closed','click'])
const closeHandler = () => {
  emit('closed')
}
</script>

<style scoped>
.tag_container {
  position: relative;
  height: 22px;
  border: 1px solid rgb(196, 196, 196);
  padding: 0 24px 0 16px;
  color: black;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor:pointer
}
.close {
  position: absolute;
  top: 3px;
  right: 4px;
  line-height: 13px;
  text-align: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  color: black;
  z-index: 100;
}
.close:hover {
  background-color: rgb(184, 184, 184);
}
</style>