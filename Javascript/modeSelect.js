var encodeButton = document.getElementById("encodeButton")
var decodeButton = document.getElementById("decodeButton")
var messageBox = document.getElementById("messageBox")
var mode = "encode";
var encodeDefault = "Enter your plaintext message here."
var decodeDefault = "Enter your TopHatCipher message here."
var finishedMessageBox = document.getElementById("finishedMessage")
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var caeser = 0
var ER = ""

function encodeMode() {
    encodeButton.style.color = 'darkgreen'
    encodeButton.style.fontSize = '22px'
    decodeButton.style.color = 'antiquewhite'
    decodeButton.style.fontSize = '20px'
    if (messageBox.value == decodeDefault) {
        messageBox.value = encodeDefault
    }
    mode = "encode"
}

function decodeMode() {
    decodeButton.style.color = 'darkgreen'
    decodeButton.style.fontSize = '22px'
    encodeButton.style.color = 'antiquewhite'
    encodeButton.style.fontSize = '20px'
    if (messageBox.value == encodeDefault) {
        messageBox.value = decodeDefault
    }
    mode = "decode"
}

function submitButton(){
    var message = messageBox.value
    var finishedMessage = ""
    if (mode == "encode") {
        finishedMessage = encodeMessage(message)
    } else if (mode = "decode") {
        finishedMessage = decodeMessage(message)
    }

    finishedMessageBox.innerText = finishedMessage
}

function encodeMessage(message) {
    var messageArray = []
    var finishedMessage = ""
    //Key
    var letter = randomChar()
    caeser = charToNum(letter)
    messageArray.push(letter)//1
    messageArray.push(randomChar())//2
    var char3 = randomChar()
    var char4 = randomChar()
    space = char3 + char4
    messageArray.push(char3)//3
    messageArray.push(char4)//4
    messageArray.push(randomChar())//5
    var char6 = randomChar()
    var char7 = randomChar()
    ER = char6 + char7
    messageArray.push(char6)//6
    messageArray.push(char7)//7
    messageArray.push(randomChar())//8
    messageArray.push(randomChar())//9
    messageArray.push(randomChar())//10
    //Message
    for (let i = 0; i<message.length;i++) {
        if (message[i] == " ") {
            messageArray.push(message[i])
        } else {
            for (let j = 0; j<alphabet.length;j++) {
                if (message[i].toUpperCase() == alphabet[j]) {
                    messageArray.push(message[i])
                }
            }
        }
    }
    //Encode
    for (let i = 0; i<messageArray.length; i++) {
        if (messageArray[i] != " ") {
            if (i>=10) {
                finishedMessage += randomCase(caeserCipher(messageArray[i]))
            } else {
                finishedMessage += randomCase(messageArray[i])
            }
        } else {
            finishedMessage += (randomCase(space[0]) + randomCase(space[1]))
        }

        
    }

    return finishedMessage
}

function decodeMessage(message) {

}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChar() {
    var charNum = randomInt(1, 26);
    var randChar = alphabet.at(charNum - 1)
    return randChar
}

function randomCase(character) {
    var casedChar = ""
    if (randomInt(0,1) == 1) {
        casedChar = character.toUpperCase()
    }
    else {
        casedChar = character.toLowerCase()
    }
    return casedChar
}

function charToNum(character) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == character.toUpperCase()) {
            return i;
        }
    }
    return -1;
}

function caeserCipher(character) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == character.toUpperCase()) {
            var num = i;
        }
    } 
    var cipherNum = ((num+caeser)%26)
    return alphabet[cipherNum]
}