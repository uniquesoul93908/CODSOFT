var text = document.getElementById("changing-text");

var texts = ["Fullstack Developer", "Data Analyst", "Ethical Hacker","ML Engineer","AI Engineer"];
var index = 0;

function changeText() {
  text.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000);
