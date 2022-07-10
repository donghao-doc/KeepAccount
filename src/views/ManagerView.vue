<template>
  <div class="manager-container">
    <div class="manager-page">
      manager-view
    </div>
    <GlobalNav></GlobalNav>
  </div>
</template>

<script>
export default {
  name: 'ManagerView'
}
</script>

<style scoped>
.manager-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}

.manager-page {
  border: 1px solid green;
  flex-grow: 1;
}
</style>
