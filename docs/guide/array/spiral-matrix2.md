# 螺旋矩阵 II

给定一个正整数 *n*，生成一个包含 1 到 *$n^2$* 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

#### 示例

```
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

#### 实现

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = Array.from({ length: n }, () => []);
    var x = 0, y = 0;
    var direction = 'right';
    var bRight = n - 1;
    var bBottom = n - 1;
    var bLeft = 0;
    var bTop = 1;
    var i = 1;
    while (i <= n * n) {
      matrix[x][y] = i;
      i++;
      switch (direction) {
        case 'right':
          y++;
          if (y > bRight) {
            y = bRight;
            bRight--;
            x++;
            direction = 'bottom';
          }
          break;
        case 'bottom':
          x++;
          if (x > bBottom) {
            x = bBottom;
            bBottom--;
            y--;
            direction = 'left';
          }
          break;
        case 'left':
          y--;
          if (y < bLeft) {
            y = bLeft;
            bLeft++;
            x--;
            direction = 'top';
          }
          break;
        case 'top':
          x--;
          if (x < bTop) {
            x = bTop;
            bTop++;
            y++;
            direction = 'right';
          }
          break;
      }
    }
    return matrix;
};
```
