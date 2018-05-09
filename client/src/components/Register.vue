<template>
  <div id="register" class="varela">

    <div class=" register__form col-sm-12 col-xs-12 col-md-8 col-lg-6 col-xl-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-3 col-lg-offset-3 col-xl-offset-3  align-middle">

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
          <p>Role</p>
          <select label="Role" v-model="role" class="role inputs raleway--regular" required>
            <option value="" disabled selected hidden>select your role</option>
            <option value="Student">student</option>
            <option value="Captionist">captionist</option>
            <option value="Admin">admin</option>
          </select>
        </div>
        <div class="form-group">
          <p>Email</p>
          <input type="text" label="Email" v-model="email" placeholder="email" size="30"
                 class="email inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>School</p>
          <input type="text" label="School" v-model="school" placeholder="school" size="30"
                 class="school inputs raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Password</p>
          <input label="Password" type="password" v-model="password" autocomplete="new-password" placeholder="password" size="30"
                 class="password input raleway--regular"> <br>
        </div>
        <div class="form-group">
          <p>Confirm password</p>
          <input label="Repeat Password" type="password" autocomplete="new-password" placeholder="confirm password" size="30"
                 class="repeatPassword input raleway--regular"> <br>
        </div>

        <div class="error" v-html="error"></div> <br>

        <button class="btn varela" v-on:click="register()" onclick="this.blur()">Register</button>

        <!--Only needed if extra Login clickable link is needed?-->
        <!--<div class="register__extraLinks pull-right invisible">-->
          <!--<p><a href="" class="pull-right" v-on:click="navigateTo({name: 'login'})">Login</a></p>-->
        <!--</div>-->
      </div>
    </div>
  </div>

</template>

<script>
import store from '@/store/store'
import router from '@/router/index'
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      role: '',
      school: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: null
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        school: this.school,
        email: this.email,
        password: this.password
      })
        .then((response) => {
          this.user = response
          // console.log(JSON.parse(this.user.token))
          // window.localStorage.setItem('userToken', this.user.token)
          window.localStorage.setItem('userToken', JSON.stringify(this.user))
          // Test token from server
          var responseToken = window.localStorage.getItem('userToken')
          store.dispatch('setToken', responseToken)
          store.dispatch('setUser', this.user)
          store.dispatch('setRole', 'student')
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
          this.error = error.response.data.error
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
  #register {
    /*-- background color for, well... background. after figuring out container first*/
    /*background-color: #1F286A;*/
    /*background-color: #fff;*/
  }

  .register__form {
    background-color: #fff;
    border-radius: 20px;
    padding: 60px;
    text-align: left;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 51, 0.4);
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .register__heading {
    font-size: 3em;
    margin-bottom: 50px;
  }

  .form-group {
    margin-bottom: 20px;
  }
  .register__extraLinks {
    margin-top: 10px;
  }
  .btn {
    padding: 8px;
  }
  .btn:focus {
    outline: none;
  }
  /*<!--For the text fields-->*/
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
    /*!important overrides the bootstrap stylings*/
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
