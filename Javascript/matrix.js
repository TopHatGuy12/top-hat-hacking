const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&@#$%^&";
let intervals = [];

document.querySelectorAll(".Matrix").forEach(element => {
  let interval = null;

  element.onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 38)];
        })
        .join("");

      iteration += 1 / 3;
      element.style.color = "black";
      element.style.background = "darkgreen";

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
        element.removeAttribute('style')
      }
    }, 30);

  };


  intervals.push(interval);

});
