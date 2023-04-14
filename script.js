var display = document.getElementById("display");

// initializing variables
var sec = 0;
var min = 0;

// boolean variable to check condition
timeStop = true;

function start() {
    if (timeStop) {
        timeStop = false;
        startTimer();
    }
}

function startTimer() {
    if (timeStop == false) {
        sec = parseInt(sec);
        min = parseInt(min);

        // incrementing second
        sec++;

        // incrementing minute
        if (sec == 60) {
            min++;
            sec = 0;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        // updating the time on display
        display.innerHTML = min + " : " + sec;

        // to call function after every second
        setTimeout("startTimer()", 1000);
    }

}

// function to stop timer
function stop() {
    timeStop = true;
}

// function to reset timer
function reset() {
    timeStop = true;
    sec = 0;
    min = 0;
    display.innerHTML = "00 : 00";
}