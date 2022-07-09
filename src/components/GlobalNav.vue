<template>
  <div>
    <router-link v-for="item in routes" :key="item.name" :to="item.path">
      {{ item.meta.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GlobalNav',
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

<style scoped>

</style>
