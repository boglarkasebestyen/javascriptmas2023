*/

HMTL:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Lonely Elf</h1>
        <div class="elf-hangout-zone">
            <div id="elf" class="elf">🧝</div>
        </div>
        <button id="btn">Duplicate elf</button>

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
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: var(--dark-green);
    background-color: var(--snow);
}

.elf-hangout-zone {
    /* Limit the number of elves to 6 per row. */
    /* Make sure that the elves stay in the elf hangout zone, 
    no matter how many there are. */

    display: flex;
    justify-content: center;
    align-items:  center;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 300px;
    min-width: 300px;
    max-height: 300px;
    overflow-y: scroll;
    background: var(--wine-red);
    padding: 1em 2em;
    margin: 1em;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

h1 { 
    margin: 0;
}

.elf, .newElf {
    font-size: 30px;
    display: flex;
    height: 30px; 
    width: 30px;
    padding: 10px;
    flex-wrap: wrap;
    /* background: yellow; */
}

button {
    padding: 1em 2em;
    border: none;
    font-size: 1.2rem;
    background-color: var(--dark-green);
    color: var(--snow);
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

button:hover {
    cursor: pointer;
    transform: scale(1.03)
}


/*

const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const elfZone = document.getElementsByClassName("elf-hangout-zone")[0]

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  let newElf = document.createElement("div")
  newElf.className = "newElf"
  newElf.textContent = "🧝";

  elfZone.appendChild(newElf)
  console.log(newElf)
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/