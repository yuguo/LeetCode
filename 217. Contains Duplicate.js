/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var a = [],
        n = nums.length;
    for(let i = 0; i < n; i++){
        if(a.indexOf(nums[i]) !== -1){
            return true;
        }
        a.push(nums[i]);
    }
    return false;
};
