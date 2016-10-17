/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var m = ransomNote.length,
        n = magazine.length;
    magazine = magazine.split('');
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(magazine[j] === ransomNote[i]){
                magazine.splice(j, 1);
                j--;
                n--;
                break;
            }
            //
            if(j === n-1){
                return false;
            }
        }
        if(n === 0){
            return false;
        }
    }
    return true;
};
