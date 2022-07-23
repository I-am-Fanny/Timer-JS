//1º: Declarate the variable
let inputs, clock, alarm, hours, minutes, seconds, repeater;

/*look for the inputs in HTML documents*/
window.addEventListener("load", () => {
  inputs = Array.from(document.getElementsByClassName("number"));
  clock = document.querySelector(".clock");
  alarm = new Audio('sounds/alarm-clock.mp3');
});

/*Create a function to start the timer*/
function startTimer() {
  //Read the inputs: Call to parseTime().
  parseTime();
//Update view : call to setTimer().
  setTimer();
  //Start the timer
  countDown();
}

//Declarate a function to read the inputs
function parseTime() {
  //Transform string values to number values.
  hours = Number(inputs[0].value);
  minutes = Number(inputs[1].value);
  seconds = Number(inputs[2].value);
}

//Declarate a function to refresh view.
function setTimer() {
  //Look for the innerHTML of 'clock'
  clock.innerHTML = `<p class="number">${hours > 9 ? hours:('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes:('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds:('0' + seconds)}</p><span>seg</span>`

  //Show values in tab
  document.title = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes:('0' + minutes)}:${seconds > 9 ? seconds:('0' + seconds)}}`
}


//Declarate a function to start the timer
function countDown(){
    //repeater call to runner function every minute.
    repeater = setInterval(runner,1000);
}

function runner(){
    /*If it has more than 0 seconds, substract seconds.*/
    if(seconds > 0){
        seconds--;
    }
    /*If It has  0 seconds but it has more than 0 minutes, put seconds in 59 and substract 1 to minute*/
    else if(minutes > 0){
        seconds = 59;
        minutes--;
    }
    /*If It has 0 seconds and 0 minutes but it has more than 0 hours, put seconds and minutes in 59, and substract 1 to hours*/
    else if(hours > 0){
        seconds = 59 ;
        minutes = 59;
        hours--;
    }
    /*Else start the alarm */
    else{
       alarm.play();
    }
    setTimer();
}

//Create a function to stop the timer

function stopTimer(){
    //Stop the repeater.
    clearInterval(repeater);
    //Reload the browser;
    location.reload();
}

