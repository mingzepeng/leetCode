/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n >= Math.pow(2,32)) return false;
    var sum = 0 , bits = [] , i = 0;
    while(n > 0){
    	console.log(i);
    	if (n % 2 === 1) {
    		sum += Math.pow(2,31-i);
    	}
    	n = n　>>> 1;
    	i++;
    }
    return sum;
};

console.log(reverseBits(2147483648));