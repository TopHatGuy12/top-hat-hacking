window.onload = function() {
    hideElements();
    typewriterAnimation();
};

function hideElements() {
    document.querySelectorAll(".mainhidden").forEach(function (element) {
      element.style.display = "none";
    });
}

function typewriterAnimation() {
    document.querySelectorAll(".opentype").forEach(function(element) {
        if (!element.dataset.value) {
            element.dataset.value = element.innerText;
        }

        let i = 0;
        let j = 0;
        const textLength = element.dataset.value.length;

        const typewriterInterval = setInterval(function() {
            if (i >= textLength) {
                element.innerText = element.dataset.value.slice(0, i + 1);
                clearInterval(typewriterInterval);
                document.getElementsByClassName('blockingDiv')[0].style.opacity='0'
                const typerthingblink = setInterval(function() {
                    if (j % 2 == 0) {
                        element.innerText = element.dataset.value.slice(0, i + 1) + "<span>|</span>";
                        j++;
                    } else {
                        element.innerText = element.dataset.value.slice(0, i + 1) + "<span style=\"opacity:0%;\">|</span>";
                        j++;
                    }
                }, 700);
            } else {
                element.innerText = element.dataset.value.slice(0, i + 1) + "<span>|</span>";
                i++;
            }
        }, 100); // Adjust the interval (in milliseconds) to control the typing speed
    });

}
