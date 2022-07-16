<template>
  <div class="layout">
    <div class="page">
      <slot></slot>
    </div>
    <GlobalNav></GlobalNav>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout'
}
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.page {
  border: 1px solid green;
  flex-grow: 1;
}
</style>
