/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let i = 0,
        j = s.length - 1;
    while(i < j){
        if(!isVowel(s[i])){
            i++;
        }else{
            while(!isVowel(s[j])){
                j--;
            }
            if(i < j){
                let temp = s[j];
                s[j] = s[i];
                s[i] = temp;
                console.log(s);
                j--;
                i++;
            }else{
                break;
            }
        }
    }
    return s;
};
// 代码比较长，但是时间复杂度比较好，使用快速排序一次过

var isVowel = function(char){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }else if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
        return true;
    }
    return false;
};

// 第二次写：简化了代码量

var reverseVowels = function(s) {
    let i = 0, j = s.length - 1, vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while(i < j){
        if(vowels.indexOf(s.charAt(i)) != -1) {
            while(j > i){
                if(vowels.indexOf(s.charAt(j)) != -1){
                    s = switchChar(s, i, j);
                    j--;
                    break;
                }
                j--;
            }
        }
        i++;
    }
    return s;
};

function switchChar(s, i, j){
    let a = s.charAt(i),
        b = s.charAt(j);
    return s.slice(0, i) + b + s.slice(i+1, j) + a + s.slice(j+1);
}
