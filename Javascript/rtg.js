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

  });
}

