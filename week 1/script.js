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

// This was my brain the whole time working on this project (Deltarune music is a bop btw): https://www.youtube.com/watch?v=RhmLoIY5ZVQ
function resizeTarget(targetObject, targetProperty, resizeInt, scaleBasedOnObject) { // Reusable pointer to CSS code for body WIDTH, acting as a resizer
    const container = document.getElementById(`${targetObject}`)
    // isNan will return false if it does NOT parse into a number
    if (!container) { console.error(`The name ${targetObject} either doesn't exist or is spelled incorrectly`) }
    if (isNaN(parseInt(resizeInt))) {console.error("Input to resizeInt isn't a number. Try again.")}

    // This can be used to get the pixel value from the property you point at.
    try {var currentSizepx = window.getComputedStyle(document.getElementById(`${targetObject}`))[targetProperty]; }
    catch(e) {console.error("Cannot get the current size of the scaleBasedOnObject argument")}
    function canvasSizepx() { 
        if (scaleBasedOnObject == true) {
            return window.getComputedStyle(documet.getElementById(`${scaleBasedOnObject}`))[targetProperty];
        }
        else {
            return window.getComputedStyle(documet.getElementById("body"))[targetProperty];
        }

    }
    function containerCalcPercent() {
        value = (canvasSizepx / currentSizepx) * 100; // The variables should contain the pure values in this case because of what they return when called
    }

    
    

    let currentSize = parseInt(currentSizeString) || 0; // Using the OR operator as fallback

    resizeIntCheck = resizeInt.toString(); // Stringify to check index 0 (first symbol)
    switch (resizeIntCheck[0]) {
        case "+": // If plus is specified, ADD the value to the existing CSS-property
            resizeInt = parseInt(resizeInt);
            resizeInt += currentSize;
            break;
        case "-": // If minus is specified, SUBTRACT the value to the existing CSS-property
            resizeInt = parseInt(resizeInt); 
            resizeInt -= currentSize;
            break;
        default:
            console.error("No operator, or switch statement failed") // If something breaks, print a warning
            break; 
        }
   
    container.style[targetProperty] = resizeInt.toString()+"%"
}

function defaultContainerWidth() {
    resizeTarget("container", "width", 50);
} document.getElementById("sizeResetButton").addEventListener("click", defaultContainerWidth);

function containerWidthUp5() {
    // I'll rewrite these functions so the sizeUp functions can be called alone to work the way they're supposed to
    resizeTarget("container", "width", +5);
} document.getElementById("sizeUpButton").addEventListener("click", containerWidthUp5);

function containerWidthDown5(){ resizeTarget("container", "width", -5)}
document.getElementById("sizeDownButton").addEventListener("click", containerWidthDown5);
