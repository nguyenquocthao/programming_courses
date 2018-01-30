var path=require('path');
var hello = 'abcdefghijk';

console.log('Hello');
global.console.log('World');
console.log(hello.slice(5));
console.log(__dirname);
console.log(__filename);
//console.log(path.file);
console.log(hello);