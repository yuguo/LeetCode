/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [],
        m = nums1.length,
        n;
    for(let i = 0; i < m; i++){
        if(result.indexOf(nums1[i]) === -1){
            result.push(nums1[i]);
        }
    }
    n = result.length;
    for(let i = 0; i < n; i++){
        if(nums2.indexOf(result[i]) === -1){
            result.splice(i, 1);
            i--;
            n--;
        }
    }
    return result;
};
