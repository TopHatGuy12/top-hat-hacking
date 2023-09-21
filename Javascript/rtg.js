// Get all elements with class "mana.medium" and "mana.large"
const manaMediumElements = document.querySelectorAll('.mana.medium');
const manaLargeElements = document.querySelectorAll('.mana.large');

// Add click event listeners to "mana.medium" elements
manaMediumElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove the "medium" class and add the "large" class to the clicked element
    element.classList.remove('medium');
    element.classList.add('large');

    // Set all other "mana.large" elements to "mana.medium"
    manaLargeElements.forEach((largeElement) => {
      if (largeElement !== element) {
        largeElement.classList.remove('large');
        largeElement.classList.add('medium');
      }
    });
  });
});

// Add click event listeners to "mana.large" elements
manaLargeElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove the "large" class and add the "medium" class to the clicked element
    element.classList.remove('large');
    element.classList.add('medium');

    // Set all other "mana.large" elements to "mana.medium"
    manaLargeElements.forEach((largeElement) => {
      if (largeElement !== element) {
        largeElement.classList.remove('large');
        largeElement.classList.add('medium');
      }
    });
  });
});
