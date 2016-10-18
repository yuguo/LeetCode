/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    for(let i = s.length - 1, j = s.length - i - 1; i >= 0; i--,j++){
        result += (s.charCodeAt(i) - 64) * Math.pow(26, j);
    }
    return result;
};
