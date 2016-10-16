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
var levelOrder = function(root) {
    var result = [];
        
    var putChildren = function(root, i){
        if(root !== null){
            result[i] = result[i] || [];
            result[i].push(root.val);
            putChildren(root.left, i + 1);
            putChildren(root.right, i + 1);
        }
    }
    
    putChildren(root, 0);
    return result;
};
