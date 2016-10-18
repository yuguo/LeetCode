/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var m = nums1.length,
        n = nums2.length,
        result = [];
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(nums1[i] === nums2[j]){
                result.push(nums1[i]);
                nums2.splice(j,1);
                break;
            }
        }
    }
    return result;
};
