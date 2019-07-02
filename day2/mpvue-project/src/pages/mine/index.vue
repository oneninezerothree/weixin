<template>
  <div>
    <div v-text="title"></div>
    <input v-model="title" />
    <ul>
      <li v-for="(a,index) in arr" :key="index" v-text="a"></li>
    </ul>
    <button @longtap="testClick">Ok</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '我的页面',
      arr: ['1', '2', '3']
    }
  },
  methods: {
    testClick () {
      this.title = '你好'
    }
  }
}
</script>
<style scoped>
input{
  border: 1px solid red;
}
</style>
