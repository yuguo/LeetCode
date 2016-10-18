/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var sing = [],
        dump = [];
        n = s.length;
    for(let i = 0; i < n; i++){
        if(dump.indexOf(s[i]) !== -1){ // already in dump
        }else if(sing.indexOf(s[i]) === -1){ // not in dump, new in sing
            sing.push(s[i]);
        }else{ // second time in sing
            dump.push(s[i]);
            sing.splice(sing.indexOf(s[i]), 1);
        }
    }
    return s.indexOf(sing[0]);
};
