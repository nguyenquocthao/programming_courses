function ems(pixels){
	var baseValue=16;

	return function(){
		return pixels/baseValue;
	}
}

var smallSize = ems(12);
var mediumSize = ems(18);

console.log('Small size: ', smallSize(), ', Medium size: ', mediumSize());

var temp=1;
function addTemp(){
	++temp;
}
addTemp();
console.log(temp);