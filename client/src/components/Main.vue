<template>
  <div class="container-fluid px-0 varela openSans--light">
    <div class="box">
      <div class="card-body p-5 col-xl-6 col-xl-offset-3 col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-0 col-sm-12 col-xs-12">


        <!--Welcome to Retica-->
        <div class="welcome mx-auto mb-5">
          <div class="welcome__text raleway--medium row">
            <h2 class="mx-auto">Welcome to</h2>
          </div>

          <div class="welcome__logo row">
            <img src="../assets/reticaLogo.png" alt="" class="img-fluid mx-auto">
          </div>
        <!--end .welcome-->
        </div>




        <!--This button panel layout is for viewports md and up -->
        <div class="content mx-auto hidden-sm-down row desktop mt-2">
          <!--text description-->
          <div class="content__component description openSans--regular text-justify pull-right pl-2">
            <p>Retica is a real-time, online captioning system that allows students to easily connect to live captions generated during a lecture by a captionist.</p>

            <p>Also provides ease of access for archived captions in the form of text files, doubling as notes for students.</p>
            <!--The application runs multiple features to make the whole process adaptable to the needs of students and captionists.</p>-->
            <!--end .description-->
          </div>


          <!--Buttons-->
          <div class="content__component buttons openSans--light pull-left pl-5">
            <div class="buttons row mb-4 pr-2">
              <div class="button">
                <button class="btn varela pull-left" v-on:click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn" flat to="login">
                  Log in
                </button>
              </div>

              <div class="buttons__text pt-2">
                <p class="ml-2 pull-left text">with your school email</p>
              </div>
            </div>

            <div class="buttons row">
              <div class="button">
                <button class="btn varela pull-left" v-on:click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn" flat to="register">
                  Register
                </button>
              </div>

              <div class="buttons__text pt-2">
                <p class="ml-2 pull-left text">with a new username</p>
              </div>
            </div>
          </div>
        <!--end .desktop section-->
        </div>





        <!--This button panel layout is for viewports sm and below (sm and xs viewports) -->
        <div class="content mx-auto hidden-md-up row mobile">
          <!--text description-->
          <div class="description pull-left text-justify openSans--regular">
            <p>Retica is a real-time captioning system that allows students to connect remotely to live captions generated during a lecture by a captionist.</p>

            <p>Also provides ease of access for archived captions in the form of text files, doubling as notes for students.</p>
            <!--The application runs multiple features to make the whole process adaptable to the needs of students and captionists.</p>-->
            <!--end .description-->
          </div>



          <!--Buttons-->
          <div class="content__component buttons openSans--light pull-left pl-3 mt-3">
            <div class="buttons row mb-4 pr-2">
              <div class="button">
                <button class="btn varela pull-left" v-on:click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn" flat to="login">
                  Log in
                </button>
              </div>

              <div class="buttons__text pt-2">
                <p class="ml-2 pull-left text">with school email</p>
              </div>
            </div>

            <div class="buttons row">
              <div class="button">
                <button class="btn varela pull-left" v-on:click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn" flat to="register">
                  Register
                </button>
              </div>

              <div class="buttons__text pt-2">
                <p class="ml-2 pull-left text">with new username</p>
              </div>
            </div>
          <!--end buttons section-->
          </div>
        <!--end mobile section-->
        </div>
      <!--card-body-->
      </div>
    <!--box-->
    </div>
  <!--.container-fluid -->
  </div>
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
        // TODO: Redirect to homepage
        this.$router.push({
          name: 'root'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid {
    top: 90px;
  }
  .card-body {
    background-color: #d4ecff;
    border-radius: 20px;
    color: #0a1d3b;
    box-shadow: 5px 5px 5px rgba(0, 0, 45, 0.30);
  }
  .img-fluid {
    width: 100% \9;
    padding-top: 5px;
  }
  .welcome__logo img {
    width: 300px;
    height: 75px;
  }
  .welcome__text {
    margin-bottom: -15px;
  }
  .welcome__text h2 {
    font-size: 1.7em;
  }
  button {
    /*!important overrides the bootstrap stylings! */
    border-radius: 6px;
    background-color: #0A1D3B !important;
    color: #fff !important;
    padding-left: 10px;
    padding-right: 10px;
  }
  .desktop .content__component {
    width: 50%;
  }
  .desktop .description {
    max-width: 400px;
  }
</style>
