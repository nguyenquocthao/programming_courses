# NODE.JS

## 1. What is Node.js?
- History of Node.js:
	- 2009: Node.js created
	- 2010: npm created
	- 2014: io.js project forked
	- 2015-09-14: Node.js 4.0 created
- How Node.js work:
	- Tasks: welcome new table -> place order -> deliver order; there is no blocking because asynchronous
	- Node.js is asynchronous, single-threaded; events are raised and recorded in an event queue and then handled in the order that they were raised

## 2. Installing Node.js
- Install from nodejs.org
- `node -v`: see version of node.js

## 3. Node core
- `__dirname` (no trailing slack /), `__filename`
- `process.argv`
- `<str>.slice(x)`: return new string that removes *x* first character of *str*. `'abc'.slice(2)` -> `c`
- `<arr>.indexOf(x)`: return index of first element *x*  `process.stdout.write(<str>)`: write but not line down
-in array *arr*. `[1,2,3,2,1].indexOf(2)` -> `1`
- `process.stdin.on(<event>, <func>)`: handle event of stdin. Events: close, data, end, error, readable
- `process.stdin.on('data', (data)=>{})` process data line-by-line. Need to convert toString(). Use ctrl+c to terminate.
- 2 handle for an event -> first handle is processed first
- `process.on('exit', () => {})`
- `setTimeout(function(){}, <milisecond>)`
- `var x = setInterval(function(){}, <milisecond>)`
- `clearInterval(x)`
- `process.stdout.clearLine()`
- `process.stdout.cursorTo(<num>)`

## 4. Node modules
- available modules: v8 (Google's open source high-performance JavaScript engine), util, path (working with file & directory paths)
- `path.basename(path[, ext])`: return last portion of a *path*, trailing directory separator */* is ignored, *ext* is ignored:
	- `path.basename('./start/core.js')` -> `core.js`
	- `path.basename('./start/core.js', '.js')` -> `core`
	- `path.basename('./start')` -> `start`
- `util.log(string)`: deprecated since v6.0.0, print timestamp and *string* to stdout
- `path.join([...paths])`: joins all given path segment using platform specific separator as a delimiter; if length is 0, return `.`
	- `path.join('a','b','c')` -> `a\b\c` (windows)
- `v8.getHeapStatistics()`
- `' a b  '.trim()` -> `'a b'`
- `<str>.toLowerCase()`
- readline: tool to prompt user without standard input and output directly
	- `var rl = readline.createInterface(input, output)`: return new readline.Interface instance
	- `rl.question(query, (answer) => {})`: *query* <string> prompt to output
	- `rl.setPrompt(prompt)`: set the propmt that will be written to output whenever `rl.prompt()` is called
	- `rl.prompt([preserveCursor])`: write a new line in output, if *preserveCursor* is true, prevents the cursor placement from being reset to 0
	- event `line`: emitted whenever input stream receives an end-of-line input (\n, \r, \r\n) 
	- event `close`; `rl.close()`
- console.log: can be formatted as in C (%s, %d)
- `EventEmitter`: class in `events` module create custom objects that raise custom events that can be handled asynchronously
	- `util.inherits(constructor, superConstructor)`
	- `emitter.emit(eventName[, ...args])`: return true if event had listeners, false otherwise
- `require`: return module.exports, no need for extension (.js, .json,...)
	- `module.exports=`
	- `var Person = require(./lib/Person)`
- possily error when using arrow function: can't access `this.<prop>`
- module `child_process`
	- `child_process.exec(command[, options][, callback])`: *command* to run, *options* is object include: cwd (current working directory), env, encoding, shell, timeout (number)...; *callback* is Function when process terminate, args error, stdout, stderr; return <ChildProcess>
	- `child_process.spawn(command[, args][, option])`: return <ChildProcess>
	- `process.stdout.write()`, `process.stdin.write()`

## 5. The File System
- module: `fs`
- `fs.readdir(path[, option], (err, files)=>{})`: files is an array of names of files/folders in directory *path*
- `typeof 1 === 'number'`, `typeof true === 'boolean'`, `typeof 'a' === 'string'`, `typeof [1,2] === 'object'`
- `Array.isArray([1,2,3]) === true`
- `fs.statSync(path)`: return instance of fs.Stats
- `stats.isFile()`; `util.inspect(stats)`
- `fs.readfile(path[, options], callback)`: automatically read as binary; options <Object>|<string>: encoding (default *null*), flag (default *r*), if options is <string>, it is encoding; callback= (err, data)=>{}
- `fs.writeFile(file, data[, options], callback)`
- `fs.appendFile(file, data[, options], callback)`, `fs.appendFileSync(file, data[, options])`
- `fs.existsSync(path)`: check if a file or a directory exists
- `fs.mkdir(path[, mode], callback)`
- `fs.unlinkSync(path)`: remove files
- `fs.rmdirSync(path)`: remove empty directories
- `fs.renameSync(oldPath, newPath)`
- `fs.createReadStream(path[, option])`: return new *ReadStream* object, which is a *Readable Stream*
- events: `'data'` (read chunks max size 65536 byte or 64 kb) , `'end'`
- `emitter.once(eventName, listener)`: listen once; `emitter.on(eventName, listener)`; *listener* is callback function

## 6. The HTTP Module
- HTTP modules is used for creating web servers, making requests, handling responses.
- `https` module: http protocol over TLS/SSL. 
- `https.request(options[, callback])`: options <Object>|<string>|<URL>
	- options: protocol (df https:), port (df 443), agent (df https.globalAgent), hostname (df localhost), path (df /), method (df GET),...
	- callback: (res) => {}; `res.statusCode`, `res.headers`, `res.setEncoding('utf8')`
	- `req.end()`, event `error`
- `http` module
	- `http.createServer([(request, response) => {}])`: return <http.Server>
	- `res.writeHead(statusCode[, statusMessage][, headers])`: headers <Object>: `'Content-Type'` ('text/json', 'text/html', 'text/plain', 'image/jpeg',...), 	`'Content-Length'`
	- `res.end([data][, encoding][, callback])`: signal to server that all response headers and body have been sent; if has *data*, equivalent to `res.write(data, encoding)` then `res.end(callback)`
	- `req.url` (return string, after hostname:port, include /), `req.method`
	- `server.listen([port])`: listen to port *port*
- requests can be handled: put, delete, post
- can use browser to go to a page, automatically send GET request for that page; in html file, images, scripts, css also send GET request
- `readable.pipe(destination[, options])`: push all data from *readable* to Writable stream *destination*. options is object, `end` boolean (df true) end the writer when the reader end; return a reference to *destination* stream so can set up chains of piped streams
- `string.match(regexp)`: return array of match. regular expression: `/pattern/modifiers`; pattern `^` is at the begining of line, `$` is at the end of line; modifier `i` -> case-insensitive; `g` -> find all matches; `m` -> multiline search
- `JSON.stringify(obj)`: covert to string, so can be sent to server
- `array.filer((val, id, arr)=>{}, thisValue)`: return new array consists of elements pass first function (return true)

## 7. Node Package Manager
- search at npmjs.com
- `npm install`: install packages, option `-g` install globally
- `npm remove`; `npm ls`
- package `node-dev`: auto update changes in source file; package `jshint`: `jshint <path>`; in file add `/* jshint esnext: true */`
- httpster: create static file server: `httpster -p 3000 -d ./public/`
- run locally: `./node_modules/httpster/bin/httpster`

## 8. Web Servers
- package.json: store all necessary info about app, including dependencies, created by `npm init`
- middleware function: `(req, res, next) => {}`, *next* is next middleware function
- chrome -> inspect -> network (view requests)
- package `express`: fast, unopinionated, minimalist web framework for node; need installing locally
	- `var app = express()`: top-level function
	- `express.static(root[, options])`: invokes static file server, *root* refers to root directory
	- `app.use([path,] callback [, callback...])`: mounts the specified middleware function at specified path (df /); *callback* is executed when base of request path matches *path*
	- `app.use(express.static(root[, options]))`: start serving files directly
	- `app.listen(port[, hostname][, backlog][, callback])`: start listening
- package `cors`: cross-origin resoure sharing
	- `app.use(cors([options]))`: options: origin (url), optionsSuccessStatus
	- `app.get(path, callback[, callback...])`: handle get request
	- `app.post(path, callback[, callback...])`: handle post request
	- `res.json([body])`: response in express; send a response converted to a json string using JSON.stringify()
	- `app.delete(path, callback, [, callback...])`: routes http delete request
	- in path, `:param` => access `req.params.param` (when sending url request, simply add /param to the end of url)
	- `req.body`: body of request, contains key-value pairs of data submitted in the request body
- `body-parser`: middleware helping parse data posted to an API
	- `bodyParser.json(options)`: return middleware that only parses json and only looks at requests where the *Content-Type* header matches the *type* option. options: type (df text/plain) 
	- `bodyParser.urlencoded(options)`: return middleware that only parses urlencoded body; options: extended(df true -> using qs lib; false -> querystring lib), type (df application/x-www-form-urlencoded)

## 9. WebSockets
- Polling: client sends request to server to see if there's any changes
- WebSockets allow for true 2-ways communication between client & server, also allow broadcast
- package `ws`: use for backend; browser clients must use native `WebSocket` object; `WebSocket` is `EventEmitter`
	- `new WebSocket.Server(options[, callback])`: create a new server instance; options: host, port, perMessageDeflate,...; need one of port, server or noServer
	- Server event `connection`: emitted when the handshake is complete, args `socket` (server -> client), `request`
	- `websocket.send(data[, options][, callback])`: send data through connection; invoke event `message`
	- `new WebSocket(address[, protocols][, options])`
	- `websocket.onopen`, `websocket.onclose`, `websocket.onmessage`: event listener functions; onmessage has argument `message` 
	- run: `node ws` -> open index.html (file html link to ws-client.js has `var ws = new Websocket('ws://localhost:3000')`)
	- `server.clients`: set of all connected clients
	- `websocket.close()`
- package `socket.io` enables real-time bidirectional event-based communication, `socket.io-client`; [link](https://github.com/socketio/socket.io/blob/HEAD/docs/README.md)
	- `var app=require('express')(), server=require('http').createServer(app).listen(3000);`: create server with url localhost:3000
	- `var io=require('socket.io')(server);`: create websocket
	- `app.use(express.static(./public))`: serving files from folder public
	- `Server` is exposed by `require('socket.io')`. If `require('socket.io')()`, no need for `new`
	- `new Server(httpServer[, options])`: httpServer <http.Server>
	- io event `connection`: arg `socket`
	- `socket.broadcast.emit(eventName[, ...args])`: broadcast is sending message to everyone else except for the socket that starts it
	- in main.js, `var socket = io('http://localhost:3000');`
	- socket event `disconnect`, `connect`
- WebSockets allow for a true 2-way connection between client and server; use their own protocol to send & receive message from a TCP server; can broadcast to every connected socket
- Socket.IO: a module helps build WebSockets that has its own client and server; fails back to long polling when WebSockets aren't supported

## 10. Testing and Debugging
- [mocha](https://mochajs.org/): Javascript test framework running on Node.js and the browser; mocha work on test directory; install globally to use keyword `mocha` in command line
	- run test in folder test
	- `mocha` (global) or `./node_modules/mocha/bin/mocha` (local)
	- `describe(str, func)`: describe the feature, can nest describe, put `it` function in *func*
	- `it(str, func)`: put expectation in *func*, pass when true to all expectation in *func*. pass -> color green (in cmd), fail -> color red. *func* can receive arg `done` to invoke a callback when the test is complete; `done` can accept arg `err`
	- passing arrow functions to Mocha is discourage
	- `this.timeout()`: apply to entire test suites; disabled via `this.timeout(0)`
	- `before(func)`: runs before all tests in block
	- `after(func)`, `beforeEach(func)`, `afterEach(func)`
- [chai](http://chaijs.com/): support should, expect, assert functions, need to install `--save-dev` because test is for development and install locally
	- `var chai = require('chai'), expect = chai.expect, assert = chai.assert, should = chai.should()`
	- [expect/should](http://chaijs.com/api/bdd/):
		- `expect(val[, msg])`
		- chains to improve readability: to, be, been, is, that,...
		- `.equal(val[, msg])`: strictly equal ===; *msg* is shown when assertion fail
		- `.ok`: == true
		- `.not`: negate all assertions following the chain
		- `.deep`: following chains use deep equality; usually work with object, array, set
- [nock](https://www.npmjs.com/package/nock): create mock web servers for testing; install `--save-dev`
	- `nock("https://en.wikipedia.org").get("/wiki/Abraham_Lincoln").reply(200, "Mock Abraham Lincoln Page");`: intercept HTTP call to https://en.wikipedia.org, intercept get request to `/wiki/Abraham_Lincoln` and reply `'Mock Abraham Lincoln Page'` with status code 200
- [rewire](https://www.npmjs.com/package/rewire): adds a special setter and getter to modules, replace real data with test data when testing a module:
	- `rewire(filename: String): rewiredModule`: use rewire like require
	- `rewiredModule.__set__(name: String, value: *): Function`: sets the internal variable *name* to the given *value* in file linked by rewire; can also override globals but only within module, return the function that can be called to revert the change
	- `rewiredModule.__set__(obj: Object): Function`
	- globals: `console`, `process`
- [sinon](replace real data with test data when testing a module) standalone test spies, stubs and mocks for Javascript: 
	- [a test spy](http://sinonjs.org/releases/v3.1.0/spies/) is a function that records arguments, return value, value of *this* and exception thrown
	- `sinon.spy()`: return spy which only records information about its calls
	- `sinon.spy(func)`: return spy on *func*
	- `sinon.spy(object, *method*)`: create a spy for `object.method`, acts exactly like the original method in all cases; `object.method.restore()`
	- `spy.callCount`: the number of recorded calls
	- `spy.calledWith(arg1, arg2, ...)`: returns true if spy was called at least once with provided arguments (and possibly others)
	- rewire + sinon spies: be able to inject a mock console
	- [test stubs](http://sinonjs.org/releases/v3.1.0/stubs/) are functions (spies) with pre-programmed behavior
	- `var stub = sinon.stub()`, `var stub = sinon.stub(object, 'method')`
	- `stub.yields([arg1, ...])`: stub call the first callback it receives with the provided arguments
- `func.bind(thisArg[, arg1[, arg2[, ...]]])`: return a copy of the given function with the specified *this* value and initial argument. [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
```
	var x=9;
	var obj={x:10, add(a=0,b=0){return this.x+a+b;}};
	obj.add(); // 10
	var f1=obj.add;
	f1(); // 9
	var f2=obj.add.bind({x:8});
	f2(); // 8
	var f3=obj.add.bind(null, 20);
	f3(10); //39 = 9+20+10
```
- [istanbul](https://www.npmjs.com/package/istanbul): javascript code coverage tool written in JS, install globally; tells how many lines of code is covered; how many statements, branches, functions, lines tested
	- `istalbul cover _mocha`
- [supertest](https://www.npmjs.com/package/supertest): http assertions, install `--save-dev`
	- `var request = require('supertest');`
	- `request(app).get("/").expect(200).end(done);`
	- `request(app).post("/dictionary-api").send({ "term": "Three", "defined": "Term Three Defined"}).expect(200).end(done);`
	- when running request, console.log `<method> request for '<url>' - <body>` such as `GET request for '/' - {}`
- [cheerio](https://www.npmjs.com/package/cheerio): use core jQuery for server
	- `var cheerio = require('cheerio')`
	- `var $ = cheerio.load(html)`
	- `$("body>h1:first-child").text();`: use like jQuery

## 11. Automation and Deployment
- `fc`: see difference between files; `move`
- `npm install -g grunt-cli`: the grunt command line interface
- `npm install grunt --save-dev`: JavaScript task runner
- `npm install grunt-contrib-jshint --save-dev`: validate files with jshint
- create `GruntFile.js` or `gruntfile.coffee`, export function(grunt){}, in function have `grunt.initConfig({})` (config tasks), `grunt.loadNpmTasks(package)` (load packages), `grunt.registerTask('default',[package] )` (specify default package)
- `grunt [task]`
- `npm install grunt-contrib-less --save-dev`: a plugin that allow to convert LESS to CSS
- `grunt.loadNpmTasks('grunt-contrib-less')`
- `grunt.registerTask('css', ['less'])`
- `grunt css`
- `npm install grunt-autoprefixer --save-dev`
- `grunt.registerTask('css', ['less', 'autoprefixer'])`
- `grunt.registerTask('default', ['jshint', 'css'])`
- `browserify`: bundle Javascript in one file so that dependencies can be loaded faster
- use jquery: `var $ = require('jquery');`
- `npm install jquery`
- `npm install grunt-browserify --save-dev`
- `npm install grunt-contrib-watch --save-dev`
- `grunt watch`
- package.js: `scripts.prestart`: run before `npm start`; `dev`, `predev`: run before `npm run dev`
- predefined, keyworded npm script: start, test, install
- `npm install -g node-inspector`;
- `scripts.debug`; `predebug`, `postdebug`
- `npm run debug`: can use browser to debug