/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var result = '',
        m = s.length,
        n = t.length;
    for(let i = 0; i < m; i++){
        result ^= s[i].charCodeAt();
    }
    for(let i = 0; i < n; i++){
        result ^= t[i].charCodeAt();
    }
    return String.fromCharCode(result);
};
