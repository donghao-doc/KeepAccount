<template>
  <div id="app">
    <router-view/>
    <hr>
    <router-link v-for="item in routes" :key="item.name" :to="item.path">
      {{ item.meta.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    this.transRouteToNav()
  },
  methods: {
    transRouteToNav() {
      const routes = this.$router.options.routes.filter(item => item.meta !== null && item.meta !== undefined)
      routes.sort((a, b) => a.meta.position - b.meta.position)
      this.routes = routes
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
