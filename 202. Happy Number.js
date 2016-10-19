/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var array = [];
    var f = function(n){
        let plus = 0;
        while(n > 0){
            let j = n % 10;
            plus += j * j;
            n = parseInt(n / 10);
        }
        return plus;
    }
    
    while(n !== 1){
        if(array.indexOf(n) !== -1){
            return false
        }
        array.push(n);
        n = f(n);
    }
    return true;
};
