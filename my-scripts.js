// set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

// update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

// add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + Math.floor(Math.random() * 9)
		));
	update();
}

// reset count
function reset() {
	if (confirm("You want to reset?  Weird flex, but ok.")) {
		localStorage.setItem("count", 0);
		update();
	}
}