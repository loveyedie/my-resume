<template>
  <div id="app">
    <MyHeader />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from './components/myheader.vue'

export default {
  name: 'indexPage',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
#app {
  width: 1160px;
  margin: 0 auto;
}

</style>
