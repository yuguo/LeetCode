/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // "" -> return true
    // s.length === odd -> return false
    if(s.length === 0) return true;
    if(s.length % 2 !== 0) return false;
    
    var map = {
        '(': 1,
        ')': -1,
        '[': 10,
        ']': -10,
        '{': 100,
        '}': -100
    }
    
    var array = s.split(''),
        stack = [],
        result = false;
        
    array.forEach(char =>{
        var currValue = map[char];
        if(currValue > 0){
            stack.push(currValue);
        }else if(stack[stack.length - 1] === -currValue){
            stack.pop();
        }else{
            return false;
        }
    });
    
    if(stack.length === 0){result = true}
    
    return result;
};
