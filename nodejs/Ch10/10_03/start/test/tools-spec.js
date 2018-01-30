var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	describe("loadWiki()", function() {
		before(function() {
			nock("https://en.wikipedia.org") //intercept domain 
			    .get("/wiki/Abraham_Lincoln") //intercept request
			    .reply(200, "Mock Abraham Lincoln Page"); //reply
		});

		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.equal("Mock Abraham Lincoln Page");
				done();
			});

		});
		it('Intercepted request', function(done){
			tools.loadWiki({first:'Main', last:'Page'}, function(html){
				expect(html).to.ok;
				done();
			})
		});
		it('Another website', function(done){
			require('http').get('http://www.example.com/', function(html){
				expect(html).to.ok;
				done();
			})
		})

	});

});


