/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    for(let i = 0;i < rowIndex+1; i++){
        var temp1 = 1,
            temp2;
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                result[j] = 1;
            }else{
                temp2 = result[j];
                result[j] = result[j] + temp1;
                temp1 = temp2;
            }
        }
    }
    return result;
};

// Could you optimize your algorithm to use only O(k) extra space?
// 因为题目要求不使用额外的空间，我们就姑且无视javascript新数组占新空间的事实吧
// 用两个临时变量和一个result数组来回倒腾
