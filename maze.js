window.onload = function() {
	document.getElementById("status").innerHTML = "check";
	document.getElementById("boundary1").onmouseover = youlose();
}

function youlose(){
	document.getElementById("boundary1").classList.toggle("youlose");
	var x = document.getElementById("boundary1").classList;
}


