<!--Currently contains positioning issues in regards to responsiveness.
Header buttons needs to have separate button classes made.
Actual logo needs to be added.
All syntax in regards to template and grid system uses bootstrap-vue.js.
All syntax in regards to buttons uses HTML syntax instead of bootstrap-vue.js.
Any unknown html tag are bootstrap-vue.js syntax that are currently unidentified.-->

<template>
  <b-container fluid>
    <div class = "mainContainer">
      <!--header-->
      <!-- <div class = "header">
        <b-row>
          
          <b-col cols="4" sm="4" md="4" lg="4" xl="6">
            <div class = "logo">
              RETICA
            </div>
          </b-col>
          
          <b-col cols="2" sm="2" md="2" lg="2" xl="2">
            <button class = "headerButton">My Caption Sessions</button>
          </b-col>
          
          <b-col cols="1" sm="2" md="2" lg="2" xl="1">
            <button class = "headerButton">Settings</button>
            <div class = "headerLine"></div>
          </b-col>
          
          <b-col cols="2" sm="2" md="2" lg="2" xl="1">
            <button class = "headerButton">Logout</button>
            <div class = "headerLine"></div>
          </b-col>
        </b-row>
      </div> -->

      <!--title-->
      <div class = "titleContainer">
        <b-row>
          <b-col>
            <b>My Caption Sessions<br/></b>
          </b-col>
        </b-row>
      </div>

      <!--first class container-->
      <div class = "classContainerOne">
        <b-row>
          <!--class description-->
          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="classes">
              COMP 490 <br/>
              SR DESIGN PROJECT <br/>
              MoWe 9:30 a.m. - 10:45 a.m.
            </div>
          </b-col>

          <!--division-->
          <b-col cols="2" sm="2" md="2" lg="2" xl="2">
            <div class="verticalLine"></div>
          </b-col>

          <!--buttons-->
          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="buttonPosition">
              <b-row>
                <button class="buttonPage" v-on:click="navigateTo({name: 'CaptionSession'})">Start Session</button>
              </b-row>
              <b-row>
                <button class="buttonPage">Past Captions</button>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <!--second class container-->
      <div class="classContainerTwo">
        <b-row>
          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="classes">
              MATH 340<br/>
              INTRO TO PROBABILITY <br/>
              TuTh 12:30 p.m. - 1:45 p.m.
            </div>
          </b-col>

          <b-col cols="2" sm="2" md="2" lg="2" xl="2">
            <div class = "verticalLine"></div>
          </b-col>

          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="buttonPosition">
              <b-row>
                <button class="buttonPage" v-on:click="navigateTo({name: 'CaptionSession'})">Start Session</button>
              </b-row>
              <b-row>
                <button class="buttonPage">Past Captions</button>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <!--third class container-->
      <div class="classContainerThree">
        <b-row>
          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="classes">
              COMP 424<br/>
              NETWORK SYSTEMS SECURITY <br/>
              Friday 11:00 a.m. - 1:45 p.m.
            </div>
          </b-col>

          <b-col cols="2" sm="2" md="2" lg="2" xl="2">
            <div class = "verticalLine"></div>
          </b-col>

          <b-col cols="5" sm="5" md="5" lg="5" xl="5">
            <div class="buttonPosition">
              <b-row>
                <button class="buttonPage" v-on:click="navigateTo({name: 'CaptionSession'})">Start Session</button>
              </b-row>
              <b-row>
                <button class="buttonPage">Past Captions</button>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
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