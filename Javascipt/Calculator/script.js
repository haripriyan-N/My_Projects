function num(a) {
  document.getElementById("Show").innerHTML += a;
}
function clearDisplay() {
  document.getElementById("Show").innerHTML = "";
}
function operator(a) {
  document.getElementById("Show").innerHTML += a;
}

function calculate() {
  let val = document.getElementById("Show").innerHTML;
  if (val === "") {
    alert("No value");
  } else {
    document.getElementById("Show").innerHTML += num()* operator();
  }
}
