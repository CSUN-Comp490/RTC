<template>

  <!--TODO:
      how to glyphicons
      how to images
      float .link right?
      -->

  <nav class="navbar navbar-toggleable-sm navbar-inverse bg-inverse col-xs-12" style="background-color: #0a1d3b;">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--TODO: Retica brand logo here-->
    <button class="navbar-brand nav-item col-sm-offset-1">
      <span class="home" v-on:click="navigateTo({name: 'root'})">Retica</span>
    </button>

    <div class="collapse navbar-collapse container" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto ">

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn" flat to="login" class="nav-item link">
            <!--TODO: Glyphicon for login?-->
            Log In
          </button>
        </li>

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn" flat to="register" class="nav-item link">
            <!--TODO: glyphicon for register? -->
            Register
          </button>
        </li>

        <li class="nav-item pull-right">
          <button v-if="$store.state.isUserLoggedIn" flat @click="logout" class="nav-item link">
            <!--TODO: glyphicon for logout? -->
            Log Out
          </button>
        </li>

      </ul>
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
    padding: 5px 10px;
  }
  .home:hover{
    background-color: #3373ed;
    border-radius: 10px;
  }
  nav {
    /*display: inline;*/
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
    padding: 5px 10px;
  }
  .navbar-toggler {
    /*background-color: white;*/
    padding: 5px;
    border-radius: 5px;
  }
  .link {
    font-size: 1.2em;
  }
  .link:hover {
    background-color: #3373ed;
    border-radius: 5px;
  }
</style>
