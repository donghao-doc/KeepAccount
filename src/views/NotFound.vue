<template>
  <div class="container">
    <div id="notFound"></div>
    <van-button
        type="primary" text="首页" color="#99CCFF" icon="wap-home" plain round
        to="/" replace
        class="button"
    ></van-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    const script = document.createElement('script')
    script.src = '//volunteer.cdn-go.cn/404/latest/404.js'
    script.setAttribute('rendertarget', 'notFound')
    document.body.appendChild(script)
  }
}
</script>

<style scoped>
.button {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
