/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var num4 = num.toString(4);
    if(num4[0] === '1' && num4.replace(/0/g, '').length === 1){
        return true;
    }
    return false;
};
