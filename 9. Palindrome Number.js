/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xStr = x.toString(),
        strLength = xStr.length;
        
    for(i = 0; i < strLength/2; i++){
        if(xStr.charAt(i) != xStr.charAt(strLength - i - 1)){
            return false;
        }
    }
    return true;
};
