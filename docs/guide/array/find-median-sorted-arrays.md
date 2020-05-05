# 寻找两个有序数组的中位数

给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 `nums1` 和 `nums2` 不会同时为空。

#### 示例 1

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

#### 示例 2

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

#### 实现

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = [];
    while (nums1.length > 0 || nums2.length > 0) {
        if (nums1.length === 0 || nums1[0] > nums2[0]) {
            nums.push(nums2.shift());
        } else {
            nums.push(nums1.shift());
        }
    }
    var len = nums.length;
    if (len % 2 === 0) {
        return (nums[len / 2] + nums[len / 2 - 1]) / 2;
    }
    return nums[Math.floor(len / 2)];
};
```
