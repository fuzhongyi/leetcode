# 三数之和

给你一个包含 *n* 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 *a，b，c* ，使得 *a + b + c = 0* ？请你找出所有满足条件且不重复的三元组。

**注意：** 答案中不可以包含重复的三元组。

#### 示例

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

#### 实现

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    var res = [];
    var p = nums.findIndex(num => num >= 0);
    if(p === -1) return res;
    if(nums[p] === 0) p++;
    for(var i = 0; i < p; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        var p1 = i + 1;
        var p2 = nums.length - 1;
        while (p1 < p2) {
            var sum = nums[i] + nums[p1] + nums[p2];
            if (sum > 0 || (p2 < nums.length - 1 && nums[p2] === nums[ p2 + 1])) {
                p2--;
            } else if (sum < 0 || (p1 > i + 1 && nums[p1] === nums[ p1 - 1])) {
                p1++;
            } else {
                res.push([nums[i], nums[p1], nums[p2]]);
                p1++;
            }
        }
    }
    return res;
};
```
