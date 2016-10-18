/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var uniqueArray = [],
        n;
    for(let i = 0; i < s.length; i++){
        let j = uniqueArray.indexOf(s[i]);
        if(j === -1){
            uniqueArray.push(s[i]);
        }else {
            uniqueArray.splice(j, 1);
        }
    }
    n = uniqueArray.length;
    if(n === 0 || n === 1){
        return s.length;
    }else {
        return s.length - n + 1;
    }
};
