<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" v-on:click="navigateTo({name: 'root'})">Retica</span>
    </v-toolbar-title>

    <!--<v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>-->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark router to="login">
        Log In
      </v-btn>

      <v-btn flat dark router to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
  export default{
    methods: {
      navigateTo (route) {
        this.$router.push(route)
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
  color: #E9E;
}
</style>
