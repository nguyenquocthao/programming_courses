var Person = require("./lib/Person");

var a = new Person('Person a');
var b = new Person('Person b');


a.on('speak', function(said){
	console.log(`${this.name} -> ${said}`);
});

b.on('speak', function(said){
	console.log(`${this.name}: ${said}`)
});


a.emit('speak', "You may delay, but time will not.");
b.emit('speak', "It is far better to be alone, than to be in bad company.");
