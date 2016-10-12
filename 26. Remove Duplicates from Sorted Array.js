/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0 || nums.length === 1){
        return nums.length;
    }
    
    var i = 1;
    while(i < nums.length){
        if(nums[i-1] === nums[i]){
            nums.splice(i, 1);
        }else {
            i++;
        }
    }
    return nums.length;
};
