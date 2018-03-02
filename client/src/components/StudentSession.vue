<!--NOT YET WEB RESPONSIVE
    Can make toolbar button to change text editor background color
    Unable to edit scrollbar-->

<template>
  <div class="container-fluid" style="padding: 0px">
    <div id="classNameBar"> <!--Bar underneath nav bar, contains class name and buttons-->
      <div id="className">
        CLASS NAME
      </div>
      <div class="buttonPosition">
        <span><button type="button" class="buttonStyle"@click="download()">Download</button></span>
      </div>
    </div>

    <!--Quill component-->
    <div id="quill-container">
      <vue-editor
        v-model="content"
        id="editor"
        disabled
        :editorOptions="editorSettings"
      ></vue-editor>
    </div>
  </div>
</template>

<script>
  import { VueEditor, Quill } from 'vue2-editor'
  import io from 'socket.io-client'

  var socket = io('localhost:8080') // connect to socket server

  // custom module to edit css styling of imported editor
  class EditorStyle {
    constructor (quill) {
      this.quill = quill
      this.setEditorStyle()
    }

    setEditorStyle () {
      // styling for the editor
      let editor = document.getElementById('editor')
      editor.style.borderBottomLeftRadius = '10px'
      editor.style.borderBottomRightRadius = '10px'
      editor.style.height = '500px'
      // console.log(editor)

      // styling for the toolbar
      let toolbar = document.getElementsByClassName('ql-toolbar ql-snow').item(0)
      toolbar.style.borderTopLeftRadius = '10px'
      toolbar.style.borderTopRightRadius = '10px'
      toolbar.style.height = '45px'
      // console.log(toolbar)
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
        content: socket.on('updatechat', (data) => {
          this.content = data
        }),
        editorSettings: { // editor class is initialized here and passed as a prop
          modules: {
            editorStyle: {
              id: '#editor'
            }
          }
        }
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
  .container-fluid {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  #classNameBar {
    background-color: #bcbcd1;
    position: relative;
    height: 100px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 1px 15px;
  }
  #className {
    font-family: "Varela Round";
    font-size: 30px;
    position: absolute;
    top: 48px;
    left: 125px;
  }
  .buttonPosition {
    position: absolute;
    top: 58px;
    right: 130px;
  }
  .buttonStyle {
    background-color: #40599c;
    color: white;
    font-family: "Varela Round";
    border-radius: 8px;
    width: 100px;
    height: 25px;
    margin-left: 10px;
    box-shadow: 0px 0px 2px black;
  }
  #quill-container {
    position: relative;
    width: 90%;
    top: 20px;
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
