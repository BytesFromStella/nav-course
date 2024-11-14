function alertButton() {

    var num1 = 21;
    console.log(`number 1: ${num1}`);
    let num2 = 42;
    console.log(`number 2: ${num2}`);

    let sum = num1+num2;
    console.log(`total sum: ${sum}`);

    alert(`${sum}`)
    alert(parseInt(sum))
}


function resizeTarget(targetObject, targetProperty, resizeInt) { // Reusable pointer to CSS code for body WIDTH, acting as a resizer
    const container = document.getElementById(`${targetObject}`)
    if (!container) {
        console.error(`The name ${targetProperty} either doesn't exist or is spelled incorrectly`)
        return;
    }

    try {
        resizeInt = parseInt(resizeInt);
        container.style[targetProperty] = resizeInt.toString()+"%" 
    }

    catch(e) {
        console.error("This isn't a number. Try again.")
        return;
    }
}

function defaultSize() {
    resizeTarget("container", "width", 50);
}
document.getElementById("sizeResetButton").addEventListener("click", defaultSize);

function sizeUp() {
    resizeTarget("container", "width", 80)
}
document.getElementById("sizeUpButton").addEventListener("click", sizeUp);

function sizeDown() {
    resizeTarget("container", "width", 30)
}
document.getElementById("sizeDownButton").addEventListener("click", sizeDown);
