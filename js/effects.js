function typeWriter(obj, text, i) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     obj.innerHTML = text.substring(0, i+1);

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(obj, text, i + 1)
      }, 25);
    }
}


function invertIFrame() {
    var cssLink = document.createElement("link");
    cssLink.href = "css/style.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    frames['letterIntent'].document.head.appendChild(cssLink);
}
