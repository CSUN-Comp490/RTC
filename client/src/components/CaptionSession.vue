<template>
    <div id="quill-container">
        <span><input type="button" id="downloadButton" value="Download" @click="download()"></span>
        <span><input type="button" id="endsessionButton" value="End Session" @click="returnPage()"></span>
        <vue-editor v-model="content" id="editor"></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import io from 'socket.io-client'
var socket = io.connect('http://localhost:8080') // connect to socket server
export default{
  components: {
    VueEditor
  },
  data () {
    return {
      room: null,
      content: null
    }
  },
  mounted () {
    // join room from room number (defined in url)
    this.room = this.$route.params.roomnumber.toString()
    socket.on('connect', () => {
      socket.emit('join', this.room)
    })
  },
  watch: {
    // sends text from editor to server
    content: function (editorText) {
      socket.emit('sendchat', editorText)
      console.log(editorText)
    }
  },
  methods: {
    handleSavingContent () {
      console.log(this.content)
    },
    download () {
      // Creates an anchor tag
      var element = document.createElement('a')
      var parsedCaptions = this.parseHTML(this.content)
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(parsedCaptions))
      element.setAttribute('download', 'captions.txt')
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    },
    parseHTML (text) {
      // Parses HTML to plain text
      var captions = document.createElement('DIV')
      // Add new line after each end tag
      var addedBreaksToCaptions = text.replace('>', '>\n').replace(/\s/g, '')
      captions.innerHTML = addedBreaksToCaptions
      var parsedCaptions = captions.textContent || captions.innerText || ''
      return parsedCaptions
    },
    // Fix this method to return to captionist home page
    returnPage () {
      this.$router.push({
        name: 'root',
        params: {
          id: this.$router.params.id
        }
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? You still have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
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

span {
  border: 1px solid blue;
}
</style>
