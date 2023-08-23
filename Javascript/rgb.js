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
    
    setTimeout(function() {
        if ((w3color(colorChoice).red == w3color(colorRandom).red) && (w3color(colorChoice).green == w3color(colorRandom).green) && (w3color(colorChoice).blue == w3color(colorRandom).blue)) {
            alert(`Congratulations! You have correctly guessed the color in ${4-tries} ${(function(){if(4-tries == 1){return 'try'}else{return 'tries'}})()}. The color was ${colorRandom}. Fun fact about that color, it is on the visible electromagnetic spectrum.`)
            refresh()
        } else if(tries > 1) {
            tries = tries - 1;
            if (tries == 1) {
                alert("You only have " + tries + " try left!");
            } else {
                alert("You have " + tries + " tries left.");
            }
            
        } else {
            alert("You have run out of tries. Your final guess was " + colorChoice + " and the correct answer was " + colorRandom + ". Your score is " + Math.abs(w3color(colorRandom).red - w3color(colorChoice).red) + Math.abs((w3color(colorRandom).green - w3color(colorChoice).green)) + Math.abs((w3color(colorRandom).blue - w3color(colorChoice).blue)) + ".");
            alert(colorRandom + "   " + colorChoice + "   " + colorRandom[0] - colorChoice[0])
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
    var colorChoiceSquare = document.getElementsByClassName("guessedColor");
    colorChoiceSquare[0].style.backgroundColor = 'white';
    tries = 3;
}
