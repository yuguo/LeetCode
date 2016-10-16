/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1){
        return 1;
    }else if (n === 2){
        return 2;
    }else {
        let j = 1,
            k = 2,
            result = 1;
        for(let i = 3; i <= n; i++){
            result = j + k;
            j = k;
            k = result;
        }
        return result;
    }
};
