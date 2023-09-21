// Get all elements with class "mana.medium" and "mana.large"
const manaMediumElements = document.querySelectorAll('.mana.medium');
const manaMedlargeElements = document.querySelectorAll('.mana.medlarge');

// Add click event listeners to "mana.medium" elements
manaMediumElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove the "medium" class and add the "large" class to the clicked element
    element.classList.remove('medium');
    element.classList.add('medlarge');

    // Set all other "mana.large" elements to "mana.medium"
    manaMedlargeElements.forEach((medlargeElement) => {
      if (medlargeElement !== element) {
        medlargeElement.classList.remove('medlarge');
        medlargeElement.classList.add('medium');
      }
    });
  });
});

// Add click event listeners to "mana.large" elements
manaMedlargeElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove the "large" class and add the "medium" class to the clicked element
    element.classList.remove('medlarge');
    element.classList.add('medium');

    // Set all other "mana.large" elements to "mana.medium"
    manaMedlargeElements.forEach((medlargeElement) => {
      if (medlargeElement !== element) {
        medlargeElement.classList.remove('medlarge');
        medlargeElement.classList.add('medium');
      }
    });
  });
});
