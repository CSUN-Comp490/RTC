<template>

  <!--TODO:
      white glyphicons
      -->

  <nav class="navbar navbar-toggleable-sm py-0 navbar-inverse bg-inverse col-xs-12 py-0" style="background-color: #0A1D3B;">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="nav__logo col-sm-offset-1 hidden-sm-down home">
      <button class="">
        <img src="../assets/reticaLogoInverted.png" alt="Retica logo" class="img-fluid navbar-brand" v-on:click="navigateTo({name: 'root'})">
      </button>
    </div>

    <button class=" col-sm-offset-1 hidden-md-up">
        <span class="mobileLogo navbar-brand" v-on:click="navigateTo({name: 'root'})">
          <img src="../assets/reticaLogoGraphicInverted.png" alt="Retica logo" class="nav__logoGraphic img-fluid pull-left">
        </span>
    </button>

    <div class="collapse navbar-collapse container" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto pull-right header__list">

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn" flat to="login" class="nav-item link">
            <span class="glyphicon glyphicon-log-in"></span>
            Log In
          </button>
        </li>

        <li class="nav-item">
          <button v-on:click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn" flat to="register" class="nav-item link">
            <span class="glyphicon glyphicon-modal-window"></span>
            Register
          </button>
        </li>

        <li class="nav-item pull-right">
          <button v-if="$store.state.isUserLoggedIn" flat @click="logout" class="nav-item link">
            <span class="glyphicon glyphicon-log-out"></span>
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
        this.$store.dispatch('setRole', null)
        this.$router.push({
          name: 'root'
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
    background-color: #0A1D3B !important;
    position: fixed;
    top: 0;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.20);
    z-index: 1000;
    padding-bottom: 10px;
  }
  .nav__logo {
    width: 200px;
    height: 50px;
    position: relative;
    margin-bottom: 20px;
  }
  .nav__logo img {
    max-width: 100%;
    width: auto;
    height: auto;
    overflow: hidden;
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

  .header__list {
    padding-right: 8%;
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
  .glyphicon {
    width: 30px;
    height: 30px;
    /*color: #ffffff !important;*/
    margin-right: 10px;
  }
  .glyphicon--white {
    color: #fff !important;
    fill: #fff !important;
  }
</style>
