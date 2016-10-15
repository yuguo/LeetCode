/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    var i = s.length - 1,
        j = 0;
    for(;i >= 0; i--){
        if(s[i] === ' '){
            return j;
        }
        j++;
    }
    return j;
};
