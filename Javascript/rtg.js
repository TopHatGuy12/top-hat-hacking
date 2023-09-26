const manaElements = document.getElementsByClassName('mana')

for (let i=0; i < manaElements.length; i++) {
  var element = manaElements[i];
  element.addEventListener('click', () => {
    
    for (let i=0; i < manaElements.length; i++) {
        var otherElem = manaElements[i];
      otherElem.classList.remove('medlarge')
      otherElem.classList.add('medium')
    }
    
    this.classList.remove('medium');
    this.classList.add('medlarge');

  });
}

