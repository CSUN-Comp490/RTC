<template>
  <!--TODO:
    background
    logo side
    repeating image tile for background?
    -->

  <div id="login container-fluid" class="varela" v-bind:style="{ backgroundImage: 'url(' + backgroundtile + ')' }">

    <div class=" login__form col-sm-12 col-xs-12 col-md-8 col-lg-6 col-xl-6 col-sm-offset-0 col-xs-offset-0 col-md-offset- col-lg-offset-3 col-xl-offset-3 align-middle ">

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

        <div class="form-group">
          <p>Role</p>
          <select label="Role" v-model="token" class="role inputs raleway--regular" required>
            <option value="" disable selected hidden>select role</option>
            <option value="Student">student</option>
            <option value="Captionist">captionist</option>
            <option value="Admin">admin</option>
          </select>
        </div>


        <div class="error" v-html="error"></div> <br>

        <div class="login__loginButton">
          <!-- <button class="btn varela" >Login</button> -->
          <button class="btn varela" v-on:click="login" onclick="this.blur()">Login</button>
        </div>

        <!--Only needed if links "Forgot Password" and extra clickable Register links are needed?-->
        <!--<div class="login__extraLinks pull-right invisible">-->
          <!--<p><a href="" class="login__forgotPassword">Forgot password?</a></p>-->

          <!--<p><a href="" class="pull-right" v-on:click="navigateTo({name: 'register'})">Register</a></p>-->
        <!--</div>-->

      </div>

    </div>
  </div>

</template>



<script>
// import AuthenticationService from '@/services/AuthenticationService'
import store from '@/store/store'
import router from '@/router/index'
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  beforeCreate () {
    console.log('store', store)
    console.log('router', router)
  },
  data () {
    return {
      email: '',
      password: '',
      token: '',
      error: null,
      backgroundtile: '../assets/backgroundTile.png',
      user: null
    }
  },
  methods: {
    async login () {
      AuthenticationService.login({
        email: this.email,
        password: this.password,
        token: this.token
      })
        .then(response => {
          console.log(response)
          this.user = response
          // console.log(JSON.parse(this.user.token))
          // window.localStorage.setItem('userToken', this.user.token)
          window.localStorage.setItem('userToken', JSON.stringify(this.user))
          // Test token from server
          var responseToken = window.localStorage.getItem('userToken')
          store.dispatch('setToken', responseToken)
          store.dispatch('setUser', this.user)
          store.dispatch('setRole', 'student')
          store.dispatch('setClasses')
          // Redirect to respective page based on role
          var routeName = null
          var userRole = this.user.token
          if (userRole === 'admin') {
            routeName = 'admin'
          } else if (userRole === 'captionist') {
            routeName = 'captionist'
          } else if (userRole === 'student') {
            routeName = 'student'
          }
          console.log(this.user.id)
          // Push page - similar to router-link :to'...'
          router.push({
            name: routeName,
            // retica.cc/#/routeName/username
            params: {
              id: this.user.id
            }
          })
        })
        .catch((error) => {
          console.log(error)
          try {
            this.error = error.response.data.error
          } catch (error) {
            this.error = 'Login Failed Unexpectedly'
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
  .btn {
    padding-top: 7px;
  }
  .btn:focus {
    outline: none;
  }
  input, select {
    background-color: #fff;
    padding: 8px 15px;
    border: 1px solid #bbb;
    border-radius: 8px;
    outline: none;
  }
  input:focus {
    background-color: #d4ecff;
  }
  select:focus {
    background-color: #d4ecff;
  }
  select {
    width: 257px;
  }
  select:invalid {
    color: #6f706b;
  }
  button {
    /*!important overrides the bootstrap stylings! */
    border-radius: 6px;
    background-color: #0A1D3B !important;
    color: #fff !important;
  }
  button:hover {
    background-color: #3373ed !important;
  }
  button:focus {
    outline: none;
  }
  a {
    color: #1F286A;
  }
</style>
