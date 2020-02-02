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
    typewriter.innerHTML = newText;
  }

  else if ( event.keyCode == 13 | event.keyCode == 16 | event.keyCode == 18 | event.keyCode == 91 ) {
    typewriter.textContent += "";
  }

  else {
    document.body.style.backgroundColor = "white";
    typewriter.textContent += `${event.key}`;
  }

};
