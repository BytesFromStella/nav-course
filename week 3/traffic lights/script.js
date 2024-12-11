let colorCount = 0;
function backgroundSwap() {
    let pointer = document.body; /* The body tag has a special globally pre-defined pointer */
    switch(colorCount){
        case 1:
            pointer.style.backgroundColor = "cyan";
            colorCount++;
            break;
        case 2:
            pointer.style.backgroundColor = "orange";
            colorCount++;
            break;
        case 3:
            pointer.style.backgroundColor = "#B28DFF"
            colorCount++
            break;
        default:
            pointer.style.backgroundColor = "black";
            colorCount = 0;
            colorCount++;
            break;
    }
}

let colorSwapButton = document.getElementById("colorSwap");
colorSwapButton.addEventListener("click", backgroundSwap);

/* ------------------------------------------------------------------------------*/
/* Traffic lights */
let cycleCheck = false;

var light1 = document.getElementById("light1");
var light2 = document.getElementById("light2");
var light3 = document.getElementById("light3");

let state = 0;
function lightLoop() {
    let intervalid = setInterval(() => {
        if (!cycleCheck) {
            clearInterval(intervalid);
            return;
        }
        console.log("Running interval");
        /* I could also use a switch statement for this, but elif is clearer */
        if(state == 0) {
            light1.style.backgroundColor = "red";
            light3.style.backgroundColor = "black";
            light2.style.backgroundColor = "black";
            state = 1;
        }
        
        else if(state == 1) {
            light2.style.backgroundColor = "yellow";
            state = 2;
        }
        
        else if(state == 2){
            light1.style.backgroundColor = "black";
            light2.style.backgroundColor = "black";
            light3.style.backgroundColor = "green";
            state = 0;
        }
        
    }, 
    1000);}

let startButton = document.getElementById("startLightCycle"); startButton.addEventListener("click", (event) => {cycleCheck = true; lightLoop();});
let stopButton = document.getElementById("stopLightCycle"); stopButton.addEventListener("click", (event) => {cycleCheck = false;});


/* Keyboard .this */


