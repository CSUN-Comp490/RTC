<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email"/> <br>
    <input type="password" name="password" placeholder="password" v-model="password"/> <br>
    <button v-on:click="register">Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
