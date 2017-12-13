<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Login">
        <v-text-field label="Email" v-model="email"/> <br>
        <v-text-field label="Password" type="password" v-model="password"/> <br>
        <div class="error" v-html="error"></div> <br>
        <v-btn class="blue" v-on:click="login">Login</v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
