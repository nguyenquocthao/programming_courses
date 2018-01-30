# ES6

## 1. What is ECMAScript 6 (ES6)
- ES6: new keyword let & const, default & arrow functions, classes, template string, new way to deal with arrays, objects
- Browser support: sometime need to transpiling ES6 -> ES5 for browser to support.
- But now **most browser and nodejs support ES6**
- Transpiling: used in CoffeeScript & TypeScript; tools: babel.js, Traceur, Closure

## 2. Transpiling ES6
- **babel package is no more**, replaced by babel-cli and babel-core
- Babel.js: most popular, used frequently with React
- In-browser Babel transpiling: do at run-time so slow
- Link Babel and other necessary lib: **cdnjs.com**; use: 
```
	<script src=[link-to-Babel]></script>
	<script type='text/babel'>...</script>
```
- Install Babel: `npm install -g babel`; now change to `babel-cli`
- `babel [input-file] --watch/-w --out-file/-o [output-file]`: --watch: if *input-file* changes, automatically change in *output-file*; --out-file: set output file
- babel optional: --out-dir, --ignore
- run nodejs file: `node [file]`
- webpack: need install babel-loader

## 3. ES6 Syntax
- let keyword: scope only in block, useful in loop
- const keyword
- template string: `` `box #${i}` ``, put in double back tick *`*, variable put in ${}
- spread operators: `...[1,2,3]`: three dots before an array

## 4. ES6 Functions & Objects
- enhance object literals: in object write function then it's an element; string have method repeat
- arrow function: (args) => {code}
- `this` refer to object calling methods. use method bind(this). using arrow function, this refer to parent
- destructure: `var [a,, b] = [1, 2, 3];` => a=1, b=3; `var {x,y}={x:1, z:2, y:3};` => x=1, y=3;
- generators: function can be paused in the middle of execution to be resumed later. `function* f(){}`, pause using `yield` keyword.
```
	function* f(){yield 'a'; yield 'b';}
	var f2=f();
	for(let i=f2.next(); !i.done; i=f2.next()){
		console.log(i.value);
	}
```
## 5. ES6 Classes
- declare: `class`; special method: `constructor`; can have data & methods like object
- assign: `var vehicle = new Vehicle(...);`
- class inheritance: use `extends`; function `super` call function of parent class
- Creating React.js components: add script to react.min.js. `var Restaurant = React.createClass(render:function(){})` or `class Restaurant extends React.Component{render(){}}`. Now React is changed.
- React 0.14.0: need bind(this) to bind method to class