/* created three varible for hour min  sec and the last count part */
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
/* created timer and set false shows that timer is stop now*/
var timer = false;

/*call start button */
function start() {
    timer = true;
    stopwatch();
}
/* call stop button*/
function stop() {
    timer = false;
}
/*call reset button */
function reset() {
    timer = false;
    /* on click reset then all hour,min,sec and count hand reset to 0*/
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

//  main function which work all the job
function stopwatch() {
    /* counter will start increasing when start button pres*/
    if (timer == true) {
        count = count + 1;

        /* if count cross 100 then again count resert to 0 and second increase 1*/
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        /* if sec cross 60 second then second again reset and minute hand increase by 1*/
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        /* if min cross 60 min then minute and second again reset to 0 and hour increase by 1*/
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        /* to show initial value 00 before crossing 10 string created */
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        /*after every 10 count stopwatch call function */
        setTimeout("stopwatch()", 10);
    }
}