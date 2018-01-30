var assert = require('assert');

describe('getChange', function() {
	it('should return correct answer', function() {
		var getChange = require('./getChange');
		
		var sampleInputs = [
			{
				total: 90,
				moneyPaid: 90,
				coins: [20, 10, 50]
			},
			{
				total: 90,
				moneyPaid: 120,
				coins: [20, 50, 10]
			},
			{
				total: 90,
				moneyPaid: 170,
				coins: [10, 20, 50]
			},
			{
				total: 150,
				moneyPaid: 500,
				coins: [50, 20, 10, 100]
			},
		];
		var expectedOutputs = [
			[],  
			[20, 10],
			[50, 20, 10],
			//[200, 100, 50],
			[100, 100, 100, 50]
		];

		sampleInputs.forEach(function(input, i) {
			assert.deepEqual(getChange(input.total, input.moneyPaid, input.coins), expectedOutputs[i]);
		});
	});

	it('should throw error because paid money is less than total money', function() {
		var getChange = require('./getChange');
		
		var sampleInputs = [
			{
				total: 90,
				moneyPaid: 80,
				coins: [20, 10, 50]
			},
		];

		sampleInputs.forEach(function(input, i) {
			assert.throws( function() {getChange(input.total, input.moneyPaid, input.coins) }, Error);
		});
	})

	it('should throw error when there is no way can make a change', function() {
		var getChange = require('./getChange');
		
		var sampleInputs = [
			{
				total: 95,
				moneyPaid: 99,
				coins: [20, 10, 50]
			},
		];

		sampleInputs.forEach(function(input, i) {
			assert.throws( function() {getChange(input.total, input.moneyPaid, input.coins) }, Error);
		});
	});
})