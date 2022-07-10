<template>
  <div class="setting-container">
    <div class="setting-page">
      setting-view
    </div>
    <GlobalNav></GlobalNav>
  </div>
</template>

<script>
export default {
  name: 'SettingView'
}
</script>

<style scoped>
.setting-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}

.setting-page {
  border: 1px solid green;
  flex-grow: 1;
}
</style>
