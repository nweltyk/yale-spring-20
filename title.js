var space = " ";
var speed = "200";
var pos = 0;
var msg = "a compositor at a printing plant willfully vandalizing his own typographic apparatus...";
function Scroll()
{
document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", speed);
}
Scroll();
