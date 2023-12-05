const countdownDisplayDays = document.getElementById("countdown-displaydays")

function renderCountdown() {
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    let todaysFullDate = new Date()
    let today = todaysFullDate.getDate()
    console.log(`full date is: ${todaysFullDate}`)
    console.log(`today is: ${today}`)
    // - Calculate remaining days.
    let remainingDays = christmas - today
    console.log(`remaining days are: ${remainingDays}`)
    
    //when Christmas is over:
    if (remainingDays < 0) {
        return countdownDisplayDays.innerHTML = "No more..."
    }
    
    // - Display remaining days in countdownDisplay.
    return countdownDisplayDays.innerHTML = remainingDays 
} 
    
    // Stretch goals:
    // - Display hours, minutes, seconds. 
const countdownDisplayHours = document.getElementById("countdown-displayhours")
    function renderHourCountDown() {
        let countingDownToDate = new Date("Dec 24, 2023 23:59").getDate() //returns day of month (24)
        let countingDownToMs = new Date("Dec 24, 2023 23:59").getTime() //returns the number of milliseconds until dec 24 since January 1, 1970
        console.log(`ms until Xmas: ${countingDownToMs}`)
        
        //display countdown every second 
        let setTimeInterval = setInterval(function() {
            let todaysFullDate = new Date()
            let todaysTimeInMs = todaysFullDate.getTime() //returns the number of milliseconds since January 1, 1970 until today
            let todayInMonth = todaysFullDate.getDate() //returns day of month / today
            // - Calculate remaining days.
            let remainingDays = countingDownToDate - todayInMonth 
            let remainingMs = countingDownToMs - todaysTimeInMs
            // console.log(`remaining days till Xmas are: ${remainingDays}`)
            let remainingDaysInHours = remainingDays * 24
            let remainingMinutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60))
            let remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000)
            
        //when Christmas is over:
        if (remainingDays < 0) {
            clearInterval(remainingDaysInHours)
            clearInterval(remainingMinutes)
            clearInterval(remainingSeconds)
            return countdownDisplayHours.innerHTML = "No more..."
          }
          
            return countdownDisplayHours.innerHTML = remainingDaysInHours + "h " + remainingMinutes + "m " + remainingSeconds + "s "
            console.log("remaining days in hours is: " + remainingDaysInHours)  
        }, 1000)
    }

renderCountdown()
renderHourCountDown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.


/* HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Christmas Countdown 🎄</h1>
        <div class="container">
            <p id="countdown-displaydays" class="countdown-displaydays">-</p>
            <p class="countdown-text">days 'til Christmas!</p>
        </div>
        
        <div class="container">
            <p id="countdown-displayhours" class="countdown-displayhours">-</p>
            <p class="countdown-text">'til Christmas!</p>
        </div>
        
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

.container {
    display: flex;
    flex-direction: column;
    background: var(--wine-red);
    color: var(--snow);
    padding: 1em 2em;
    border-radius: 5px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.countdown-displaydays {
    font-size: 100px;
    margin: 0;
}

.countdown-displayhours {
    width: 135px;
    font-size: 21px;
    margin: 0;
}



/*