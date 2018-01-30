var http = require("http");

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"});

	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>06_02 HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`);

});

server.listen(3000);

console.log("Server is listening on port 3000");