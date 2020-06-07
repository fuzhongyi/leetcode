# 跳跃游戏

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

#### 示例 1

```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```

#### 示例 2

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

#### 实现

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var p = -1;
    if (nums.length === 1) return true;
    if (nums[0] === 0) return false;
    for (var i = 0; i < nums.length - 1; i++) {
        if(nums[i] - nums[i + 1] === 1) {
            if (nums[i + 1] === 0 && i + 1 !== nums.length - 1 && (p === -1 || nums[p] <= nums[p + 1])) {
                return false;
            }
        } else if (nums[i] === 0) {
            for (var j = i + 1; j <= nums[i - 1] + i; j++) {
                if (nums[j] !== 0) {
                    break;
                } else {
                    if (j === nums[i - 1] + i) {
                        return false;
                    }
                }
            }
        } else {
            p = i;
        }
    }
    return true;
};
```
