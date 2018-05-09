<!--
    Can make toolbar button to change text editor background color
    Unable to edit scrollbar-->

<template>
  <div class="container-fluid">
    <div id="classNameBar">
        <div class="buttons col-sm-12 mt-4">
          <h4 class="raleway--medium col-sm-5 col-xs-12 col-md-6 pull-left">CLASS NAME</h4>
          <div class="buttons__single col-sm-3 col-xs-6 col-md-2 col-md-offset-2">
            <button type="button" class="btn btn-primary bt-sm buttonStyle"@click="download()">Download</button>
          </div>
          <div class="buttons__single col-sm-3 col-xs-5 col-md-2">
            <button type="button" class="btn btn-primary btn-sm buttonStyle" @click="returnPage()">End Session</button>
          </div>
        </div>
    </div>
    <!--Quill component-->
    <!--
      .quill-container > .quillWrapper > .ql-toolbar > .ql-formats
    -->
    <div id="quill-container col-xs-12">
        <vue-editor
          v-model="content"
          id="editor"
          placeholder="Click here and start typing..."
          :editorOptions="editorSettings"
        ></vue-editor>
    </div>
  </div>
</template>

<script>
  import { VueEditor, Quill } from 'vue2-editor'
  import io from 'socket.io-client'

  var socket = io.connect('http://localhost:8080') // connect to socket server

  // custom module to edit css styling of imported editor
  class EditorStyle {
    constructor (quill) {
      this.quill = quill
      this.setEditorStyle()
    }

    // TODO: no overflow for specific editor icons (text type, underline color, highlight color
    setEditorStyle () {
      // styling for the editor
      let editor = document.getElementById('editor')
      editor.style.borderBottomLeftRadius = '10px'
      editor.style.borderBottomRightRadius = '10px'
      editor.style.height = '55vh'
      editor.style.width = '100%'

      let toolbar = document.getElementsByClassName('ql-toolbar ql-snow').item(0)
      toolbar.style.borderTopLeftRadius = '10px'
      toolbar.style.borderTopRightRadius = '10px'
      toolbar.style.height = '50px'
      toolbar.style.width = '100%'
      toolbar.style.overflowX = 'hidden'
      toolbar.style.overflowY = 'scroll'
    }
  }

  Quill.register('modules/editorStyle', EditorStyle) // register the module

  export default{
    components: {
      VueEditor
    },
    data () {
      return {
        room: null,
        content: null,
        editorSettings: { // editor class is initialized here and passed as a prop
          modules: {
            editorStyle: {
              id: '#editor'
            }
          }
        }
      }
    },
    created () {
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
  body {
    /*TODO: hide main body scroll bar*/
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
  .container-fluid {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .buttonStyle {
    background-color: #40599c !important;
    color: white !important;
    font-family: "Varela Round" !important;
    border-radius: 8px !important;
    box-shadow: 0px 0px 2px black !important;
  }
  #quill-container {
    width: 94%;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
  }

  /*::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }*/
</style>
