var waitTime = 10000, currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;
var waiting='waiting ... ';

console.log('Wait for it');


function writeWaitingPercent(p) {
	//process.stdout.clearLine();
	process.stdout.cursorTo(waiting.length);
	process.stdout.write(`${p}%`);
}

var interval = setInterval(function() {
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n done \n");
}, waitTime);

process.stdout.write("\n\n");
process.stdout.write(waiting);
//console.log(waiting);
writeWaitingPercent(percentWaited);