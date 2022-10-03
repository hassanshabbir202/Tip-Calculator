var billPaym = +prompt("Enter Bill Amount");
var tipPaym = +prompt("Enter Tip Percentage");
var billPaynment = document.getElementById("billPaynment");
var tipPercent = document.getElementById("tipPercent");
billPaynment.value = `$${billPaym}`;
tipPercent.value = `$${tipPaym}`;

var btn = document.getElementById("btn");
btn.addEventListener("click" , () => {
    var ttTip = document.getElementById("ttTip");
    var total_bill = document.getElementById("total_bill");
    ttTip.disabled = false;
    total_bill.disabled = false;
    var tipPercen = ((billPaym*tipPaym)/100);
    ttTip.value = `$${tipPercen}`;
    total_bill.value = `$${Number((billPaym + ((billPaym*tipPaym)/100)))}`
});