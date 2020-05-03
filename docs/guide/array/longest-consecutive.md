# 最长连续序列

给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 *O(n)*。

#### 示例

```
输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

#### 实现 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    nums.sort((a,b) => a - b);
    var p1 = 0;
    var p2 = 1;
    var len = 1;
    while  (p2 < nums.length && nums.length - p1 > len) {
        if (nums[p2] === nums[p2 - 1] + 1) {
            len = Math.max(len, p2 - p1 + 1);
        } else if(nums[p2] === nums[p2 - 1]) {
            p1++;
            len = Math.max(len, p2 - p1 + 1);
        }else {
            p1 = p2;
        }
        p2++;
    }
    return len;
};
```

#### 实现 2

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = new Set(nums);
    var len1 = 0;
    for (var num of nums) {
        var left = num;
        var right = num + 1;
        var len2 = 0;
        while (nums.has(left)){
            nums.delete(left);
            left--;
            len2++;
        }
        while (nums.has(right)){
            nums.delete(right);
            right++;
            len2++;
        }
        len1 = Math.max(len1, len2);
    }
    return len1;
};
```
