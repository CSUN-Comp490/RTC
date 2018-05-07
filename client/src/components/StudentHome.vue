<!--captionist home view, page is routed from App.vue main vue instance
    created by main.js.  PAGE IS NOT WEB RESPONSIVE-->
<!--ALL API RELATED CODE IS UNTESTED.  Its purpose is to pull
    the username from the api, return the classes of that username,
    return all of the class info from each class, store them in
    a dynamic array, pass them to the class generator component
    and generate the classes-->
<!--LOTS OF COMMENTS.  For editing and testing the code later-->
<!--CODE COMMENTED OUT FOR DEMO-->

<template>
  <div id="CapHome" class="container-fluid">
    <!--page title header-->
    <div class="row">
      <div class="pageTitle">
        <p>My Classes</p>
      </div>
    </div>

    <!--generates class list and main interface for captionist home page
        loops through an array of objects and binds each objects
        data fields to the ClassGenerator components props-->
    <!-- <div  class="classList"> -->
    <div v-if="!(userClassInformation.length == 0)" class="classList">
      <div v-for="objects in userClassInformation">
        <class-generator
          v-bind:classID="objects.classID"
          v-bind:classIsNamed="objects.className"
          v-bind:classSchedule="objects.classSchedule"
          v-bind:role="'student'"
        &gt;</class-generator>
      </div>
    </div>
    <p v-else class="classList">Looks like you have no classes!</p>

    <!--HARD CODED FOR TESTING AND DEMO PURPOSES-->
    <!-- <div v-if="!(this.classArray.length == 0)" class="classList">
      <div v-for="objects in classArray">
        <class-generator
          v-bind:classID="objects.classID"
          v-bind:classIsNamed="objects.className"
          v-bind:classSchedule="objects.classSchedule"
          v-bind:role="'student'"
        ></class-generator>
      </div>
    </div>
    <p v-else class="classList">Looks like you have no classes!</p> -->
  </div>
</template>

<script>
  // import store from '@/store/store'
  import { store, mapGetters } from '@/store/store'
  // import { mapGetters } from 'vuex'
  // import router from '@/router/index'
  import classGen from '@/components/ClassGenerator'

  export default {
    data: function () {
      return {
        // userInfo: Array,
        userClassInformation: [],
        // userClassInformation: store.state.user != null ? store.state.user.classes : [
        // {
        //   classID: 'COMP 491',
        //   className: 'Senior Design 2.0',
        //   classSchedule: 'MoWe 9:30 a.m. to 10:45 a.m.'
        // }
        // ],
        // HARD CODED FOR TESTING AND DEMO PURPOSES
        classArray: [
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
            classID: 'COMP 469',
            className: 'Artificial Intelligence',
            classSchedule: 'TuTh 2:00 p.m. to 3:15 p.m.'
          }
        ]
      }
    },
    beforeCreate () {
      // console.log('store', store)
      // console.log('router', router)
    },
    created: function () { // calls the function after the vue instance is created
      // this.getUser()
      this.getClassData()
    },
    methods: {
      getClassData () {
        const classObjectArray = [] // create array for storage
        var classes = getUser.classes
        console.log(classes)
        // console.log(this.classArray)

        for (let classId in classes) { // iterate through every class id in the array
          let classElements = getClass(classId)
          var classObject = {
            classID: classElements[0],
            className: classElements[2],
            classSchedule: classElements[4] + classElements[5]
          }
          classObjectArray.push(classObject) // add the object to the array
        }

        // this.userClassInformation = classObjectArray // assign the array to an array in the data section
        // console.log(classObjectArray)
        // console.log(this.userClassInformation)
      }
    },
    computed: {
      ...mapGetters([
        'getUser',
        // 'getClass',
        'getClasses'
      ])
    },
    components: {
      'class-generator': classGen // create tags for the component
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
    top: 120px;
  }
  .classList {
    position: relative;
    top: 120px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
