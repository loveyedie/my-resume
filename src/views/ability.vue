<template>
  <div class="content-box">
    <MyAbility />
  </div>
</template>

<script>
// @ is an alias to /src
import MyAbility from '@/components/myAbility.vue'

export default {
  name: 'Work',
  components: {
    MyAbility
  }
}
</script>

<style scoped lang="scss">
.content-box{
  padding: 10px 50px;
}
</style>
