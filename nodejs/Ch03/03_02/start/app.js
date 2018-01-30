console.log(process.argv);

function grab(flag){
	var index=process.argv.indexOf(flag);
	return (index===-1)?null:process.argv[index+1];
}

var greeting=grab('--greeting');
var user=grab('--user');
console.log(greeting, user);
console.log([1,2,3,2,1].indexOf(2));