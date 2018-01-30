# NODEJS: TEST-	DRIVEN DEVELOPMENT

- Concepts we're building on: Javascript, node.js, koa, generators

## 1. Understanding test-driven development
- tdd >< bdd (behavior-drive development)
- What is testing and test first: traditional teting: plan and write code -> test; test first: write test -> fail test -> code to pass test

## 2. Testing your data layer 
- framework: `npm install mocha`
- creating first test: create folder test -> write test file
	- `describe(str, func)`
	- writing test for object not yet exists
	- `it(str, func)`: 
	- `mocha --harmony`
- Make sure you fail first: `npm install co-mocha`
- Getting your test to pass: create user-data.js, `require('co-mocha')` in test file
	- user-date.js: exports users: {get: function*(){}, save: function*(){}}`
	- user-api-spec.js: `var should = require('should')`; `require('co-mocha')`, `require('co-fs')`

## 3. Testing your web layer
- SuperTest framework: test http request: `npm install co-supertest`, `npm install koa`, `npm install koa-router` -> integration test
- code refactoring: make code more readable, change code without change functionality; run test to test if changed functions
- Trying the final product: `node --harmony user-web`