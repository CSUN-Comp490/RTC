<!--
Header buttons needs to have separate button classes made.
Any unknown html tag are bootstrap-vue.js syntax that are currently unidentified.-->
<!--TODO: change from hard-coded text-->

<template>
  <div id="pastSession" class="p-3 container-fluid d-flex flex-column varela col-xs-12 offset-xs-0 col-sm-12 offset-sm-0 col-md-10 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3
    col-lg-offset-3 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 col-xl-offset-3">
    <div class="container">
      <div class="pastSession__heading text-left">
        <h1>Past Sessions</h1>
        <!--TODO: class name goes here; hard-coded for now-->
        <h2 class="raleway--medium">COMP 490</h2>
      <!--end div pastSession__heading-->
      </div>

      <div class="pastSession__month">
        <!--TODO: have this get the current month; hard-coded for now-->
        <h2 class="raleway--regular h6">January</h2>
      </div>



      <!--Each card serves as an individual session
          Each card has 4 main divs:
          date: for displaying session's date
          sessionTitle: the caption session's title
          unedited: the div for the unedited caption text file
          edited: the div for the edited caption text file-->
      <div class="pastSession__sessions col-xs-12">

        <div class="sessionsContainer col-xs-12">
          <div class="date pull-left ">
            <div class="month">
              <!--TODO: get month's first three letters; hard-coded for now-->
              <h3 class="raleway--regular ">Jan</h3>
            </div>
            <div class="dateNumber">
              <!--TODO: get date number; hard-coded for now-->
              <h2 class="">15</h2>
            </div>
          </div>

          <div class="sessionTitle ">
            <h3 class="raleway--regular align-middle">Guest speaker lecture</h3>
          </div>

          <div class="unedited ">
            <div class="buttonsWrapper ">
              <p class="pull-left mt-2 col-12">Unedited</p>

              <div class="buttons col-xs-12">
                <button type="button" class="btn">View</button>
                <button type="button" class="btn ">Download</button>

              </div>
            </div>
          </div>

          <div class="edited ">
            <div class="buttonsWrapper">
              <p class="pull-left mt-2 col-xs-12">Edited</p>

              <div class="buttons ">
                <div class="top-row col-xs-12">
                  <button type="button" class="btn">View</button>
                  <button type="button" class="btn ">Download</button>
                </div>
                <div class="top-row col-xs-12">
                  <button type="button" class="btn">Edit</button>
                  <button type="button" class="btn ">Publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end div for ONE SINGLE card-->
        </div>

      <!--Each card serves as an individual session
          Each card has 4 main divs:
          date: for displaying session's date
          sessionTitle: the caption session's title
          unedited: the div for the unedited caption text file
          edited: the div for the edited caption text file-->
      <div class="pastSession__sessions col-xs-12">

        <div class="sessionsContainer col-xs-12">
          <div class="date pull-left ">
            <div class="month">
              <!--TODO: get month's first three letters; hard-coded for now-->
              <h3 class="raleway--regular ">Jan</h3>
            </div>
            <div class="dateNumber">
              <!--TODO: get date number; hard-coded for now-->
              <h2 class="">15</h2>
            </div>
          </div>

          <div class="sessionTitle ">
            <h3 class="raleway--regular align-middle">Guest speaker lecture</h3>
          </div>

          <div class="unedited ">
            <div class="buttonsWrapper ">
              <p class="pull-left mt-2 col-xs-12">Unedited</p>

              <div class="buttons col-xs-12">
                <button type="button" class="btn">View</button>
                <button type="button" class="btn ">Download</button>

              </div>
            </div>
          </div>

          <div class="edited ">
            <div class="buttonsWrapper">
              <p class="pull-left mt-2 col-xs-12">Edited</p>

              <div class="buttons ">
                <div class="top-row col-xs-12">
                  <button type="button" class="btn">View</button>
                  <button type="button" class="btn ">Download</button>
                </div>

                <!--TODO: if person is captionist, this option should show-->
                <div class="top-row col-xs-12">
                  <button type="button" class="btn">Edit</button>
                  <button type="button" class="btn ">Publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end div for ONE SINGLE card-->
      </div>





      <!--end div pastSession__sessions-->
      </div>


  <!--end div pastSession-->
  </div>

</template>

<script>
  import router from '@/router/index'

  export default{
    methods: {
      navigateTo (route) {
        router.push(route)
      }
    }
  }
</script>

<style scoped>
  #pastSession  {
    /*Has the height of the pastSessions box always take up 80% of the viewport*/
    height: 80vh !important;
    background-color: #8CB8DC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }
  #pastSession .container {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px;
  }
  .pastSession__heading {
    /*background-color: white;*/
    width: 180px;
  }
  .pastSession__sessions  {
    border-radius: 10px;
    position: relative;
  }
  .pastSession__sessions p {
    margin-left: 10px;
    font-size: 1.2em;
  }
  .sessionsContainer {
    border-radius: 10px;
    background-color: white !important;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  }
  /*For the month (1st 3 letters) and date number on the top left corner*/
  .pastSession__sessions .date {
    background-color: #000033;
    color: #fff;
    margin-left: -15px;
    /*position: absolute;*/
    /*top: 0px;*/
    /*left: 0px;*/
    /*min-width: 60px;*/
    /*min-height: 75px;*/
    border-radius: 10px 0px 0px 0px;
    /*margin-top: 0px;*/
    /*margin-left: 0px;*/
    padding: 10px 15px;
  }
  .pastSession__sessions .sessionTitle {
    min-height: 100px;
    padding: 10px;
  }
  .pastSession__sessions .unedited  {
    background-color: #edecf1;
    margin-top: 15px;
  }
  .pastSession__sessions .edited  {
    margin-top: 15px;
  }
  #pastSession button {
    /*!important overrides the bootstrap stylings! */
    border-radius: 6px !important;
    background-color: #40599c !important;
    color: #fff !important;
    height: 30px;
    padding: 5px;
  }


  /*Font stuff*/
  .pastSession__heading h1 {
    font-size: 2em;
  }
  .pastSession__heading h2 {
    font-size: 1.5em;
  }
  .pastSession__month h2{
    font-size: 2em;
  }
  .pastSession__sessions h3 {
    font-size: 1.3em;
    margin: -5px;
  }
  .pastSession__sessions h2 {
    font-size: 3em;
    margin: -5px;
  }



  /*Scrollbar*/
  #pastSession .container::-webkit-scrollbar {
      width: 14px;
      /*height: 12px;*/

  }
  #pastSession .container::-webkit-scrollbar-track {
    width: 15px;
    -webkit-border-radius: 5px;
    background-color: rgba(109,109,118,0.5);
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
  }
  #pastSession .container::-webkit-scrollbar-track-piece {
    width: 15px;
    -webkit-border-radius: 5px;
    background-color: rgba(109,109,118,0.5);
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
  }
  #pastSession .container::-webkit-scrollbar-thumb {
    width: 15px;
    -webkit-border-radius: 8px;
    background-clip: padding-box;
    background-color:#000;
    -webkit-box-shadow: inset 0 0 6px rgba(90,90,90,0.6);
  }



</style>
