/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var n = nums.length,
        j = 0;
    for(let i = 0; i < n - j; i++){
        if(nums[i] === 0){
            j++;
            nums.splice(i,1);
            nums.push(0);
            i--;
        }
    }
};
