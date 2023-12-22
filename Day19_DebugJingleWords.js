import JSConfetti from 'js-confetti'

const word = 'santa'
const wordArr = word.split('')
console.log("this is wordArr: " + wordArr)
const wordDisplay = document.getElementById('word-display')
document.addEventListener('submit', handleGuess)

// need to initialize currentState outside of handleGuess, else it resets at every guess there's no letter that matches wordArr   ("santa")
let currentState = Array(wordArr.length).fill("-");

function renderSpaces() {
    const wordHtml = currentState.map((letter) => { //instead of wordArr.map(()
        return `<span class="letter">${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

function handleGuess(e) {
    e.preventDefault()
    
// /**
//  * Debug Challenge:
//  * 1. There are loads of problems with the 
//  *    code below. Find them and fix them!
//  **/
    
    //original:
    // let currentState = []
    //     let input = document.getElementById('users-input')
    //     let guess = input.id
    //     const guessArr = guess.split(' ')
    //     wordArr.foreach((letter) => {
    //         if (letter === guessArr['']) {
    //             currentState.push(letter)
    //         } else {
    //             currentState.push(letter)
    //         }
    //     })

    let input = document.getElementById('user-input')
    let guess = input.value
    console.log("this is guess: " + guess)

    const guessArr = guess.split('')
    console.log("guessArr is: " + guessArr)

    // creating a temporary array to store the new state
    let newCurrentState = currentState.slice();
    console.log("this is newCurrentState: " + newCurrentState)

    wordArr.forEach((letter, index) => {
        if (guessArr.includes(letter)) {
            console.log("guessArr includes letter: " + letter);
            newCurrentState[index] = letter;
        }
    });

    // new: updating currentState at the end
    currentState = newCurrentState;
    
    /* bugs end 🦠*/ 
    renderSpaces();
    checkWin(guess);
    input.value = '';
}

//original:
// function checkWin(guess) {
//     if (word === guess) {
//         const jsConfetti = new JSConfetti()
//         jsConfetti.addConfetti({
//             emojis: ['🧑‍🎄', '🎅'],
//             emojiSize: 50,
//             confettiNumber: 60,
//             confettiRadius: 6,
//         })
//         jsConfetti.addConfetti()
//     }
// }

function checkWin() {
    if (currentState.join('') === wordArr.join('')) { //new
    
        console.log("currentState in checkWin is: " + currentState)
        console.log("wordArr in checkWin is: " + wordArr)
        console.log("currentState.join('') is: " + currentState.join(''))
        console.log("wordArr.join('') is: " + wordArr.join(''))
        
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        });
        jsConfetti.addConfetti();
    }
}


