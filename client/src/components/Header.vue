<template>
  <nav class="navbar fixed-top navbar-collapse varela">
    <div class="navbar-brand col-sm-2 col-sm-offset-1 home nav-item">
      <span v-on:click="navigateTo({name: 'root'})">Retica</span>
    </div>

    <!--<v-spacer></v-spacer>-->

    <div class="">
      <v-btn v-if="!$store.state.isUserLoggedIn" flat router to="login" class="nav-item">
        Log In
      </v-btn>

      <span class="nav-divider"> | </span>

      <v-btn v-if="!$store.state.isUserLoggedIn" flat router to="register" class="nav-item">
        Register
      </v-btn>


      <v-btn v-if="$store.state.isUserLoggedIn" flat @click="logout" class="nav-item ">
        Log Out
      </v-btn>

    </div>

  </nav>
</template>

<script>
  export default{
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        // TODO: Redirect to homepage
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    cursor: pointer;
  }
  .home:hover{
    color: #000;
  }
  nav {
    display: inline;
    position: fixed;
    top: 0;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 5px 5px #aaa;
  }
  .navbar {
    background-color: #0a1d3b;
  }
  .nav-item {
    color: #ffffff;
  }
  .nav-divider {
    color: #fff;
    font-family: garamond;
    font-size: 2em;
    font-weight: 100;
  }
</style>
