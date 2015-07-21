window.addEventListener("load", function() {

	var animals = [
		"Wolf",
		"Cat",
		"Tiger",
		"Bear",
		"Penguin",
		"Lion",
		"Elk",
		"Dragon",
		"Wildcat",
		"Leopard"
	];

	var shapes = [
		"Pyramid",
		"Triangle",
		"Oval",
		"Circle",
		"Diamond",
		"Prism",
		"Cube"
	];

	var otherStuff = [
		"Beach",
		"Fossils",
		"Sun",
		"Palms",
		"Coast"
	];

	var getRandom = function(ary) {
		var randIndex = Math.floor(Math.random() * ary.length);
		console.log(randIndex);
		return ary[randIndex];
	};

	var genButton = document.querySelector("#generate");
	var resultBox = document.querySelector("#result");

	var generateBandName = function() {
		var firstWord = getRandom(animals);
		if (Math.random() > 0.2) {
			console.log("shapes");
			var secondWord = getRandom(shapes);
		} else {
			console.log("otherStuff");
			var secondWord = getRandom(otherStuff);
		}
		console.log(firstWord + " " + secondWord);
		return firstWord + " " + secondWord;
	};

	var appendBandName = function(e) {
		e.preventDefault();
		var bandName = "<h1>" + generateBandName() + "</h1>";
		resultBox.innerHTML = bandName;
	};

	genButton.addEventListener("click", appendBandName);

});