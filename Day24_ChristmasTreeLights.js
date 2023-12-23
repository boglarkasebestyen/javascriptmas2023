<!-- <!doctype html>
<html>
    <head>
        <title>Christmas Tree Lights Sequencer</title>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <section>
            <img src="/tree1.png" alt="christmas tree">
            <div class="star">⭐️</div>
            <div class="lights red"></div>
            <div class="lights blue"></div>
            <div class="lights blue"></div>
            <div class="lights red"></div>
            <div class="lights red"></div>
            <div class="lights blue"></div>
            <div class="lights blue"></div>
            <div class="lights red"></div>
            <div class="lights red"></div>
            <div class="lights blue"></div>
            <div class="lights red"></div>
            <div class="lights blue"></div>
        </section>
  
        <script src="index.js"></script>
    </body>
</html>

html, body {
    margin: 0;
    padding: 0;
}

body {
    background-color: #abb997;
    display: flex;
    align-items: center;
    height: 100vh;
}

section {
    max-width: 250px;
    margin: 0 auto;
    position: relative;
}

img {
    max-width: 100%;
}

.star{
    top: 60px;
    left: 108px;
    font-size: 2em;
    position: absolute;
}

.lights {
    width: 17px;
    height: 17px;
    position: absolute;
    border-radius: 50%;
}

.lights:nth-child(3) {
    top: 118px;
    left: 95px; 
}
.lights:nth-child(4) {
    top: 118px;
    left: 135px; 
}
.lights:nth-child(5) {
    top: 172px;
    left: 70px; 
}
.lights:nth-child(6) {
    top: 180px;
    left: 165px; 
}
.lights:nth-child(7) {
    top: 230px;
    left: 50px; 
}
.lights:nth-child(8) {
    top: 223px;
    left: 175px; 
}
.lights:nth-child(9) {
    top: 280px;
    left: 40px;

}
.lights:nth-child(10) {
    top: 280px;
    left: 190px;
}
.lights:nth-child(11) {
    top: 150px;
    left: 120px;
}
.lights:nth-child(12) {
    top: 200px;
    left: 120px;
}
.lights:nth-child(13) {
    top: 250px;
    left: 120px;
}
.lights:nth-child(14) {
    top: 290px;
    left: 120px;
}

.red {
    background: radial-gradient(circle at 65% 15%, white 1px, #FF3131 30%, darkred 60%, aqua 100%); 
    filter: brightness(.8);
}

.blue {
    background: radial-gradient(circle at 65% 15%, white 1px, aqua 30%, darkblue 60%, aqua 100%); 
    filter: brightness(.8);
}

.lights-on {
    filter: unset;
}

 -->



  // /**
 // * 🎄 Challenge: 
 // * 1. The Christmas tree's lights should switch 
 // *    on and off every 800 miliseconds.
 // * 
 // * Stretch Goal:
 // *    Make the blue and red lights flash alternately.
 // **/ 

function switchLights() {
    setInterval(function() {
        let redLights = document.getElementsByClassName("red")
        let blueLights = document.getElementsByClassName("blue")

        // turn on red lights
        for (let i = 0; i < redLights.length; i++) {
            redLights[i].style.filter = "none"
        }

        // turn off red lights after 1.5 seconds
        setTimeout(function() {
            for (let i = 0; i < redLights.length; i++) {
                redLights[i].style.filter = "grayscale(100%)"
            }
        }, 1500)

        // turn on blue lights after 1.5 seconds
        setTimeout(function() {
            for (let i = 0; i < blueLights.length; i++) {
                blueLights[i].style.filter = "none"
            }
        }, 1500)

        // turn off blue lights after 1.5 seconds
        setTimeout(function() {
            for (let i = 0; i < blueLights.length; i++) {
                blueLights[i].style.filter = "grayscale(100%)"
            }
        }, 3000)
    }, 3000) // total interval for switching lights
}

switchLights()
