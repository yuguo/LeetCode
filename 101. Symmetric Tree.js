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
 * 递归的方法
 */
var isSymmetric = function(root) {
    // recursive
    var isSym = function(a, b){
        if((a === null || a === undefined) && (b === null || b === undefined)){
            return true;
        }else if(a === null || b === null || a === undefined || b === undefined){
            return false;
        }else if(a.val === b.val){
            return isSym(a.left, b.right) && isSym(a.right, b.left);
        }else{
            return false;
        }
    }
    
    if(root === null){
        return true;
    }else{
        return isSym(root.left, root.right);
    }
};
