var {EventEmitter} = require('events');
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;