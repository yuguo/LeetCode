/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    'use strict';
    let result = "",
        carry = 0;
    for(let i = a.length, j = b.length; i > 0 || j > 0; i--, j--){
        let value = parseInt(a[i-1]||0) + parseInt(b[j-1]||0) + carry;
        result = ((value%2) ? '1' : '0').concat(result);
        carry = parseInt(value/2);
        console.log(carry);
    }    
    if(carry === 1){
        result = '1' + result;
    }
    return result;
};
