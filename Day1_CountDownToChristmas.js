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
            return countdownDisplayHours.innerHTML = remainingDaysInHours + "h " + remainingMinutes + "m " + remainingSeconds + "s "
  
        //when Christmas is over:
        if (remainingDaysInHours < 0) {
            clearInterval(remainingMs)
            countdownDisplayHours.innerHTML = "Christmas is over!"
          }
        }, 1000)
    }

renderCountdown()
renderHourCountDown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.