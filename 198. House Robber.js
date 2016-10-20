/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var maxOdd = 0,
        maxEven = 0;
    for(let i = 0; i < nums.length; i++){
        if(i % 2 === 0){
            maxOdd = Math.max(maxOdd + nums[i], maxEven);
        }else{
            maxEven = Math.max(maxEven + nums[i], maxOdd);
        }
    }
    return Math.max(maxOdd, maxEven);
};
// 这题看了答案才想到，本来用递归非常复杂的方法
// 最后用奇偶两个变量的方法确实比较机制，时间复杂度和空间复杂度都很理想
