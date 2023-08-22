var tries = 3;

window.onload = function() {
    refresh();
};

function submitColor() {
    var colorChoiceInput = document.getElementsByClassName("colorInput");
    var colorChoice = colorChoiceInput[0].value;
    var colorChoiceSquare = document.getElementsByClassName("guessedColor");
    colorChoiceSquare[0].style.backgroundColor = colorChoice;
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    var colorRandom = colorRandomSquare[0].style.backgroundColor;

    setTimeout(function() {
        if(tries > 1) {
            tries = tries - 1;
            alert("You have " + tries + " tries left.");
        } else {
            alert("You have run out of tries. Your final guess was " + colorChoice + " and the correct answer was " + colorRandom + ".");
            refresh();
        }
    }, 50);

}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function refresh() {
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    colorRandomSquare[0].style.backgroundColor = randomRgbColor();
    tries = 3;
}
