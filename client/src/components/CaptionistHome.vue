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
        <p>My Caption Sessions</p>
      </div>
    </div>

    <!--generates class list and main interface for captionist home page
        loops through an array of objects and binds each objects
        data fields to the ClassGenerator components props-->
    <!--<div class="classList">-->
      <!--<div v-for="objects in userClassInformation">-->
        <!--<class-generator-->
          <!--v-bind:classID="objects.classID"-->
          <!--v-bind:classIsNamed="objects.className"-->
          <!--v-bind:classSchedule="objects.classSchedule"-->
        <!--&gt;</class-generator>-->
      <!--</div>-->
    <!--</div>-->

    <!--HARD CODED FOR TESTING AND DEMO PURPOSES-->
    <div class="classList">
      <div v-for="objects in classArray">
        <class-generator
          v-bind:classID="objects.classID"
          v-bind:classIsNamed="objects.className"
          v-bind:classSchedule="objects.classSchedule"
        ></class-generator>
      </div>
    </div>
  </div>
</template>

<script>
  import classGen from '@/components/ClassGenerator'
  // import Api from '@/services/Api'
  export default {
    data: function () {
      return {
        // userInfo: Array,
        // userClassInformation: Array
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
    // created: function () { // calls the function after the vue instance is created
    //   this.getUser()
    //   this.getClasses()
    // },
    // methods: {
    //   getUser: function () {
    //     Api().get(this.$route.path) // calls the api using the pages current route
    //       .then(function (response) {
    //         console.log(response)
    //         const userData = JSON.parse(response.data) // assign the parsed data to a variable
    //         const userInfoArray = [] // create an array for storage
    //         const classes = [] // for comparison
    //
    //         for (let element in userData) { // iterate through captionist attributes
    //           const userElement = userData[element]
    //           if (userElement === classes) { // if the attribute is named classes and an array
    //             for (let userClass in userElement) { // iterate through classes array
    //               userInfoArray.push(userClass) // add each class id to array
    //             }
    //           }
    //         }
    //
    //         console.log(userInfoArray)
    //         this.userInfo = userInfoArray // assign the array to an array in the data section
    //       })
    //       .catch(function (error) { // return message in case of error
    //         console.log(error)
    //         const errorMessage = 'An error occured.' + error
    //         return errorMessage
    //       })
    //   },
    //   getClasses: function () {
    //     const classObjectArray = [] // create array for storage
    //
    //     for (let classID in this.userInfo) { // iterate through every class id in the array
    //       Api().get('/courseid/' + classID) // retrieve the classes information
    //         .then(function (res) {
    //           console.log(res)
    //           const classElements = JSON.parse(res.data) // assign the data to variable
    //
    //           // create an object and assign the selected datas elements to the
    //           // objects elements
    //           var classObject = {
    //             classID: classElements[0],
    //             className: classElements[2],
    //             classSchedule: classElements[4] + classElements[5]
    //           }
    //
    //           classObjectArray.push(classObject) // add the object to the array
    //         })
    //         .catch(function (error) { // generate error message
    //           console.log(error)
    //           const errorMessage = 'An error occured.' + error
    //           return errorMessage
    //         })
    //     }
    //
    //     this.userClassInformation = classObjectArray // assign the array to an array in the data section
    //   }
    // },
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
    top: 90px;
    /*border: 3px solid blue;*/
  }
</style>
