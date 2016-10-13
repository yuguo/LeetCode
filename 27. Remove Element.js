/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var n = nums.length;
    for(var i = 0; i < n; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
