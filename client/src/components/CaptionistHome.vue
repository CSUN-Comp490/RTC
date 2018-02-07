<!--captionist home view, page is routed from App.vue main vue instance
    created by main.js.  PAGE IS NOT WEB RESPONSIVE-->

<template>
  <div id="CapHome" class="container-fluid">
    <!--page title header-->
    <div class="row">
      <div class="pageTitle">
        <p>My Caption Sessions</p>
      </div>
    </div>

    <!--generates class list and main interface for captionist home page
        loops through an array of objects and binds each objects
        data fields to the ClassGenerator components props-->
    <div class="classList">
      <div v-for="objects in classArray">
        <class-generator
          v-bind:classID="objects.classID"
          v-bind:classIsNamed="objects.className"
          v-bind:classSchedule="objects.classSchedule"
        ></class-generator>
      </div>
    </div>

    <!--testing passing json files
        code will go here after I figure out how I can get information from Thomas database-->
  </div>
</template>

<script>
  import classGen from '@/components/ClassGenerator'
  export default {
    data: function () {
      return {
        classArray: [ // array of objects for testing passing props from this component to classGenerator
          {
            classID: 'COMP 490',
            className: 'Senior Design',
            classSchedule: 'MoWe 9:30 a.m. to 10:45 a.m.'
          },
          {
            classID: 'COMP 484',
            className: 'Web Engineering I',
            classSchedule: 'TuTh 4:30 p.m. to 6:45 p.m.'
          },
          {
            classID: 'COMP 482',
            className: 'Algorithm Design',
            classSchedule: 'MoWe 11:00 a.m. to 12:15 p.m.'
          },
          {
            classID: 'Testing 101',
            className: 'Testing Life',
            classSchedule: 'Everyday'
          }
        ]
      }
    },
    components: {
      'class-generator': classGen
    }
  }
</script>

<style>
  .pageTitle {
    color: #00245e;
    font-family: "Open Sans";
    font-size: 30px;
    position: fixed;
    width: 400px;
    height: 100px;
    left: 30px;
    top: 90px;
    /*border: 3px solid blue;*/
  }
</style>
