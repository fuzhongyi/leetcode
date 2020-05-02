# 最长连续递增序列

给定一个未经排序的整数数组，找到最长且连续的的递增序列。

#### 示例 1

```
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
```

#### 示例 2

```
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```

**注意：** 数组长度不会超过10000。

#### 实现

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0;
    var p1 = 0;
    var p2 = 1;
    var length = 1;
    while (p2 < nums.length) {
        if (nums[p2] > nums[p2 - 1]) {
            length = Math.max(length, p2 - p1 + 1);
        } else {
            p1 = p2;
        }
        p2++;
    }
    return length;
};
```
