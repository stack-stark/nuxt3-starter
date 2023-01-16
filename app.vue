<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document.getElementsByTagName('html')[0].classList.add('notranslate');
})
</script>

<style lang="less">
@import './style.less';
@import './animate.css';
</style>