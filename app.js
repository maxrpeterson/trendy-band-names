var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');
var words = require('./public/script/words');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.listen(port);

var getRandom = function(ary) {
	var randIndex = Math.floor(Math.random() * ary.length);
	return ary[randIndex];
};

var generateBandName = function() {
	var firstWord = getRandom(words.animals).toLowerCase();
	if (Math.random() > 0.25) {
		var secondWord = getRandom(words.shapes).toLowerCase();
	} else {
		var secondWord = getRandom(words.otherStuff).toLowerCase();
	}
	return firstWord + " " + secondWord;
};

app.get('/', function(req, res) {
	request.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=009a6835cb7e010aaf30d35aa40fe73e&tags=beach%2C+lo-fi%2C+vignette&sort=relevance&per_page=100&format=json&nojsoncallback=1", function(err, response, body) {
		var responseArray = JSON.parse(body).photos.photo;
		var randPhoto = responseArray[Math.floor(Math.random() * responseArray.length)];
		var imgUrl = "https://farm" + randPhoto.farm + ".staticflickr.com/" + randPhoto.server + "/" + randPhoto.id + "_" + randPhoto.secret + "_b.jpg";

		res.render('index.ejs', {imgUrl: imgUrl, bandName: generateBandName()});
	})
});
