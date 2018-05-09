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
    <div class="classList" v-if="!(this.getClassData.length == 0)">
      <div v-for="objects in this.getClassData">
        <class-generator
            v-bind:id="objects.id"
            v-bind:classID="objects.classID"
            v-bind:classIsNamed="objects.className"
            v-bind:classSchedule="objects.classSchedule"
            v-bind:role="'student'"      
        ></class-generator>
      </div>
    </div>
    <p v-else class="classList">Looks like you have no classes!</p>

  </div>
</template>

<script>
  import store from '@/store/store'
  // import { state, mapGetters } from '@/store/store'
  // import router from '@/router/index'
  import classGen from '@/components/ClassGenerator'

  export default {
    data: function () {
      return {
        userClassInformation: []
      }
    },
    beforeCreate () {
      console.log('store', store)
      // console.log('router', router)
    },
    computed: {
      getUser () {
        if (store.state.user != null) {
          return store.state.user
        } else {
          return {}
        }
      },
      getClassData () {
        const classObjectArray = [] // create array for storage
        var classes = store.state.classes
        var myClasses = this.getUser.classes

        // iterate through every class id in the array
        for (var classId in myClasses) {
          // console.log(classes[0])
          // var classElements = classes[0]
          var classElements = classes.filter(function (element) {
            return element._id === myClasses[classId]
          })

          if (classElements.length > 0) {
            var classObject = {
              id: classElements[0]._id,
              classID: classElements[0].classID,
              className: classElements[0].className,
              classSchedule: classElements[0].days + ' ' + classElements.time
            }
            classObjectArray.push(classObject) // add the object to the array
          }
        }

        this.userClassInformation = classObjectArray // assign the array to an array in the data section
        return classObjectArray
      }
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
