/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var s = [],
        result = [];
        
    var putChildren = function(root, i){
        if(root !== null){
            if(s[i] === undefined){
                s[i] = true;
                result.unshift([]);
            }
            var n = result.length - i - 1;
            result[n].push(root.val);
            putChildren(root.left, i + 1);
            putChildren(root.right, i + 1);
        }
    }
    
    putChildren(root, 0);
    return result;
};
