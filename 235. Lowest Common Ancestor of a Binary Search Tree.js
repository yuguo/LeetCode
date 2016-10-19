/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(Math.max(p.val, q.val) >= root.val && Math.min(p.val, q.val) <= root.val ){
        return root;
    }else if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    }else if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    }
};
