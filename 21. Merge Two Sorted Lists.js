/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head;
    
    if(l1 === null){
        return l2;
    }else if(l2 === null){
        return l1;
    }
    
    if(l1.val < l2.val){
        head = l1;
        if(l1.next === null){ // 如果l1已经用完了，就把l2都丢进去
            head.next = l2;
        }else{
            head.next = mergeTwoLists(l1.next, l2);
        }
    }else if(l1.val >= l2.val){
        head = l2;
        if(l2.next === null){
            head.next = l1;
        }else{
            head.next = mergeTwoLists(l1, l2.next);
        }
    }
    return head;
};
