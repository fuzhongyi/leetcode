# 反转链表

反转一个单链表。

#### 示例

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

#### 进阶

你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

#### 实现

```js
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
    if (head === null || head.next === null) return head;
    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};
```
