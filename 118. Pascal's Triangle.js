/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0){
        return [];
    }
    var result = [[1]];
    for(let i = 1; i < numRows; i++){
        let array = [1];
        for(let j = 1; j < i + 1; j++){
            array.push((result[i-1][j-1] || 0) + (result[i-1][j] || 0));
        }
        result.push(array);
    }
    return result;
};
