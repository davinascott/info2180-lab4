window.onload = function() {
	document.getElementById("status").innerHTML = "check";
	document.querySelectorAll(".boundary").onmouseover = allBoundaries();
}

function youlose(){
	document.getElementById("boundary1").classList.toggle("youlose");
	var cList = document.getElementById("boundary1").classList;
}

function allBoundaries(){
	var boundaries = document.querySelectorAll(".boundary");
	for (var x = 0; x < boundaries.length; x++) {
		boundaries[x].classList.toggle("youlose");
	}
}


