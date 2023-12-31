var tries = 3;

window.onload = function() {
    refresh();
    var importElem = document.createElement('script');
    importElem.src="https://www.w3schools.com/lib/w3color.js";
    document.body.appendChild(importElem);
};

function calcScore(inputColor, targetColor) {
    const rDiff = Math.abs(targetColor[0] - inputColor[0]);
    const gDiff = Math.abs(targetColor[1] - inputColor[1]);
    const bDiff = Math.abs(targetColor[2] - inputColor[2]);

    const score = (765 - (rDiff + gDiff + bDiff)) / 765;

    return score;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


function submitColor() {
    var colorChoiceInput = document.getElementsByClassName("colorInput");
    var colorChoice = colorChoiceInput[0].value;
    var colorChoiceSquare = document.getElementsByClassName("guessedColor");
    colorChoiceSquare[0].style.backgroundColor = colorChoice;
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    var colorRandom = colorRandomSquare[0].style.backgroundColor;
    
    setTimeout(async function() {
        var colorChoiceName=(await (await fetch(`https://www.thecolorapi.com/id?rgb=${colorChoiceColor.red},${colorChoiceColor.green},${colorChoiceColor.blue}`)).json()).name.value  
        var colorRandomName=(await (await fetch(`https://www.thecolorapi.com/id?rgb=${colorRandomColor.red},${colorRandomColor.green},${colorRandomColor.blue}`)).json()).name.value
        if (colorChoiceName == colorRandomName) {
            var actualColor = w3color(colorChoice)
            var colorName=(await (await fetch(`https://www.thecolorapi.com/id?rgb=${actualColor.red},${actualColor.green},${actualColor.blue}`)).json()).name.value
            alert(`Congratulations! You have correctly guessed the color in ${4-tries} ${(function(){if(4-tries == 1){return 'try'}else{return 'tries'}})()}. The color was ${colorName}. You score was ${(1*100)*((tries+1)/4)}%. Fun fact about ${colorName}, it is on the visible electromagnetic spectrum.`)
            refresh()
        } else if(tries > 1) {
            tries = tries - 1;
            if (tries == 1) {
                alert("You only have " + tries + " try left!");
            } else {
                alert("You have " + tries + " tries left.");
            }
            
        } else {
            var colorChoiceColor = w3color(colorChoice)
            var colorRandomColor = w3color(colorRandom)
            var colorChoiceName=(await (await fetch(`https://www.thecolorapi.com/id?rgb=${colorChoiceColor.red},${colorChoiceColor.green},${colorChoiceColor.blue}`)).json()).name.value  
            var colorRandomName=(await (await fetch(`https://www.thecolorapi.com/id?rgb=${colorRandomColor.red},${colorRandomColor.green},${colorRandomColor.blue}`)).json()).name.value
            alert(`You have run out of tries. Your final guess was ${colorChoiceName} and the correct answer was ${colorRandomName}. You got a score of %${((calcScore([colorChoiceColor.red,colorChoiceColor.green,colorChoiceColor.blue],[colorRandomColor.red,colorRandomColor.green,colorRandomColor.blue])*100)*((tries+1)/4)).toFixed(2)}.`);
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
    colorChoiceInput[0].value = "rgb(0, 0, 0)";
    var colorRandomSquare = document.getElementsByClassName("randomColor");
    colorRandomSquare[0].style.backgroundColor = randomRgbColor();
    var colorChoiceSquare = document.getElementsByClassName("guessedColor");
    colorChoiceSquare[0].style.backgroundColor = 'white';
    tries = 3;
}

