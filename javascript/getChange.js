module.exports = function(total, moneyPaid, coins){
	var change = moneyPaid - total, result = [];
	coins.sort((a,b) => a-b).reverse();

	if (change<0 || change%10>0){
		throw new Error();
	}

	for(let i=0; i<coins.length; ++i){
		for(let j=1; j<=change/coins[i]; ++j){
			result.push(coins[i]);
		}
		change = change%coins[i];
		if(change==0)
			return result;
	}

}