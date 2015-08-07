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

	var randomFlickr = function() {
		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=009a6835cb7e010aaf30d35aa40fe73e&tags=beach%2C+lo-fi%2C+vignette&sort=relevance&per_page=100&format=json&nojsoncallback=1";
		var ajaxGet = new XMLHttpRequest();
		ajaxGet.onreadystatechange = function() {
			if (ajaxGet.readyState === 4 && ajaxGet.status === 200) {
				var responseArray = JSON.parse(ajaxGet.responseText).photos.photo;
				var randPhoto = responseArray[Math.floor(Math.random() * responseArray.length)];
				var imgUrl = "https://farm" + randPhoto.farm + ".staticflickr.com/" + randPhoto.server + "/" + randPhoto.id + "_" + randPhoto.secret + "_b.jpg";
				bgImage.style.backgroundImage = "url(" + imgUrl + ")"
			}
		}
		ajaxGet.open("GET", url);
		ajaxGet.send(null);
	}

	var appendBandName = function(e) {
		// e.preventDefault();
		var bandName = "<h1>" + generateBandName() + "</h1>";
		resultBox.innerHTML = bandName;
		randomFlickr();
	};

	genButton.addEventListener("click", appendBandName);

});