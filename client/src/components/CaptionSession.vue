<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-text-field label="Room" v-model="room"/>
      <v-btn class="enterRoom" v-on:click="enterRoom">Enter Room</v-btn>
      <div class="error" v-html="error"></div>
      <div id="app">
        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)"/></quill-editor>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import io from 'socket.io-client'
import { VueQuillEditor } from 'vue-quill-editor'

export default {
  components: {
    io,
    VueQuillEditor
  },
  data () {
    return {
      name: 'app',
      content: '<p>example content</p>',
      editorOption: { },
      room: '',
      error: null
    }
  },
  mounted () {
    console.log('this is a current quill instance object', this.myQuillEditor)
  },
  methods: {
    async enterRoom () {
      var socket = io.connect()
      socket.on('connect', function () {
        socket.emit('room', this.room)
      })

      socket.on('message', function (data) {
        console.log('Incoming message: ', data)
      })
    },
    onEditorChange (event) {
      console.log('onEditorChange')
    }
  }
}
</script>

<style scoped>
  .quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {
    height: 30rem;
    padding-bottom: 1rem;
  }
</style>