let intervalId;
let counterValue = 0;
let aumento = false;

document.addEventListener("DOMContentLoaded", function() {
  const buttonElement = document.getElementById("stop");
  buttonElement.style.backgroundColor = "grey";

  let tabella = document.getElementById("tabella");
  var righe = tabella.getElementsByTagName("tr");
  for (var i = 1; i < righe.length; i++) {
    righe[i].remove();
    i--;
  }

});

let milliseconds = 0;
function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / (1000 * 60));
  milliseconds -= minutes * 1000 * 60;
  const seconds = Math.floor(milliseconds / 1000);
  milliseconds -= seconds * 1000;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(3, "0");
  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function inizio() {
    if(aumento == false){
      intervalId = setInterval(() => {
    milliseconds += 10;
    updateCounter();
  }, 10);

    }
    const buttonElement = document.getElementById("inizio");
  buttonElement.style.backgroundColor = "grey";

  const aa = document.getElementById("stop");
  aa.style.backgroundColor = "blueviolet";
  aumento = true;

}
let n = 0;

function stop() {  
  n++;
  clearInterval(intervalId);
  aumento = false;
  const bb = document.getElementById("stop");
  bb.style.backgroundColor = "grey";
  const buttonElement = document.getElementById("inizio");
  buttonElement.style.backgroundColor = "blueviolet";


  let tabella = document.getElementById("tabella");
  const riga = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent=n;
  riga.appendChild(cell1);

  const cell2 = document.createElement("td");
  cell2.textContent=formatTime(milliseconds);
  riga.appendChild(cell2);

  var input = document.createElement("input");
  input.type = "text";
  const cell3 = document.createElement("td");
  cell3.appendChild(input);
  riga.appendChild(cell3);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const cell4 = document.createElement("td");
  cell4.appendChild(checkbox);
  riga.appendChild(cell4);

  tabella.appendChild(riga);
}

function azzera() {
  milliseconds = 0;
  updateCounter();
  let tabella = document.getElementById("tabella");

  var righe = tabella.getElementsByTagName("tr");
  for (var i = 1; i < righe.length; i++) {
    righe[i].remove();
    i--;
  }
  n = 0;
}

function updateCounter() {
  const counterElement = document.getElementById("Cronometro");
  counterElement.textContent = formatTime(milliseconds);
}