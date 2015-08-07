var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');
var words = require('./public/script/words');
var photos = require('./photos');


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

app.get('/photos.json', function(req, res) {
	var randomPhotoUrl = photos.getRandom();
	var responseObj = {imgUrl: randomPhotoUrl};
	res.json(responseObj);
});

app.get('/', function(req, res) {
	res.render('index.ejs', {imgUrl: photos.getRandom(), bandName: generateBandName()});
});
