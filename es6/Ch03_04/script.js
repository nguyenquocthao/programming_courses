const section = document.getElementsByTagName('section')[0]; // const keyword

for(let i=0; i<100; ++i){ // let keyword
	var div = document.createElement('div');
	div.onclick = () => alert(`box #${i}`); // template string, arrow function
	section.appendChild(div);
}
var func = {
	add(a,b=5,c=3){ // default function parameter, reduced syntax
		return a+b+c;
	}
}
console.log(func.add(...[1,2]));// spread operator
console.log('abc '.repeat(4)); // enhance object literals

var a=0;
var obj={
	a:1,
	b:[{a:2, b:3}, {a:3,b:4}, {a:4,b:5}],
	show(){ //enhance object literals
		this.b.forEach((i,j) => { // arrow function
			console.log(`Object a=${this.a}`); // arrow function & this scope
			console.log(j);
			for(let k in i){
				console.log(` ${k}: ${i[k]}`);
			}
		})
	}
}

console.log('');
obj.show();
console.log(Object.keys(obj));
console.log(Object.values(obj));
for(let key in obj){
	console.log(`${key}: ${obj[key]}`);
}
console.log('');
var arr = ['a',2,false];
for(let val of arr){
	console.log(val);
};
arr.reduce((a,b)=>{return a+b;});
console.log(arr);
console.log('');
console.log(function({a,b}){
	return a + ', ' + b[0].a;
}(obj)); // destructuring assignment
function* permute(arr){ // generator
	if(arr.length===0){
		yield [];
	}
	for (let i=0; i<arr.length; ++i){
		let smallarr = arr.slice();
		smallarr.splice(i, 1);
		let newarr = permute(smallarr);
		for (let e = newarr.next(); !e.done; e=newarr.next()){
			yield [arr[i]].concat(e.value);
		}
	}
}
var permute_array = permute([2,3,true]);
for(let e=permute_array.next(); !e.done; e=permute_array.next()){
	console.log(e.value);
}