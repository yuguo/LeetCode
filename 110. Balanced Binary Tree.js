/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var result = true;
    var getHeight = function(node){
        if(node === null || node === undefined){
            return 0;
        }
        
        var leftHeight = getHeight(node.left);
        var rightHeight = getHeight(node.right);
        if(Math.abs(leftHeight - rightHeight) > 1){
            result = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    };
    getHeight(root);
    return result;
};
