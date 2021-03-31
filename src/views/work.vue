<template>
  <div class="content-box">
    <MyWork />
  </div>
</template>

<script>
// @ is an alias to /src
import MyWork from '@/components/myWork.vue'

export default {
  name: 'Work',
  components: {
    MyWork
  }
}
</script>

<style scoped lang="scss">
.content-box{
  padding: 10px 50px;
}
</style>
