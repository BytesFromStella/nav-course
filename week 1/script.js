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

function resizeTarget(targetCSS) { // Reusable pointer to CSS code for body WIDTH, acting as a resizer
    document.documentElement.style.setProperty("bodySizeAdjust", parseint(targetCSS)+"%") // Parsing as int to prevent invalid strings/properties.
}

function sizeUpButton() {
    resizeTarget(90)
}

document.getElementById()