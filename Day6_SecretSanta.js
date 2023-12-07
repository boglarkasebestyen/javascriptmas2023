const btn = document.getElementById("button")
btn.addEventListener('click', onButtonClick)
const outputContainer = document.getElementById('output-container')

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
let secretSantaPairs = {}

function generateSecretSantaPairs(participantsList) {
    //Your code here
    // let secretSantaPairs = {}

    for (let i = 0; i < participantsList.length; i++) {
        //creating a copy of the array to avoid modifying the original
        let allParticipants = [...participantsList]
        console.log("allParticipants: " + allParticipants)
        
        //removing the person that was paired with Santa, but returning the array, not the person 
        //slice(0, i) captures elements before the current participant
        //slice(i + 1) captures elements after the current participant
        let remainingParticipants = allParticipants.slice(0, i).concat(allParticipants.slice(i + 1))
        // storing (for my sake), logging the participant that was paired w/Santa / removed from the array 
        let removedParticipant = allParticipants[i];
        console.log("remainingParticipants: " + remainingParticipants)
        console.log("selected participant for Santa: " + removedParticipant)

        let randomIndex = Math.floor(Math.random() * remainingParticipants.length)
        let selectedSanta = remainingParticipants[randomIndex]
        console.log("selectedSanta: " + selectedSanta)

        secretSantaPairs[participantsList[i]] = selectedSanta
        console.log("selectedSanta in object: " + selectedSanta)
    }
    return secretSantaPairs
}

function onButtonClick() {
    generateSecretSantaPairs(people)
    outputContainer.innerHTML = '' //clear
    
    //creating a new paragraph for each key-value pair in the object
    for (const [key, value] of Object.entries(secretSantaPairs)) {
        const paragraph = document.createElement("p")
        paragraph.textContent = `${key} is the Secret Santa for ${value}`
        outputContainer.appendChild(paragraph)
    }
}

// console.log(generateSecretSantaPairs(people))
/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */

/*HTML:

<!doctype html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,800;1,200&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div id="button-border">
                <button type="button" id="button">
                    Draw names!
                </button>
            </div>
            <div id="output-container">
                <div id="names"></div>
            </div>
        </div>
        </div>
    </body>
    <script src="index.js" type="module"></script>
</html>

CSS:

body {
    margin: 0;
    padding: 0;
    background: var(--body-bg);
    font-family: var(--font-family);
}

:root {
    --font-family: 'Karla', sans-serif;
    --body-bg: #1E1F25;
    --btn-bg: #000;
    --btn-color: #cbcbcb;
    --btn-color-hover: #fff;
    --grad-color1: #eeaf61;
    --grad-color2: #fb9062;
    --grad-color3: #ee5d6c;
    --grad-color4: #ce4993;
    --grad-color5: #6a0d83;
}

.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#button-border {
    margin-bottom: 20px;
    padding: 3px;
    background: linear-gradient(115deg, var(--grad-color1), var(--grad-color2), var(--grad-color3), var(--grad-color4), var(--grad-color5));
}

#button {
    padding: 10px;
    border: none;
    color: var(--btn-color);
    background: var(--btn-bg);
    font-family: inherit;
    cursor: pointer;
}

#button-border:hover {
    background: linear-gradient(115deg, var(--grad-color5), var(--grad-color4), var(--grad-color3),var(--grad-color2), var(--grad-color1));
}

#button:hover {
    color: var(--btn-color-hover);
}

#output-container {
    padding: 10px;
    border: 1px solid #ccc;
    background:  linear-gradient(115deg, var(--grad-color5), var(--grad-color4), var(--grad-color3),var(--grad-color2), var(--grad-color1));
}

/*