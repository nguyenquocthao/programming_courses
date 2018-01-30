var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("Any name of a real person: ", function(answer) {

	let file = answer + '.md';

	realPerson.name = answer;

	fs.writeFileSync(file, `${realPerson.name}\n==================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		fs.appendFileSync(file, `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
