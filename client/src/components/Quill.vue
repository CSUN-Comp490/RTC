<template>
    <div id="editor"></div>
</template>

<script>
    var socket = io();

    // Quill functionality
    var quill = new Quill('#editor', {
        theme: 'snow'
    })

    quill.on('text-change', function(delta, oldDelta, source) {
        if (source == 'api') {
            console.log("An API call triggered this change.")
        } else if (source == 'user') {
            console.log("A user action triggered this change.")
            socket.emit('text change', quill.getContents())
        }
    })

    socket.on('text change', function(delta){
      quill.setContents(delta, 'api')
    })
</script>
