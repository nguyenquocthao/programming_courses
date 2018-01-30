var fs = require("fs");

var md = `

Sample Markdown Title
=====================

Sample subtitle
----------------

* point
	* point
		1 point

`;

fs.writeFile("sample.md", md.trim(), function(err) {

	console.log("File Created");

});