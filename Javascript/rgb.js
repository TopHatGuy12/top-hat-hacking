var tries = 3;

window.onload = function() {
    refresh();
    var importElem = document.createElement('script');
    importElem.src="https://www.w3schools.com/lib/w3color.js";
    document.body.appendChild(importElem);
};

function submitColor() {
    var colorChoiceInput = document.getElementsByClassName("colorInput");
    var colorChoice = colorChoiceInput[0].value;
    var colorChoiceSquare = document.getElementsByClassName("guessedColor");
    colorChoiceSquare[0].style.backgroundColor = colorChoice;
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    var colorRandom = colorRandomSquare[0].style.backgroundColor;

    console.log(w3color(colorChoice))
    console.log(w3color(colorRandom))
    
    setTimeout(function() {
        if ((w3color(colorChoice).red == w3color(colorRandom).red) && (w3color(colorChoice).green == w3color(colorRandom).green) && (w3color(colorChoice).blue == w3color(colorRandom).blue)) {
            alert(`congratulations! You have correctly guessed the color. The color was ${colorRandom}.`)
            refresh()
        } else if(tries > 1) {
            tries = tries - 1;
            if (tries == 1) {
                alert("You only have " + tries + " try left!");
            } else {
                alert("You have " + tries + " tries left.");
            }
            
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
    var colorChoiceInput = document.getElementsByClassName("colorInput");
    colorChoiceInput[0].value = "";
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    colorRandomSquare[0].style.backgroundColor = randomRgbColor();
    tries = 3;
}
