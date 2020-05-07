# 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `char[]` 的形式给出。

不要给另外的数组分配额外的空间，你必须[原地](https://baike.baidu.com/item/原地算法)**修改输入数组**、使用 `O(1)` 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符。

#### 示例 1

```
输入: ["h","e","l","l","o"]
输出: ["o","l","l","e","h"]
```

#### 示例 2

```
输入: ["h","e","l","l","o"]
输出: ["o","l","l","e","h"]
```

#### 实现

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(!s || s.length === 0) return s;
    helper(s, 0, s.length - 1);
    return s;
};

function helper(s, start, end) {
    if(start >= end) return;
    var temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
    helper(s, start, end);
}
```