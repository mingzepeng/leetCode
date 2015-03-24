/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while(n){
    	if (n % 2 === 1) count++;
    	n = n >>> 1	
    }
    return count;
};

console.log(hammingWeight(27));