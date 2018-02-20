<template>
  <!--TODO:
    background
    logo side
    repeating image tile for background?
    -->

  <div id="login" class="varela" v-bind:style="{ backgroundImage: 'url(' + backgroundtile + ')' }">

    <form class=" login__form col-md-7 col-lg-6 col-sm-12 col-xs-12 pull-left align-middle">

      <div class=" login__innerContainer ">

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

        <div class="login__extraLinks pull-right">
          <p><a href="" class="login__forgotPassword">Forgot password?</a></p>

          <p><a href="" class="pull-right">Register</a></p>
        </div>





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
      backgroundtile: '../assets/backgroundTile.png'
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
  #login {
    /*-- background color for, well... background. after figuring out container first*/
    background-color: #1F286A;
    background-size: auto;
    background-repeat: repeat;
  }
  .login__form {
    background-color: #fff;
    border-radius: 0px 20px 20px 0px;
    padding: 60px;
    text-align: left;
    display: flex;
    justify-content: center;
    box-shadow: 8px 8px 5px #000033;
    margin-left: -40px;
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
