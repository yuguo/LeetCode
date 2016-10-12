/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        '(': ')',
        '[': ']',
        '{' : '}'
    }
    
    var stack = [],
        sLength = s.length;
      
    for(var i = 0; i < sLength; i++){
        var char = s[i];
        if(map[char]){
            stack.push(map[char]);
        }else{
            if(char !== stack.pop()){
                return false;
            }
        }
    }  
     
    return stack.length === 0;
};
