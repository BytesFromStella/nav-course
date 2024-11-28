counter = 0;
let counterpoint = document.getElementById("counter");
counterpoint.innerHTML = "0";

function countUp() {
    let currentValue = parseInt(counterpoint.innerHTML);
    counterpoint.innerHTML = currentValue+1;
}

function countDown() {
    let currentValue = parseInt(counterpoint.innerHTML);
    counterpoint.innerHTML = currentValue-1;
}


