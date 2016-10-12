/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var stringLens = s.length,
        index = 0,
        i = 0,
        j = 0,
        k = 0,
        result = new Array(numRows),
        resultStr = '',
        flag = 1;
    
    while(index < stringLens){
        result[i] = result[i] || [];
        result[i][j] = s[index];
        
        if(i === 0){ //reach the top, flag = 1
            if(i === numRows - 1){
                j++;
            }else{
                i++;
                flag = 1;
            }
        }else if(i === numRows - 1 || flag === -1){ //reach the bottom or going up, set flag = -1
            i--;
            j++;
            flag = -1;
        }else{
            i++;
        }
        
        index++;
    }
    
    for(; k < numRows; k++){
        if(result[k]){
            resultStr += result[k].join('')
        }
    }
    return resultStr;
};
