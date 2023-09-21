// Get all elements with class "mana.medium" and "mana.large"
const manaMediumElements = document.querySelectorAll('.mana.medium');
const manaLargeElements = document.querySelectorAll('.mana.large');

// Add click event listeners to "mana.medium" elements
manaMediumElements.forEach((element) => {
  element.addEventListener('click', () => {
    console.log("Hello")
  });
});

