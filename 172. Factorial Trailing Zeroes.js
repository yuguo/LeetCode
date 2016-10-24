/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n < 5) return 0;
    return parseInt(n/5) + trailingZeroes(n/5);
};

// 其实是一个纯粹的数学问题
