document.addEventListener('keydown', logKey);

function logKey(e) {
  if ( event.keyCode == 69 ) {
    console.log('a void');
    document.body.style.backgroundColor = "black";
    typewriter.innerHTML = "";
  }

  else if ( event.keyCode == 8 ) {
    var text = typewriter.textContent;
    var arrayText = text.split('');
    arrayText.pop();
    var newText = arrayText.join('');
    typewriter.textContent = newText;
  }

  else if ( event.keyCode == 13 ) {
    typewriter.textContent += '\r\n';
  }

  else if ( event.keyCode == 9 | event.keyCode == 16 | event.keyCode == 17 | event.keyCode == 18 | event.keyCode == 20 | event.keyCode == 37 | event.keyCode == 38 | event.keyCode == 39 | event.keyCode == 40 | event.keyCode == 91 | event.keyCode == 93 ) {
    typewriter.textContent += "";
  }

  else {
    document.body.style.backgroundColor = "white";
    typewriter.textContent += `${event.key}`;
  }

};
