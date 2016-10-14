/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result;
    for(var i in nums){
        result ^= nums[i];
    }
    return result;
};

// 如果可以新开辟一个数组，是很简单的，但是不能，所以想别的方法
// 第二种思路是排序sort之后，相同的数字都在一起了，再走一次复杂度为O(n)的遍历，找出单个数字即可
// 但这种方法本质上遍历了两次，时间是O(n)+，空间姑且认为是O(n)
// 最后看了下社区回答，发现一个黑科技：
// XOR! 
// 完美解法就是它了……
