//Script for various secrets that appear when the coorect thing is typed.
var keys = [];
var secretCode = ['asher', 'hippopotomonstrosesquippedaliophobia', 'projects', "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter"];
var futureProjects = ["Team Maker", " randoMTGame", " Word of the Day", "adding score to RGB guesser", "making the website responsive", " finishing the website"]

function codeMet(whichCode) {
    if(whichCode == 'asher') {
        alert("You found a Key Sequence Detection!");
    }
    if(whichCode == 'projects') {
        alert('Here is a list of projects I am working on: ' + futureProjects + '.')
    }
    if(whichCode == 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter') {
        alert('At least you know the original Konami Code');
    }
    if(whichCode == 'hippopotomonstrosesquippedaliophobia') {
        alert('The fear of long words. Nice job typing that.')
    }
}

window.addEventListener('keyup', (e) => {
    keys.push(e.key);
    typedword = keys.join().replaceAll(",", "");
    meetsCriteria = 0
    for(var i = 0; i < secretCode.length; i++) {
        partCode = secretCode[i].slice(0, typedword.length)
        if (typedword == partCode) {
            meetsCriteria = 1
            if (typedword == secretCode[i]) {
                codeMet(secretCode[i]);
                keys = [];
            }
        }
    }
    if(meetsCriteria == 0) {
        keys = [];
    }
})
