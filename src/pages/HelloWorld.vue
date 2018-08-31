<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>token:{{token}}</p>
    <p>用户信息:{{JSON.stringify(userInfo)}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    computed: {
      ...mapGetters(['userInfo', 'token']),
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    width: 100%;
  }
</style>
