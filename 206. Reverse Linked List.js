/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var result;
    var f = function(node){
        if(node === null || node.next === null){
            result = node;
            return node;
        }else{
            let newHead = f(node.next);
            newHead.next = node;
            node.next = null;
            return node;
        }
    }
    f(head);
    
    return result;
};
