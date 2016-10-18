/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var m,n;
    if(s.length !== t.length){
        return false;
    }
    for(let i = 0; i < s.length; i++){
        var char = s.charAt(i);
        var j = t.indexOf(char);
        if(j === -1){
            return false;
        }else {
            s = s.substr(0,i) + s.substr(i+1);
            t = t.substr(0,j) + t.substr(j+1);
            i--;
        }
    }
    return true;
};
