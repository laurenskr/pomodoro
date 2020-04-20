let minutes = 25;
let seconds = "00";
let go = true
const secondsCount = document.getElementById("seconds")
const minutesCount = document.getElementById("minutes")
//countdown timer every 1000ms
function countdown() {
    //check if timer should still go (pause() sets go to false)
    go = true
    window.setInterval(function(){
    if (go){
    seconds--
    if (seconds < 0) {
        seconds = 59
        minutes--
        minutesCount.innerText = minutes
    }
    else if (seconds < 10) {
        seconds = "0" + seconds 
    }
    secondsCount.innerText = seconds
}
  }, 1000);}
//pause the timer by setting go to false
function pause() {
    go = false
}