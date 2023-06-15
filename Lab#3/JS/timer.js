var seconds = 0;
var minutes = 0;
var hours = 0;

function tick(){
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
}

function add() {
    tick();
    document.getElementById("timer").textContent = "Вы находитесь на этой страничке " +
        (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

function timer() {
    setTimeout(add, 1000);
}