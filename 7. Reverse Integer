/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var resultString,
        absNumber,
        negFlag = false;
    if(x < 0){
        negFlag = true;
        absNumber = parseInt((-x).toString().split('').reverse().join(''));
    }else {
        absNumber = parseInt(x.toString().split('').reverse().join(''));
    }
    
    if(absNumber >= 2147483647){ // simulate Int32
        absNumber = 0;
    }
    
    return negFlag ? -absNumber : absNumber;
};
