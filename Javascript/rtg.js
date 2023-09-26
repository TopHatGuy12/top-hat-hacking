const manaElements = document.getElementsByClassName('mana')

for (let i=0; i < manaElements.length; i++) {
  var element = manaElements[i];
  element.addEventListener('click', () => {
    
    for (let i=0; i < manaElements.length; i++) {
        var otherElem = manaElements[i];
      otherElem.classList.remove('medlarge')
      otherElem.classList.add('medium')
    }
    
    element.classList.remove('medium');
    element.classList.add('medlarge');

  });
}

