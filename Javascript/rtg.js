const manaElements = document.getElementsByClassName('mana')

for (let i=0; i < manaElements.length; i++) {
  var element = manaElements[i];
  element.addEventListener('click', (event) => {
    
    for (let i=0; i < manaElements.length; i++) {
        var otherElem = manaElements[i];
      otherElem.classList.remove('medlarge')
      otherElem.classList.add('medium')
    }
    
    event.target.classList.remove('medium');
    event.target.classList.add('medlarge');

    var number = event.target.id.charAt(event.target.id.length-1);

    document.getElementById('result').innerHTML=generateResults(number)

  });
}

function generateResults(people) {
    console.log(people)
    if (!isNaN(parseInt(people))) {
        const peopleNumber = parseInt(people);
        console.log(peopleNumber)
        if (peopleNumber === 1) {
            return "Solitaire";
        } else if (peopleNumber < 2) {
            return "Use a positive number greater than or equal to 2";
        } else {
            const magicGames = [];
            if (peopleNumber >= 2) {
                magicGames.push('Standard');
                magicGames.push('Random Standard');
                magicGames.push('Chaos Deck');
            }
            if (peopleNumber >= 3) {
                magicGames.push('Commander');
                magicGames.push('Random Commanders');
                magicGames.push('Archenemy');
            }
            if (peopleNumber >= 4 && peopleNumber % 2 === 0) {
                magicGames.push('Team Standard');
                magicGames.push('Two Headed Giant');
                magicGames.push('Commander Archenemy');
            }
            if (peopleNumber >= 6 && peopleNumber % 3 === 0) {
                magicGames.push('Emperor-General');
            }
            if (peopleNumber >= 5) {
                magicGames.push('Bang!');
                magicGames.push('Star');
            }
            if (peopleNumber >= 6) {
                magicGames.push('Hidden Ally');
            }
            if (peopleNumber >= 4) {
                magicGames.push('Horde');
            }
            const randomIndex = Math.floor(Math.random() * magicGames.length);
            return magicGames[randomIndex];
        }
    } else {
        return 'Please enter a valid number';
    }
}
