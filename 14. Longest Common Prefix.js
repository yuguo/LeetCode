/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return '';
    }
    
    return strs.reduce(function(preString, currentString){ //初始化：currentString是第二个字符串，preString是第一个字符串，随后坐标一直后移
        var i = 0;
        while(preString[i] && currentString[i] && preString[i] === currentString[i]){
            i++;
        }
        return currentString.slice(0,i); // 作为下一个preString传到后面去
    });
};
