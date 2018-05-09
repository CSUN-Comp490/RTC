<!--component to generate classes dynamically-->

<template>
  <div class="row" v-bind:style="displayStyle">
    <!--class id, class name, and class schedule-->
    <div style="padding-right: 20px; width: 250px" v-bind:style="classListStyle">
      <!-- {{ id }}<br> -->
      {{ classID }}<br>
      {{ classIsNamed }}<br>
      {{ classSchedule }}
    </div>

    <!-- button position and button styling, need to implement binds-->
    <div :style="buttonPosition">
      <div v-if="role === 'captionist'" :style="buttonStyleOne">
        <!-- <button style="padding: 5px">Start Session</button> -->
        <button style="padding: 5px" v-on:click="createSession(id)">Start Session</button>
      </div>
      <div v-else-if="role != 'captionist' && isLive" :style="buttonStyleOne">
        <!-- <button style="padding: 5px">Join Live Session</button> -->
        <button style="padding: 5px" v-on:click="navigateTo({name: 'studentsession', params: {roomnumber: sessionId}})">Join Live Session</button>
      </div>
      <div :style="buttonStyleTwo">
        <button style="padding: 5px" v-on:click="navigateTo({name: 'pastsession', params: id})">Past Captions</button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store'
  import router from '@/router/index'
  import Api from '@/services/Api'

  export default {
    name: 'class-generator',
    props: {
      id: '',
      classID: '',
      classIsNamed: '',
      classSchedule: '',
      role: ''
    },
    data: function () {
      return {
        live: false,
        sessionId: {},
        displayStyle: { // styling data for classGenerator
          display: 'block',
          border: '3px',
          margin: '15px'
        },
        classListStyle: {
          display: 'inline-block',
          textAlign: 'right'
        },
        buttonPosition: {
          display: 'inline-block'
        },
        buttonStyleOne: {
          color: 'white',
          backgroundColor: '#2c77ca',
          borderRadius: '12px',
          display: 'inline-block',
          width: '110px',
          height: '30px',
          margin: '5px',
          marginLeft: '5px'
        },
        buttonStyleTwo: {
          color: 'white',
          backgroundColor: '#213d7a',
          borderRadius: '12px',
          display: 'block',
          width: '110px',
          height: '30px',
          margin: '5px',
          marginLeft: '10px'
        }
      }
    },
    computed: {
      isLive () {
        this.getSessions()
        console.log('back')
        return this.live
      }
    },
    methods: {
      getSessions () {
        // var live = false
        Api.instance.get('/api/sessions/courseid/' + this.id)
          .then(response => {
            console.log('classID', this.classID)
            let sessions = response.data
            // this.sessions = sessions
            let liveSessions = sessions.filter(function (session) {
              return session.live
            })
            console.log(liveSessions)
            if (liveSessions.length > 0) {
              this.sessionId = liveSessions[0]._id
              this.live = true
            }
          })
          .catch(error => {
            return error
          })
        console.log('after')
        // return live
      },
      navigateTo (route) {
        router.push(route)
      },
      createSession (id) {
        Api.instance.post('api/sessions/', {
          courseID: this.id,
          sessionName: new Date(),
          captionist: store.state.user.id
        })
          .then(response => {
            console.log(response.data.id)
            router.push({
              name: 'captionsession',
              params: {
                roomnumber: response.data._id
              }
            })
          })
          .catch(error => {
            console.log(error)
            return error
          })
      }
    }
  }
</script>

<style scoped>
</style>
