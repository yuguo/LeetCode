/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    var array = [],
        placeholder = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],
        result = '';
    if(num < 0){
        num += 4294967296;
    }else if(num === 0){
        return '0';
    }
    while(num / 16 > 0){
        array.unshift(num % 16);
        num = parseInt(num / 16);
    }
    array.forEach(function(e){
        result = result.concat(placeholder[e]);
    })
    return result;
};
