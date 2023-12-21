*/
HTML:

<html>
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Christmas Dinner Picker</h1>
        <p class="result" id="result">Your ideal Christmas dinner is <span id="food">...</span></p>
        <form>
            <label for="name">How many guests are coming?</label>
            <input id="num-input" type="number" id="guests" name="guests">
            <div class="veggie">
                <input type="checkbox" id="vegetarian-input" name="vegetarian" checked>
                <label for="name">Vegetarian?</label>            
            </div>
            <button id="btn" type="button">Calculate</button>
        </form>
        <script src="index.pack.js"></script>
    </body>
</html>

CSS:

:root {
  --wine-red: #C7375F;
  --bright-red: #D42D2F;
  --dark-green: #344D2F;
  --light-green: #77A047;
  --gold: #FAC57D;
  --snow: #F0F4F7;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    color: var(--snow);
    background-color: var(--wine-red);
}

h1 { 
    margin: 0;
    text-align: center;
}

form input,
form button,
.result {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;
    border: none;
}

form {
    display: flex;
    flex-direction: column;
    height: 12em;
    justify-content: space-around;
}


form * {
   padding: .5em;
   font-size: 1.3rem
}

label {
    padding: 0;
}

input { 
    background: var(--snow);
    color: var(--dark-green);
}

.veggie {
    padding-left: 0;
    display: flex;
    align-items: center;
}

.veggie > input {
    margin-right: 10px;
}

.result {
    color: var(--wine-red);
    min-width: 350px;
    max-width: 5ch;
    overflow-y: scroll;
    overflow-x: hidden;
    background: var(--snow);
    padding: 1em;
    font-size: 1.5rem;
}

.result span {
    color: var(--dark-green);
    font-weight: 900
}

button {
    color: var(--dark-green);
    background: var(--gold);
    margin-bottom: 20px;
}

button:hover,
button:focus {
    transform: scale(1.05);
    cursor: pointer;  
}


/*

/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
let dinner = document.getElementById("result")
let checkbox = document.getElementById("vegetarian-input")
let button = document.getElementById("btn")
button.addEventListener("click", function () {
    let guestCount = document.getElementById("num-input").value // get the nr of guests from the input field first
    dinnerCalc(guestCount);
})

function dinnerCalc(guestnr) {
    switch (true) {
        case guestnr <= 0:
            alert("No guests?")
            break
        case !checkbox.checked && guestnr <= 4:
            console.log(guestnr);
            dinner.innerHTML = "töltött tojás"
            break
        case !checkbox.checked && guestnr > 4:
            console.log(guestnr)
            dinner.innerHTML = "töltött káposzta"
            break
        case checkbox.checked:
            console.log(guestnr)
            dinner.innerHTML = "mákosbejglitmertaztszeretem"
            break
    }
}


