var fs = require("fs");

fs.readdir('./lib', function(err, files) {

	if (err) {
		throw err;
	}
	console.log(typeof [1,2] === 'object');
	console.log(Array.isArray(files));
	console.log(files);

});

console.log("Reading Files...");
