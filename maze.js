lost = false;

window.onload = function() {
	var mStart = document.getElementById("start");
	mStart.addEventListener('click', start);
	var mEnd = document.getElementById("end");
	mEnd.addEventListener('mouseover', youWin);
	var mLeave = document.getElementById("maze");
	mLeave.addEventListener('mouseleave', youLose);
	var boundaries = document.querySelectorAll("#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].onmouseover = youLose;
    }
}

function youLose(){
	lost = true;
	var boundaries = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < boundaries.length; x++) {
		boundaries[x].classList.add("youlose");
	}
	document.getElementById("status").innerHTML = "You Lose. Better Luck Next Time..";
}

function youWin(){
	if (!lost){
		document.getElementById("status").innerHTML = "You Win!!";
	}	
}

function start(){
	lost = false;
	document.getElementById("status").innerHTML = "Find Your Way To The End!!";
	var boundaries = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < boundaries.length; x++) {
		boundaries[x].classList.remove("youlose");
	}
}



