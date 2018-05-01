<template>
  <!--TODO:
    background
    logo side
    repeating image tile for background?
    -->

  <div id="login container-fluid" class="varela" v-bind:style="{ backgroundImage: 'url(' + backgroundtile + ')' }">

    <form class=" login__form col-sm-12 col-xs-12 col-md-8 col-lg-6 col-xl-6 col-sm-offset-0 col-xs-offset-0 col-md-offset- col-lg-offset-3 col-xl-offset-3 align-middle ">

      <div class=" login__innerContainer">

        <h1 class="login__heading">Login</h1>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="Email" v-model="email" placeholder="email" size="30"
                 class="email inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Password" type="password" v-model="password" placeholder="password" size="30"
                 class="password input raleway--regular"> <br>
        </div>



        <div class="error" v-html="error"></div> <br>

        <div class="login__loginButton">
          <button class="btn varela" v-on:click="login">Login</button>
        </div>

        <!--Only needed if links "Forgot Password" and extra clickable Register links are needed?-->
        <!--<div class="login__extraLinks pull-right invisible">-->
          <!--<p><a href="" class="login__forgotPassword">Forgot password?</a></p>-->

          <!--<p><a href="" class="pull-right" v-on:click="navigateTo({name: 'register'})">Register</a></p>-->
        <!--</div>-->

      </div>

    </form>
  </div>

</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      backgroundtile: '../assets/backgroundTile.png',
      response: null
    }
  },
  methods: {
    async login () {
      try {
        console.log(123)
        this.response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
          .then((response) => {
            console.log('this is it')
            this.response = response
          })
          .catch((err) => {
            console.log('error')
            this.error = err
            // return err
          })
        console.log('maybe?')
      } catch (error) {
        console.log(456)
        this.error = error
      }
      console.log('made it')
      console.log(this.response)
      window.localStorage.setItem('userToken', JSON.stringify(this.response))
      // window.localStorage.setItem('userToken', this.response)
      // Test token from server
      var responseToken = window.localStorage.getItem('userToken')
      console.log(responseToken)
      // this.$store.dispatch('setToken', response.data.token)
      // this.$store.dispatch('setUser', response.data.user)
      // this.$store.dispatch('setRole', response.data.role)
      // Redirect to respective page based on role
      var routeName = null
      console.log(this.response)
      console.log('here?')
      var userRole = this.response
      var username = this.response.username
      if (userRole === 'admin') {
        routeName = 'admin'
      } else if (userRole === 'captionist') {
        routeName = 'captionist'
      } else {
        routeName = 'student'
      }
      // Push page - similar to router-link :to'...'
      this.$router.push({
        name: routeName,
        // retica.cc/#/routeName/username
        params: {
          username
        }
      })
    }
  },
  components: {
    Panel
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login {
    /*-- background color for, well... background. after figuring out container first*/
    background-color: #1F286A;
    background-size: auto;
    background-repeat: repeat;
  }
  .login__form {
    background-color: #fff;
    border-radius: 20px;
    padding: 60px;
    text-align: left;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 51, 0.4);
    top: 60px;
  }
  .login__heading {
    font-size: 3em;
    margin-bottom: 50px;
  }
  .form-group {
    margin-bottom: 30px;
  }
  .login__loginButton {
    margin-left: -10px;
  }
  .login__extraLinks {
    margin-top: 10px;
  }



  input {
    background-color: #fff;
    padding: 8px 15px;
    border: 1px solid #bbb;
    border-radius: 8px;
  }
  button {
    /*!important overrides the bootstrap stylings! */
    border-radius: 6px;
    background-color: #0A1D3B !important;
    color: #fff !important;
  }
  a {
    color: #1F286A;
  }

</style>
