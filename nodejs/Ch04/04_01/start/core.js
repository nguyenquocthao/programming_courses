var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log( path.basename(__filename) );
util.log(path.basename(__filename, '.js'));
util.log(path.basename(__dirname));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);
console.log(path.join('a','b','c'));

util.log(v8.getHeapStatistics());

