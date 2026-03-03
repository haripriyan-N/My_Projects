"use strict";
try {
  function AddTask() {
    const print = document.getElementById("input").value;
    if (print === "") {
      alert("Please enter something to add.");
      return;
    } else {
      document.getElementById("output").innerHTML += print + "<br>";
      document.getElementById("input").value = "";
    }
  }
  function Clear() {
    document.getElementById("output").innerHTML = "";
  }
  function Edit() {
    if (document.getElementById("output").innerText === "") {
      alert("There is nothing to edit.");
      return;
    } else {
      const out = document.getElementById("output").innerText;
      document.getElementById("input2").value =
        out && out.trim() !== "" ? out : "";
      document.getElementById("output").innerHTML = "";
    }
  }
  function Save() {
    const print2 = document.getElementById("input2").value;
    if (print2 === "") {
      alert("Please enter something to save.");
      return;
    } else {
      document.getElementById("output").innerHTML += print2 + "<br>";
      document.getElementById("input2").value = "";
    }
  }
} catch (error) {
  console.error("An error occurred: ", error);
}
