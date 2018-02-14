<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Register">
          <form name="retica-form" autocomplete="off">
            <v-text-field label="First Name" v-model="firstName"/>
            <v-text-field label="Last Name" v-model="lastName"/>
            <v-text-field label="Email" v-model="email"/> <br>
            <v-text-field label="School" v-model="school"/> <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"/>
            <v-text-field
              label="Repeat Password"
              type="password"
              autocomplete="new-password"/>
          </form>
          <br>
          <div class="error" v-html="error"></div> <br>
          <v-btn class="blue" v-on:click="register">Register</v-btn>
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
      firstName: '',
      lastName: '',
      school: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          school: this.school,
          email: this.email,
          password: this.password
        })
        // this.$store.dispatch('setToken', response.data.token)
        // this.$store.dispatch('setUser', response.data.user)
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
  .error{

  }
</style>
