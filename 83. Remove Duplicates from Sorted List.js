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
var deleteDuplicates = function(head) {
    var temp = head;
    while(temp !== null){
        if(temp.next !== null && temp.val === temp.next.val){
            temp.next = temp.next.next;
        }else {
            temp =temp.next;
        }
        
    }
    return head;
};
