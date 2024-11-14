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
    try {
        parseInt(resizeInt);
        toString(targetProperty);
        toString(targetObject);
    }
    catch(e) {
        console.error("This isn't a number, or something broke. Try again.")
    }
    while (Number.isInteger(resizeInt)) {
        container.targetProperty = toString(resizeInt)+"%" // Parsing as int to prevent invalid strings/properties.
    }
}


function defaultSize() {
    resizeTarget("container", "width", 50);
}
document.getElementById("sizeResetButton").addEventListener("click", defaultSize());

function sizeUp() {
    resizeTarget("container", "width", 80)
}
document.getElementById("sizeUpButton").addEventListener("click", sizeUpButton());

function sizeDown() {
    resizeTarget("container", "width", 30)
}
document.getElementById("sizeDownButton").addEventListener("click", sizeDownButton());
