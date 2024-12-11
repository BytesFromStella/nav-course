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

// TODO: Math.random to select a random index. Make sure to add a condition that cycles it to a new index every time

let fortunePointer = document.getElementById("fortune");

function fortunePicker() {
    fortunes = ["bap","beep","boop","bep","GONG", "bonk"];
    let ranIndex = Math.floor(Math.random() * fortunes.length);
    fortunePointer.innerHTML = fortunes[ranIndex];
}