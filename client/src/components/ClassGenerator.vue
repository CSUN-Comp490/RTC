<!--component to generate classes dynamically-->

<template>
  <div class="row" v-bind:style="displayStyle">
    <!--class id, class name, and class schedule-->
    <div style="padding-right: 20px; width: 250px" v-bind:style="classListStyle">
      {{ classID }}<br>
      {{ classIsNamed }}<br>
      {{ classSchedule }}
    </div>

    <!-- button position and button styling, need to implement binds-->
    <div :style="buttonPosition">
      <div v-if="role === 'captionist'" :style="buttonStyleOne">
        <button style="padding: 5px">Start Session</button>
        <!-- <button style="padding: 5px" v-on:click="navigateTo({name: 'session', params: {}})">Start Session</button> -->
      </div>
      <div :style="buttonStyleTwo">
        <button style="padding: 5px">Past Captions</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'class-generator',
    props: {
      classID: '',
      classIsNamed: '',
      classSchedule: '',
      role: ''
    },
    data: function () {
      return {
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
    }
  }
</script>

<style scoped>
</style>
