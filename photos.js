var fs = require('fs');

var photosString = fs.readFileSync('beach-lofi-photos.json', {encoding: "utf8"});

var photosArray = JSON.parse(photosString).photos.photo;

var getRandom = function() {
	var photo = photosArray[Math.floor(Math.random() * photosArray.length)];
	var imgUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg";
	return imgUrl;
}

module.exports.getRandom = getRandom;