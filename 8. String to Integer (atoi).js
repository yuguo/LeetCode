/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const MAX_INTERGER = 2147483647;
    const MAX_NEG_INTERGER = -2147483648;
    
    var resultNumber = parseInt(str) || 0;
    
    if (resultNumber > MAX_INTERGER){
        resultNumber = MAX_INTERGER;
    }else if (resultNumber < MAX_NEG_INTERGER) {
        resultNumber = MAX_NEG_INTERGER;
    }
    
    return resultNumber;
};
