window.onload = function(){
	calcPrice(0);
	var curPrice = localStorage.getItem("total");
	if(curPrice == NaN){
		clear();
	}
}


function validatePassword(){
	var pass1 = document.forms["signup"]["entry12"].value;
	var pass2 = document.forms["signup"]["entry13"].value;
	var equal = false;
	var hasDigit = false;
	var startWithChar = false;
	var hasUpperCase = false;
	
	if(pass1 == pass2){
		equal = true;
	}
	
	if((pass1.charCodeAt(0) >= 65 && pass1.charCodeAt(0) <= 90) || (pass1.charCodeAt(0) >= 97 && pass1.charCodeAt(0) <= 122)){
		startWithChar = true;
	}
	
	for(var i = 0; i < pass1.length; i++){
		if(pass1.charCodeAt(i) >= 65 && pass1.charCodeAt(i) <= 90){
			hasUpperCase = true;
		}
		if((pass1[i] >= 0) && (pass1[i] <= 9)){
			hasDigit = true;
		}
	}
	
	if((equal == true) && (hasDigit == true) && (startWithChar == true) && (hasUpperCase == true)){
		return true;
	} else{
		var tempInner = "";
		tempInner += "<div id='err'> <h3> Errors:" + "</h3> <ul><hr>";
		if(equal == false){
			tempInner += "<li>Passwords do not match</li><hr>";
		}
		if(hasDigit == false){
			tempInner += "<li>Password should have a digit</li><hr>";
		}
		if(startWithChar == false){
			tempInner += "<li>Password should start with character</li><hr>";
		}
		if(hasUpperCase == false){
			tempInner += "<li>Password should have upper case character</li><hr>";
		}
		tempInner += "</ul></div>";
		document.getElementById("side").innerHTML = tempInner;
		document.forms["signup"]["entry12"].value = "";
		document.forms["signup"]["entry13"].value = "";
		return false;
	}
}

function calcPrice(price){
	if(price == -1){
		localStorage.setItem("total", 0);
		localStorage.setItem("quantity", 0);
		document.getElementById("curPrice").innerHTML = "Total price <p> " + 0 + " CAD <\p>" + "Quantity <p>" + 0 + "</p> ";
		
	} else{
	var current = localStorage.getItem("total");
	var currentInt = parseInt(current);
	currentInt += price;
	localStorage.setItem("total", currentInt);
	
	var quant = localStorage.getItem("quantity");
	var quantInt = parseInt(quant);
	if(price != 0){
	localStorage.setItem("quantity", quantInt+1);
	}
	quantInt = localStorage.getItem("quantity");
	document.getElementById("curPrice").innerHTML = "Total price <p> " + currentInt + " CAD <\p>" + "Quantity <p>" + quantInt + "</p> ";
	}
}

function clear(){
	calcPrice(0);
}