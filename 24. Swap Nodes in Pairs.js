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
var swapPairs = function(head) {
    if(head === undefined || head === null){
        return null;
    }else if(head.next === null){
        return head;
    }
    var tempValue = head.val;
    head.val = head.next.val;
    head.next.val = tempValue;
    head.next.next = swapPairs(head.next.next);
    return head;
};
