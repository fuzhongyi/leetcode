# 区间子数组个数

给定一个元素都是正整数的数组`A` ，正整数 `L` 以及 `R` (`L <= R`)。

求连续、非空且其中最大元素满足大于等于`L` 小于等于`R`的子数组个数。

#### 示例

```
例如 :
输入:
A = [2, 1, 4, 3]
L = 2
R = 3
输出: 3
解释: 满足条件的子数组: [2], [2, 1], [3].
```

**注意:**

+ `L, R` 和 `A[i]` 都是整数，范围在 `[0, 10^9]`。
+ 数组 `A` 的长度范围在`[1, 50000]`。

#### 实现

```js
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
  var count = 0;
  var lastLeft = -1;
  var left = -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= R) {
      if (A[i] >= L && A[i] <= R) {
        lastLeft = i
        count += i - left;
      } else {
        count += lastLeft - left;
      }
    } else {
      lastLeft = i;
      left = i;
    }
  }
  return count;
};
```
