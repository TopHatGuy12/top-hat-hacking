//Copyright Riley Campbell 2023 BSD 3 Clause taken from http://hacker-point.com/style.js

function urlEncodeString(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

setInterval(()=> {
  var bookmarkletElements = Array.from(document.querySelectorAll('bookmarklet'))
  
  bookmarkletElements.forEach(async (element) => {
      if(element.getAttribute('handled') != "true") {
        file = await (await fetch(element.getAttribute('file'))).text()
        var bookmarkletURI = `javascript:${urlEncodeString(`(function(){${file}})()`)}`
        var oldHTML = element.innerHTML
        var newLink = document.createElement('a')
        newLink.href = bookmarkletURI
        newLink.setAttribute('onclick','return false;')
        newLink.innerHTML = oldHTML
        element.innerHTML = ''
        element.appendChild(newLink)
        element.setAttribute('handled', true)
      }
  });
}, 200)
