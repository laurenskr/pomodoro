let minutes = 25;
let seconds = "00";
let go = true
const secondsCount = document.getElementById("seconds")
const minutesCount = document.getElementById("minutes")

function countdown() {
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
function pause() {
    go = false
}