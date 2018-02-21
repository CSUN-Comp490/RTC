<!--NOT FULLY WEB RESPONSIVE-->
<!--NEED BETTER DESIGN-->
<!--NEED TO REMOVE HEADER-->
<!--NEED TO ADD BUTTON STYLING-->

<template>
  <div class="container-fluid">
    <div class="backgroundColor">
      <div class="welcome">
        <div class="row">
          Welcome To
          <div class="logoStyle">
            <img src="../assets/reticaLogo.png"/>
          </div>
        </div>
      </div>
      <div class="information">
        <div class="row">
          <div class="col-lg-6">
            <p>Retica is a real-time captioning system that aims to allow students to
            connect remotely to captions being generated during a lecture by a
            captionist.  The application also provides ease of access for archived
            captions in the form of text files, doubling as notes for students that
            would like to use them.  The application runs multiple features to make
            the whole process adaptable to the needs of students and captionists.</p>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="buttonStyle">
                <button style="color: white; font-size: 18px">Sign Up</button>
              </div>
              <p style="position: absolute; left: 128px; bottom: 116px">here with school e-mail address</p>
            </div>
            <div class="row">
              <div class="buttonStyle">
                <button style="color: white; font-size: 18px;">Sign In</button>
              </div>
              <p style="position: absolute; left: 128px; bottom: 77px">with username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backgroundColor {
    border-radius: 20px;
    background-color: #d4ecff;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 850px;
    height: 600px;
    font-family: "Varela Round";
    font-style: normal;
    font-variant: normal;
    color: #0a1d3b;
  }
  .welcome {
    font-size: 80px;
    display: block;
    position: relative;
    left: 50px;
  }
  .information {
    text-align: left;
    position: relative;
    left: 50px;
    top: 170px;
  }
  .buttonStyle {
    display: inline-block;
    background-color: #0a1d3b;
    border-radius: 12px;
    width: 110px;
    text-align: center;
    margin: 5px;
    height: 30px;
  }
  .logoStyle {
    position: absolute;
    top: 120px;
    left: 200px;
  }
</style>
