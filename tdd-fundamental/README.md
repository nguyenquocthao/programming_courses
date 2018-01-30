# PROGRAMMING FOUNDATIONS: TEST-DRIVEN DEVELOPMENT

## 1. Introduction to Test-driven Development (TDD)
- What kind of testing: beta testing, performance, stress, integration
- This course: unit testing: the smallest unit code possible, test as soon as we write it
- Write code automate test our code, save them; automated unit tests
- TDD: test-driven develpment: unit test: write logic -> write test; tdd: write test first for failing, then write minimum code to pass the test
- Common questions and concerns: does TDD work for everything: true, but unit test does not replace all testing; write all test first: no; tester write tests: no, you write test, tester do other test.

## 2. Getting started
- Unit test frameworks: class Tester; junit for java; unittest for python
- SUnit Smalltak -> JUnit Java -> NUnit .NET, PUnit Python...; xUnit frameworks; [en.wikipedia.org](en.wikipedia.org) -> list of unit testing frameworks
- Assertions: can be positive or negative; assertion fail -> program error in code; ignored in shipping code; end goal of unit test is to support some kind of assertions
- Using assertion: Java: `assert x>10;` ; objective-C: `NSAssert(x>10, @"Error");`; JUnit: `assertEquals(arg1, arg2);`, `assertArrayEquals`, `assertNotNull`, `assertNull`,...
- Creating a basic test: think about what action will lead to result; unexpected action (withdraw negative)
- Creating a test in Eclipse: **Exercises** New-> Unit test -> Name: BankAccountTest, put `@test` before test function -> create BankAccount.java
- Red: fail, green: pass; refactor: make code right

## 3. Working with tests
- TDD process: write test -> watch test fail -> write application logic as simple as possilbe -> pass test -> refactor -> pass test again
- Adding tests and removing duplication: **exercises**
- Testing privacy: **exercises**: change props balance to method getBalance(); no test
- Multiple test methods: multiple function to test; test method should be independence of each others
- BankAccountBalance: negative amount
- Naming unit tests and test methods: PersonTest.java; naming test method: use name of unit being tested, and add specifics: testWithdraw(); withdraw(), withdrawWithPanalty(); each language have their own way.

## 4. Individual techniques
- Testing return values: testing void method: Arrange (declare value)-> Act (call methods)-> Assert
- Creating a test for expected exceptions: `int a=5, b=0; c.divide(a,b);`; at top `@Test(expect...)`; python: `self.assertRaises(ValueError, cal.divide, 5, 0)`
- Setting up and tearing down: public void setUp() -> any needed setup, before all test; public void tearDown() -> release anything you need, after all test
- Common questions on individual tests: Do i test getters and setters: only if they could meaningfully break; do I test private methods: generally, no; combining multiple test classes -> test suites; how to control order of tests -> don't, avoid because order suggest dependencies, unit test is different from application test

## 5. Additional Topics
- Mock objects reason: real object haven't been written; need human interaction; slow, difficult to set up; external resource, non-deterministic behavior
- Fake objects vs mock objects:
	- Fake objects match the original (or intended) method implementation, return pre-arranged result
	- Mock objects: 
- Mock object frameworks: provide structure for defining, add in generating methods,...
- lib: jmock, mockito, ocmock, mock1.0.1
- measuring code coverage: EMMA: free javascript tool; clover from atlassian; ncover; python coverage 3.6
- TDD recommendations: 
	- 1 test case/test fixture for each class; 3-5 test methods for
	- What to test: a test for every branch; use coverage tool
	- avoid: interactive with database/file system; require non-trivial network communication; require environment changes to run; call complex collaborator objects
	- unit tests is different from other tests
	- Adding tests to existing projects:
		- #1: create a complete suite of unit tests (bad idea)
		- #2: create test as needed
- Next step: language-specific resource