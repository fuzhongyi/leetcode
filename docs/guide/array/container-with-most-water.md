# 盛最多水的容器

给你 *n* 个非负整数 $a_1$，$a_2$，...，$a_n$，每个数代表坐标中的一个点 (i, $a_i$) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, $a_i$) 和 (i, 0)。找出其中的两条线，使得它们与 *x* 轴共同构成的容器可以容纳最多的水。

**说明：** 你不能倾斜容器，且 *n* 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

#### 示例

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

#### 实现

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var start = 0;
    var end = height.length - 1;
    var max = 0;
    while (start < end) {
        max = Math.max(max, (end - start) * Math.min(height[start], height[end]));
        if (height[start] < height[end] ) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};
```
