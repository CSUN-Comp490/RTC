<!--
<div id="register" class="varela">

    <form class=" register__form col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right align-middle">

      <div class=" register__innerContainer ">

        <h1 class="register__heading">Register</h1>
        <div class="form-group">
          <p>First name</p>
          <input type="text" label="First name" v-model="firstName" placeholder="first name" size="30"
                 class="firstName inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Last name</p>
          <input type="text" label="Last name" v-model="lastName" placeholder="last name" size="30"
                 class="lastName inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="Email" v-model="email" placeholder="email" size="30"
                 class="email inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="School" v-model="school" placeholder="school" size="30"
                 class="school inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Password" type="password" v-model="password" autocomplete="new-password" placeholder="password" size="30"
                 class="password input raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Repeat Password" type="password" autocomplete="new-password" placeholder="repeat password" size="30"
                 class="repeatPassword input raleway--regular"> <br>
        </div>
      </div>
    </form>
  </div>-->

<template>
  <div id="register" class="varela">

    <form class=" register__form col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right align-middle">

      <div class=" register__innerContainer ">

        <h1 class="register__heading">Register</h1>
        <div class="form-group">
          <p>First name</p>
          <input type="text" label="First name" v-model="firstName" placeholder="first name" size="30"
                 class="firstName inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Last name</p>
          <input type="text" label="Last name" v-model="lastName" placeholder="last name" size="30"
                 class="lastName inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="Email" v-model="email" placeholder="email" size="30"
                 class="email inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="School" v-model="school" placeholder="school" size="30"
                 class="school inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Password" type="password" v-model="password" autocomplete="new-password" placeholder="password" size="30"
                 class="password input raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Repeat Password" type="password" autocomplete="new-password" placeholder="repeat password" size="30"
                 class="repeatPassword input raleway--regular"> <br>
        </div>
      </div>
    </form>

          <br>
          <div class="error" v-html="error"></div> <br>

        <button class="btn varela" v-on:click="register">Register</button>
          <!--<v-btn class="blue" v-on:click="register">Register</v-btn>-->
    </div>



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
