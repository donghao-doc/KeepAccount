<template>
  <div class="container">
    <router-link
      v-for="item in routes" :key="item.name"
      :to="item.path" class="item"
    >
      <van-icon :name="item.meta.icon" :class="['icon', {'active': item.name === currentItem}]"/>
      {{ item.meta.title }}
    </router-link>
    <button>
      <van-icon name="add" class="icon"/>记账
    </button>
    <div class="line-box">
      <i></i><i></i><i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalNav',
  data() {
    return {
      routes: [],
      currentItem: '',
    }
  },
  mounted() {
    this.transRouteToNav()
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal) {
        this.currentItem = newVal.name
      }
    }
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

<style scoped lang="scss">
.container {
  // border: 1px solid red;
  color: #000;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 100px; // 删掉
}

.item {
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child { margin-left: 10px; }
  &:last-of-type { margin-right: 10px; }
  &:nth-child(2) { margin-right: 40px; }
  &:nth-child(3) { margin-left: 40px; }

  > .icon {
    color: #999;
    font-size: 1.8em;

    &.active {
      color: #99CC33;
    }
  }
}

button {
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  > .icon {
    font-size: 3em;
    color: #99CC33;
  }
}

.line-box {
  width: 200%;
  height: 1px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: -50%;
  top: 8px;
  transform: scale(0.5);
  > i {
    width: calc((100% - 112px) / 2);
    height: 1px;
    background: #aaa;
    &:nth-child(1), &:nth-child(3) { margin-top: -20px; }
    &:nth-child(2) {
      width: 110px;
      height: 110px;
      background: none;
      border: 2px solid #aaa;
      border-radius: 40%;
      border-bottom: none;
      border-left: none;
      position: absolute;
      left: 50%;
      bottom: -53px;
      transform: translateX(-50%) rotate(-45deg);
    }
  }
}
</style>
