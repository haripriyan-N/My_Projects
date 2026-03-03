function Calculate() {
  let totalBill = parseFloat(document.getElementById("BillAmount").value);
  let tip = parseFloat(document.getElementById("TipPercentage").value);
  let People = parseInt(document.getElementById("NumberOfPeople").value);

  let tip_amt = totalBill * (tip / 100);
  let totalWithTip = totalBill + tip_amt;
  let tip_per = totalWithTip / People;

  if (People <= 0) {
    alert("Number of people must be greater than 0");
    return;
  }
  document.getElementById("tipAmount").innerHTML = "₹" + tip_amt.toFixed(2);
  document.getElementById("totalPerPerson").innerHTML =
    "₹" + tip_per.toFixed(2);
}
