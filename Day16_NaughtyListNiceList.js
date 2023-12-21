*/

HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>🎅 Naughty List, Nice List 🎁</h1>
        <div class="container">
            <div>
                <h2>Nice List</h2>
                <ul class="list nice-list" id="nice-list"></ul>
            </div>
            <div>
                <h2>Naughty List</h2>
                <ul class="list naughty-list" id="naughty-list"></ul>
            </div>
        </div>
        <button id="btn" type="button">Sort</button>
        <script src="index.js"></script>
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
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: var(--dark-green);
    background-color: var(--snow);
}

h1 { 
    color: var(--dark-green);
}


.container,
.list {
    display: flex;
    justify-content: center;
    align-items:  center;
}

.list {
    margin: 0 1em 1em;
    flex-direction: column;
    width: 200px;
    height: 200px;
    padding: 1em;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    color: var(--snow);
    font-size: 30px;
    list-style-type: none;
}

.nice-list {
    background: var(--dark-green);    
}

.naughty-list {
    background: var(--wine-red);
}

button {
    padding: 1em 2em;
    border: none;
    font-size: 1.2rem;
    background-color: var(--gold);    
    color: var(--dark-green);
    font-weight: 700;
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

button:hover {
    cursor: pointer;
    transform: scale(1.03)
}

/*

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    sort(sorteesArr)
})

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

function sort(obj) {
        for (let i = 0; i < obj.length; i++) {
            let names = document.createElement("div")
            names.className = "obj-names"
            names.append(obj[i].name) //append the names from the obj to the new "names" div(s) 

            if (obj[i].hasBeenGood === false) {
                niceList.append(names) //append new div(s) to the niceList div
            } else if (obj[i].hasBeenGood === true) {
                naughtyList.append(names) //append new div(s) to the niceList div
            }
        }
    }






