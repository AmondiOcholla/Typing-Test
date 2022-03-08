const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector(".test-area");
const originText = document.querySelector(".origin-text p");
// .innerHTML;
const resetButton = document.querySelector(".reset");
const theTimer = document.querySelector(".timer");

//match the text entered with the provided test on the page
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}
//start timer
function start() {
    let textEnteredlength = testArea.value.length;
    console.log(textEnteredlength);
}
//run timer

//reset everything
function reset() {
    console.log("reset button has been pressed");
}

//event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false)