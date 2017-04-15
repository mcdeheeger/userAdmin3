var UserSearch = require("./UserSearch.js");
var fs = require("fs");

function WeatherAdmin() {
	this.newUserSearch = function (userName, userLocation) {
		var user = new UserSearch(userName, userLocation);
		user.getWeather();

		fs.appendFile("log.txt", JSON.stringify(user), function(err) {
			if (err) {
			console.log("error");
			}
		});
	}
	this.getData = function() {
		console.log("getData")
	}
};

module.exports = WeatherAdmin;