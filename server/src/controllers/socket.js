module.exports = function (socket){

  socket.on('room', function(data){
  
      console.log(`user connected on room# ${data.room_id}`);
      console.log(data.user);
   
      socket.join(data.room_id);

       socket.on("textChanged", delta => {
         console.log(delta.content);
         socket.to(data.room_id).emit("captions", delta);
      });
  
    }); 
  
    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
}