<!--Currently contains positioning issues in regards to responsiveness.
Header buttons needs to have separate button classes made.
Actual logo needs to be added.
All syntax in regards to template and grid system uses bootstrap-vue.js.
All syntax in regards to buttons uses HTML syntax instead of bootstrap-vue.js.
Any unknown html tag are bootstrap-vue.js syntax that are currently unidentified.-->

<template>
  <div
    id="e3"
    style="max-width: 600px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar class="blue">
      <v-toolbar-title class="white--text">Past Sessions</v-toolbar-title>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Comp 490</div>
            </v-card-title>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs6>
                  <div>
                    <div class="headline">Guest Speaker</div>
                    <div>Joe Smith</div>
                  </div>
                </v-flex>
                <v-flex xs6>
                 <v-layout coloumn>
                  <v-card-actions>
                      <v-btn flat dark>View</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                      <v-btn flat dark>Download</v-btn>
                  </v-card-actions>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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

<style>
.header{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #192f5f;
  color: #ffffff;
}
.logo{
  font-size: 40px;
  font-family: "Helvetica Rounded";
  letter-spacing: 2px;
}
.headerButton{
  position: absolute;
  width: 200px;
  top: 30%;
  color: white;
  background: none;
  border: none;
}
.headerLine{
  border-left: 1px solid white;
  height: 20px;
  position: absolute;
  top: 20px;
  left: 100px;
}
.titleContainer{
  position: absolute;
  right: 14%;
  left: 0;
  top: 150px;
}
.classContainerOne{
  position: absolute;
  width: 70%;
  left: 7%;
  right: 0;
  margin: auto;
  top: 180px;
}
.classContainerTwo{
  position: absolute;
  width: 70%;
  left: 7%;
  right: 0;
  margin: auto;
  top: 280px;
}
.classContainerThree{
  position: absolute;
  width: 70%;
  left: 7%;
  right: 0;
  margin: auto;
  top: 390px;
}
.classes{
  position: absolute;
  font-size: 14px;
  text-align: right;
  right: 10px;
  left: 0;
}
.buttonPosition{
  position: absolute;
  left: -23%;
  right: 0;
}
.buttonPage{
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  background-color: #cbcbcb;
  width: 90px;
}
.verticalLine{
  border-left: 1px solid black;
  height: 70px;
  position: absolute;
  left: 10%;
  right: 0;
}
</style>
