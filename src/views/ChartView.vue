<template>
  <div class="chart-container">
    <div class="chart-page">
      chart-view
    </div>
    <GlobalNav></GlobalNav>
  </div>
</template>

<script>
export default {
  name: 'ChartView'
}
</script>

<style scoped lang="scss">
.chart-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}

.chart-page {
  border: 1px solid green;
  flex-grow: 1;
}
</style>
