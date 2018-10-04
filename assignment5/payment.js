var total = 0;

window.storage.globPrice = total;

window.onload = function(){
	document.getElementById('pay').innerHTML = "5";
}

function add(price){
	var quant = prompt("Please input quantity");
	if(quant != 0){
		total += price * quant;
	}
	console.log(total);
	var curTotal = document.getElementsByClassName("price");
	console.log("*** " + curTotal + " ***")
	curTotal.innerHTML = "";

	
	console.log(curTotal);
	curTotal.innerHTML += "<p>" + total + "</p>";
}

function show(){
	return total;
}