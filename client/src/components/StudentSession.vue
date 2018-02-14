<template>
    <div id="quill-container">
        <input type="button" id="downloadButton" value="Download" @click="download()">
        <vue-editor v-model="content" id="editor" disabled></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import io from 'socket.io-client'
var socket = io('localhost:8080') // connect to socket server
export default{
  components: {
    VueEditor
  },
  data () {
    return {
      room: null,
      content: socket.on('updatechat', (data) => {
        this.content = data
      })
    }
  },
  mounted () {
    // join room from room number (defined in url)
    this.room = this.$route.params.roomnumber.toString()
    socket.on('connect', () => {
      socket.emit('join', this.room)
    })
  },
  methods: {
    handleSavingContent () {
      console.log(this.content)
    },
    setEditorContent () {
      this.content = 'Html for Editor'
    },
    download () {
      // Creates an anchor tag
      var element = document.createElement('a')
      // Parses HTML to plain text
      var captions = document.createElement('DIV')
      // Add new line after each end tag
      var addedBreaksToCaptions = this.content.replace('>', '>\n').replace(/\s/g, '')
      captions.innerHTML = addedBreaksToCaptions
      var parsedCaptions = captions.textContent || captions.innerText || ''
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(parsedCaptions))
      element.setAttribute('download', 'captions.txt')
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }
}
</script>
<style scoped>
#editor {
    height: 375px;
}

#quill-container {
    position: relative;
}
</style>
