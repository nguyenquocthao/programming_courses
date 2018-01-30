# README Javascript

## 1. Javascript: An introduction
- Javascript: 3rd layer of website, is interactive layer.
- Javascript is a scripting language used to interact with content in a web browser.
- Javascript doesn't have relation with Java.
- Javascript conform to ECMAScript standard. ECMAScript is the specification Javascript adheres to.
- ECMAScript 2015 (ES6)
- jQuery: library of Javscript function
- Framework: angularJS, React
- Platform: Node.js

## 2. The Basics
- Tools: code editor, browser with developer tools
- Atom, Sublime Text
- Browser: Chrome, Firefox
- Install live-server: install node -> install npm -> `npm install -g live-server`
- Windows: right click -> Inspect or ctrl + shift + i
- Tab Console: ctrl + shift + j -> can run javascript command
- create variable: `var`;
- `Date()`: new variable holds current time.
- `console.log(<>);`: print in console
- `document.body.innerHTML = <>` -> update body part in html
- Date class method: getMonth(), getDate(), getFullYear()
- `<script></script>`: javascript
- browser rendering page top-down. Javascript render as soon as the browser gets ahold of it
- Javascript file extension: .js
- `<script src="" async/defer></script>`: src link to file javascript, use *async* if scripts can be executed in any order, *defer* if scripts are executed after HTML is parsed
- Javascript is case sensitive
- naming: use camelCase. variable, function start with lowercase; objects and class start with uppercase, constant (const) are all-caps. Should use whitespace for easier reading; end each statement with semicolon (;); use comments liberally, single line //; multi line /* */

## 3. Working with data
- `var <variable-name>`: variable, default is undefined. Example: `var a=1, b=2, sum=a+b;`
- To avoid global variable, always define var
- Data types: Numeric, String, Boolean, undefined.
- Data type of a var can be changed
- `typeof var` -> return data type
- Operator: `=` is assign, `a += 1; a--;++a;`
- String: `+` with a operand is string, other operands are converted to string; use -, *, / -> NaN. A string with only number can be treated as a number
- Conditional if statement: `if(){} else{}`
- `5=="5"` true, but `5==="5"` false. Not equal `!=` `!==`. And `&&`, or `||`, not `!`, ternary operator `?:`
- Arrays: `var a=[1,2,'3',false];` properties: length; methods: reverse(); shift() -> remove first element; pop() -> remove last element; splice(pos, n) -> del *n* elements at index *pos*; slice() -> create a copy of current array; indexOf('3', 2) -> search for element *'3'* start from index *2*, return index or -1; join(' ') -> create string link all elements, separated by *' '*

## 4. Functions and Objects
- `function add(a,b){return a+b;}`
- `var sum = add(a,b);`
- `var sumFunc = function(a,b){return a+b;}`: anonymous function
- `var sum = function(a,b){return a+b;}(10, 23);`: immediately invoke functional expressions
- variable scope: global -> anywhere in script, can be call before and define later; local
- `const`: constant can't be reassigned once defined, only effective in scope; `let`: block scope variable, smaller scope than var, only effective in scope and can't be reassigned in the same scope and smaller scope (except let in smaller scope); `var`: can be re-declare in the same scope and effective to outside scope; re-declare change value to outside scope
- re-declare same scope valid: var
- const, let: when declare in smaller scope, become a new independent value
```
	const a=[1]; var b=2; let c=3;
	
	const a=[1,2]; a=[1,2];	let a=10; var a=10//error
	a.push(2);	// [1,2]
	const b=0; let b=0; //error
	var b=5; b=5;//5
	const c=4; var c=4; let c=4;	//error
	b=4; //4
	
	if(true){
		const d=0; let e=0; var f=0;
	}
	// d not defined, e not defined, f=0;
	if(true){const a=0;} 
	if(true){let a=0;}
	if(true){var a=0;}	//error
	if(true){a=0;} //error

	if(true){const b=0}; //b=2
	if(true){var b=0;} //b=0;
	if(true){let b=2;}	//b=0;
	if(true){b=2;}	//b=2

	if(true){const c=0;} //c=3
	if(true){var c=0;} //error
	if(true){let c=0;} //c=3
	if(true){c=0;} //c=0
```
- `var course = new Object(); course.title='abc';`: object can be function or var
```
	function CreateObject(val){
		this.value = val;
		this.add = function(b){
			this.value += b;
			return this.value;
		}
	}
	var obj = new CreateObject(10);
	obj.add(5);
	console.log(obj);
```
- `course.title` === `course['title']`
- closure: a function remembering the environment they were created.
- `Object.defineProperty(obj, prop, descriptor)`: define property *prop* of object *obj* using *descriptor* object
	- descriptor: `configurable` -> property descriptor can be configured deleted, default false; `enumerable` -> appear in for..in and Object.keys, default false; `value` -> value of property, default undefined; `writable` -> default false. If property already exists, modify
- `obj.hasOwnProperty(prop)` -> true if object has own (not inherited) property *prop*
- `Object.keys`, `Object.values`; `Object.entries` ([key, value] pair), `Object.freeze` (make object immutable -> can't edit), `Object.seal` (can't add new prop and config existing prop)
```
	var x={a:1, b:2, c:3};
	Object.defineProperty(x, 'a', {enumerable: false});
	Object.entries(x); // [['b',2], ['c',3]]
```

## 5. JavaScript and the DOM, Part 1: Changing DOM Elements
- Browser is object. BOM (Browser Object Model)
- window: top-level object
- window.document
- document.body, document.title, document.url, document.getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
- Access & change elements: .innerHTML, outerHTML
- Access & change class: <object>.classList.add('new class'); remove('class name'); toggle(<>), contains, 
- Access & change attributes: getAttribute(), setAttribute(), removeAttribute()
- Add DOM Properties: create the element -> create text node inside element -> add text node to element -> add element to DOM tree
- createElement(), createTextNode(), appendChild(); if append text -> create textNode then append
- add inline CSS to an Element: style.color = 'green', style.backgroundColor='blue', style.cssText, setAttribute

## 7. Javascript and the DOM, part 2: Events
- DOM events: browser behavior: load - finished loading; error
- common DOM events: focus, blur - lose focus, reset/submit, mousemove, mouseenter, mouseleave
- other events: media, CSS. see from MDN Event Reference
- `<object>.onclick = <func>`: do *func* when clicking on *object* 
	- `document.body.onclick=alert.bind(null, 'You clicked on page');`
- Event handler: only trigger 1 function in a single event
- Event listener: add trigger to the event. `element.addEventListener(event, function, useCapture=false)`
- We can pass argument to a function trigger by an event using anonymous function; or using bind `<func>.bind(null, arg1, arg2,...)`
	- bind first argument is object (this)

## 8. Project: Typing Speed Tester
- event: keydown -> keypress -> keyup
- `document.body.onkeydown=(e) => {console.log(e.key);}`: print key pressed to console
- `setInterval(function, time)`
- `clearInterval()`

## 9. Loops
```
	for (var i=0:i<10;++i){
		console.log(i);
	}
```
- query selector: `a[href^='http']` -> anchor with attribute href has value begin with http
- break, continue
- enumerable >< non-enumerable: if property of object is non-enumerable, it won't show up in for-in and Object.keys
- `for(var/let variable in object)`: loop through property keys in objects. If object is Array, property keys are indexes
- `arr.forEach(function(val, idx, arr), thisValue);`
```
    ['a','b','c'].forEach(function(elem, id){
        console.log(id, elem)
    });
``` 
-> 
```
    0 "a"
    1 "b"
    2 "c"
```

## 10. Project: Automated Responsive Images Markup

## 11. Troubleshooting, Validating, and Minifying JavaScript
- Troubleshoot Javascript using atom or browser
- console.info && console.error
- troubleshooting by browser: inspect (ctrl+shift+i) -> Sources -> select file
	- click on line number -> breakpoint
	- while debugging: F11 -> continue running; focus on var -> see value of that var
- online script linting: [www.jslint.com](www.jslint.com): an online quality checker, very strict; [jshint.com](jshint.com) -> less strict and more reasonalbe
- automate script linting
- get eslint: at **cmd** `npm install -g eslint`
- `npm init` -> init node package manager; `eslint --init`: config eslint
- install linter-eslint; 
- Sublime Text: ctrl+shift+p to open command pallete -> linter -> click SublimeLinter -> open cmd `npm install -g eslint` -> in code folder `eslint --init`
- minify/uglify: removing all unnecessary white space, removing all commons and optimizing the code -> unreadable to human
- tool: [minifier.org](minifier.org)
- beaufity: pretty print of Google dev tools help minified -> normal; [http://jsbeautifier.org/](http://jsbeautifier.org/)
- automate minification: use uglify-js: `npm install -g uglify-js-es6`
- in code folder `uglifyjs script.js -o script.min.js`