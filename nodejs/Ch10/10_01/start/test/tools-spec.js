var expect = require('chai').expect;
var tools = require('../lib/tools');

describe('printName()', function() {
	describe('dsc', ()=>{

	it('should print the last name first', function() {

		var results = tools.printName({ first: 'Alex', last: 'Banks'});

		expect(results).to.equal('Banks, Alex');
		expect('abc').to.equal('def', 'you expected the impossible');

	});
	it('1===1', ()=> expect(1).equal(1));
});

});