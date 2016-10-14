/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    var i;
    for(i = 0; i < nums.length; i = i + 3){
        if((nums[i] !== nums[i+1]) || (nums[i] !== nums[i+2])){
            return nums[i];
        }
    }
};
