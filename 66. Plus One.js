/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i;
    for(i = digits.length - 1 ;i >= 0; i--){
        if(digits[i] + 1 === 10){
            digits[i] = 0;
            if(i === 0){
                digits.unshift(1);
            }
        }else{
            digits[i]++;
            break;
        }
    }
    return digits;
};
