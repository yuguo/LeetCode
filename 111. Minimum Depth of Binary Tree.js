/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    var array = [];
    var getDepth = function(node, n){
        if(node === null || node === undefined){
            if(n === 0){
                array.push(0); 
            }
            return 0;
        }
        let leftDepth = getDepth(node.left, n+1);
        let rightDepth = getDepth(node.right, n+1);
        if(leftDepth === 0 && rightDepth === 0){
            array.push(n+1);
        }
        return Math.max(leftDepth, rightDepth) + 1;
    }
    getDepth(root, 0);
    
    return Math.min.apply(Math, array); 
};
