//Copyright Riley Campbell 2023 BSD 3 Clause
setInterval(()=> {
  var bookmarkletElements = Array.from(document.querySelectorAll('bookmarklet'))
  
  bookmarkletElements.forEach(async (element) => {
      if(element.getAttribute('handled') != true) {
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
}, 1000)
