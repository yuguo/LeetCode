/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var arr = {},
        n = nums.length;
    for(let i = 0; i < n; i++){
        let e = nums[i];
        if(arr[e] === undefined){
            arr[e] = 1;
        }else {
            arr[e]++;
        }
        if(arr[e] >= n/2){
            return e;
        }
    }
};
