<template>
  <div class="wrapper-all">
    <AfHeader></AfHeader>
    <div class="main">
      <router-view></router-view>
    </div>
    <AfFooter></AfFooter>

    <AfPopups></AfPopups>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<!--<style lang="scss" src="./assets/styles/style.scss">-->

<!--</style>-->