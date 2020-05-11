# 多数元素

给定一个大小为 *n* 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

#### 示例 1

```
输入: [3,2,3]
输出: 3
```

#### 示例 2

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

#### 实现 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj = {};
    var i = 0;
    while (i < nums.length) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
        if (obj[nums[i]] > nums.length / 2) {
            return nums[i];
        }
        i++;
    }
};
```

#### 实现 2

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0;
    var num;
    var i = 0;
    while (i < nums.length) {
        if (count === 0) num = nums[i];
        num === nums[i++] ? count++ : count--;
    }
    return num;
};
```
