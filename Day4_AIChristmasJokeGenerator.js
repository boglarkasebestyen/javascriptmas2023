/*
HTML:

<!doctype html>
<html>

<head>
    <title>Christmas Joke</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
</head> 
 
<body>
    <main id="window-container">
        <section class="left-door">
            <img src="left-door-min.png">
        </section>
        <section class="joke-display">
            <h1 id="joke-display">
                <span id="joke-question"></span>
                <br/>
                <span id="joke-answer"></span>
            </h1>
        </section>
        <section class="right-door">
            <img src="right-door-min.png">
        </section>
    </main>
    <script src="index.js"></script>
</body>

</html>


CSS:

:root {
  --radius: 5px;
  --main-frame: 15px solid white;
}

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    background-image: url('/xmas-bg3.png');
    background-size: cover;
    display: flex;
    height: 100vh;
    align-items: center;
}

h1 {
    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
}

span {
    display: inline-block; 
    margin: 10px;
}

main {
    display: flex;
    margin: 0 auto;
    position: relative;
    padding: 0;
}

img {
    height: 450px;
    display: block;
}

.left-door {
    border: var(--main-frame);
    border-right: 0;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
}

.left-door img {
    border-right: 0;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
}

.right-door {
    border: var(--main-frame);
    border-left: 0;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}

.right-door img {
    border-left: 0;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}

.joke-display {
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    opacity: 0;
    left: 0; 
    right: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: var(--main-frame);
    height: 100%;
    padding: 1em;
    cursor: pointer;
}

/* animation */

@keyframes display-joke {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes left-open {
  0% {
        transform: translateX(0%);
      }
  100% {
        transform: translateX(-100%);
      }
}

@keyframes right-open {
  from {
        transform: translateX(0%);
      }
  to {
        transform: translateX(100%);
      }
}

*/


/** uncomment one of these **/
// import OpenAI from "openai" --> no
// import { HfInference } from '@huggingface/inference' --> no

/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 🎁 hint.md for help!
 **/
 
/*
API I ended up using: https://sahithyandev.github.io/sv443-joke-api-js-wrapper/
*/

let jokeQuestion = document.getElementById("joke-question")
let jokeAnswer = document.getElementById("joke-answer")

document.getElementById('window-container').addEventListener("click", function () {
    fetch("https://v2.jokeapi.dev/joke/Christmas")
        .then(response => {
            if (!response.ok) {
            throw new Error("Oops, try again!");
            }
            return response.json();
        })
        .then(data => {
            jokeQuestion.innerText = `Q: ${data.setup}` //"setup" is a property of the API
            jokeAnswer.innerText = `A: ${data.delivery}` //"delivery" is a property of the API

        })
        .catch(error => {
            console.error('Error:', error);
        });
       
  
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})

