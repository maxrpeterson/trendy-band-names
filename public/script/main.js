window.addEventListener("load", function() {

	var getRandom = function(ary) {
		var randIndex = Math.floor(Math.random() * ary.length);
		return ary[randIndex];
	};

	var bgImage = document.querySelector(".bg-image");
	var genButton = document.querySelector("#generate");
	var resultBox = document.querySelector("#result");

	var generateBandName = function() {
		var firstWord = getRandom(animals);
		if (Math.random() > 0.25) {
			var secondWord = getRandom(shapes);
		} else {
			var secondWord = getRandom(otherStuff);
		}
		return firstWord + " " + secondWord;
	};

	var randomPhoto = function() {
		var ajaxGet = new XMLHttpRequest();
		ajaxGet.onreadystatechange = function() {
			if (ajaxGet.readyState === 4 && ajaxGet.status === 200) {
				var imgUrl = JSON.parse(ajaxGet.responseText).imgUrl;
				bgImage.style.backgroundImage = "url(" + imgUrl + ")"
			}
		}
		ajaxGet.open("GET", '/photos.json');
		ajaxGet.send(null);
	}

	var appendBandName = function(e) {
		// e.preventDefault();
		var bandName = "<h1>" + generateBandName() + "</h1>";
		resultBox.innerHTML = bandName;
		randomPhoto();
	};

	genButton.addEventListener("click", appendBandName);

});