<template>
  <p v-show="st" @click="change"> 加载中... </p>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default{
    data () {
      return {}
    },
    computed: {
      st () {
        console.log('this.$store.loadingState', this.$store.state.loadingState)
        return this.$store.state.loadingState
      }
    },
    methods: {
      ...mapMutations([
        'change'
      ])
    }
  }
</script>

<style scoped>
  p{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    width: 200px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: #ff8989;
    opacity: 0.5;
    color: black;
    font-size: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>

