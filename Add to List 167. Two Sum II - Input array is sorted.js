/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;
    while(i < j){
        if(numbers[i] + numbers[j] < target){
            i++;
        }else if(numbers[i] + numbers[j] > target){
            j--;
        }else{
            return [i + 1, j + 1]
        }
    }
};

// 本题的关键要考虑最糟糕情况下，可能在数组的非常靠后位置才会得到解
// 因此用两个pointer，一个指向0，一个指向最后一个index，然后同时前进
