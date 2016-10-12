/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numLens = nums.length;
    for(var i = 0; i < numLens; i++){
        for(var j = i+1; j < numLens; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};
