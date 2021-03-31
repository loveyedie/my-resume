<template>
  <div class="content-box" @mouseover="handlerMouseEnter()" @mouseout="handlerMouseLeave()">
    <!-- <div @click="handlerMouseEnter">asdfasfsaf</div> -->
    <component :is="componentName"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import MyWork from '@/components/myWork.vue'
import MyAbility from '@/components/myAbility.vue'

export default {
  name: 'Work',
  components: {
    MyWork, MyAbility
  },
  data () {
    return {
      componentName: 'MyAbility',
      componentIndex: 0,
      componentArr: ['MyAbility', 'MyWork'],
      timer: null
    }
  },
  mounted () {
    this.setTimer()
  },
  destoryed () {
    this.clearInterval(this.timer)
  },
  methods: {
    setTimer () {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.componentIndex++
          if (this.componentIndex > 1) this.componentIndex = 0
          this.componentName = this.componentArr[this.componentIndex]
        }, 10 * 1000)
      }
    },
    handlerMouseEnter () {
      console.log('000')
      clearInterval(this.timer)
      this.timer = null
    },
    handlerMouseLeave () {
      console.log('333')
      this.setTimer()
    }
  }
}
</script>

<style scoped lang="scss">
.content-box{
  padding: 10px 50px;
}
</style>
