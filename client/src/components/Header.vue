<template>

  <!--TODO:
      white glyphicons
      -->

  <nav class="navbar navbar-toggleable-sm navbar-inverse bg-inverse col-xs-12" style="background-color: #0A1D3B;">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--TODO: Retica brand logo here-->
    <button class="home  col-sm-offset-1 hidden-sm-down">
        <span class="defaultLogo navbar-brand " v-on:click="navigateTo({name: 'root'})">
          <img src="../assets/reticaLogoInverted.png" alt="Retica logo" class="nav__logo img-fluid ">
        </span>
    </button>

    <button class=" col-sm-offset-1 hidden-md-up">
        <span class="mobileLogo navbar-brand" v-on:click="navigateTo({name: 'root'})">
          <img src="../assets/reticaLogoGraphicInverted.png" alt="Retica logo" class="nav__logoGraphic img-fluid pull-left">
        </span>
    </button>

    <div class="collapse navbar-collapse container" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto pull-right header__list">

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn" flat to="login" class="nav-item link">
            <img src="../assets/svg/si-glyph-sign-in.svg" alt="" class="glyphicon">
            Log In
          </button>
        </li>

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn" flat to="register" class="nav-item link">
            <img src="../assets/svg/si-glyph-note-2.svg" alt="" class="glyphicon">
            Register

          </button>
        </li>

        <li class="nav-item pull-right">
          <button v-if="$store.state.isUserLoggedIn" flat @click="logout" class="nav-item link">
            <img src="../assets/svg/si-glyph-sign-out.svg" alt="" class="glyphicon">
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
    background-color: #0A1D3B !important;
    position: fixed;
    top: 0;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.20);
    z-index: 1000;
  }
  .nav__logo {
    width: 173px;
    height: 41px;
    max-width: none;
  }
  .nav__logoGraphic {
    width: 35px;
    height: 40px;
    max-width: none;
  }
  .mobileLogo:hover {
    background-color: #3373ed;
    border-radius: 10px;
  }
  .navbar {
    background-color: #0a1d3b;
  }
  .header__list {
    padding-right: 8%;
  }
  .nav-item {
    color: #ffffff;
    padding: 5px 10px;
  }
  .navbar-toggler {
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


  .glyphicon {
    width: 30px;
    height: 30px;
    fill: #ffffff !important;
    margin-right: 10px;
  }
</style>
