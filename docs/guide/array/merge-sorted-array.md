# 合并两个有序数组

给你两个有序整数数组 *nums1* 和 *nums2*，请你将 *nums2* 合并到 *nums1* 中，使 *nums1* 成为一个有序数组。

**说明:**

初始化 *nums1* 和 *nums2* 的元素数量分别为 *m* 和 *n* 。
你可以假设 *nums1* 有足够的空间（空间大小大于或等于 *m + n*）来保存 *nums2* 中的元素。

#### 示例

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

#### 实现

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var k = m + n - 1;
    var i = m - 1;
    var j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] <= nums2[j]) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i--];
        }
    }
    // 如果 nums1 提前遍历完毕，把所有 nums2 拼接到 nums1 前
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
};
```
