var fs = require("fs");

fs.readdirSync(__dirname + "/assets/logs").forEach(function(fileName) {

	fs.unlinkSync(__dirname + "/assets/logs/" + fileName);

});

fs.rmdir(__dirname + "/assets/logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});