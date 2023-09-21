const manaMediumElements = document.querySelectorAll('.mana.medium');
const manaLargeElements = document.querySelectorAll('.mana.large');

manaMediumElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.remove('medium');
    element.classList.add('large');

    manaLargeElements.forEach((largeElement) => {
      if (largeElement !== element) {
        largeElement.classList.remove('large');
        largeElement.classList.add('medium');
      }
    });
  });
});
