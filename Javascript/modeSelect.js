var encodeButton = document.getElementById("encodeButton")
var decodeButton = document.getElementById("decodeButton")
var messageBox = document.getElementById("messageBox")
var mode = "encode";
var encodeDefault = "Enter your plaintext message here."
var decodeDefault = "Enter your TopHatCipher message here."

function encodeMode() {
    encodeButton.style.color = 'darkgreen'
    encodeButton.style.fontSize = '22px'
    decodeButton.style.color = 'antiquewhite'
    decodeButton.style.fontSize = '20px'
    if (messageBox.value == decodeDefault) {
        messageBox.value = encodeDefault
    }
}

function decodeMode() {
    decodeButton.style.color = 'darkgreen'
    decodeButton.style.fontSize = '22px'
    encodeButton.style.color = 'antiquewhite'
    encodeButton.style.fontSize = '20px'
    if (messageBox.value == encodeDefault) {
        messageBox.value = decodeDefault
    }
}