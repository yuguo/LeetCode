/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var f = function(nHead){ // get the reverseIndex, and skip the nth one(n{1,2,3..to the second one})
        if(nHead === null){
            return 0;
        }
        reverseIndex = f(nHead.next) + 1;
        
        if(reverseIndex === n + 1){
            nHead.next = nHead.next.next; // skip the one
        }
        return reverseIndex;
    }
    
    if(f(head) === n){
        return head.next; //remove the first one
    } else {
        return head;
    }
};
