// ¿En tu páis de origen es normal dejar propina?

const bill = document.querySelector("#bill-amount");
const percent = document.querySelector("#percentage-tip");
const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total");
const btn = document.querySelector("#calculate");

btn.addEventListener("click", function () {
    let tipcalc = bill.value * percent.value/100;
    tip.value = tipcalc;
    let totalcalc = parseFloat(tipcalc) + parseFloat(bill.value);
    total.value = totalcalc;
})