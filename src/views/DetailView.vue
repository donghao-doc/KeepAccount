<template>
  <div class="detail-container">
    <div class="detail-page">
      detail-view
    </div>
    <GlobalNav></GlobalNav>
  </div>
</template>

<script>
export default {
  name: 'DetailView'
}
</script>

<style scoped lang="scss">
.detail-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}

.detail-page {
  border: 1px solid green;
  flex-grow: 1;
}
</style>
