# 螺旋矩阵

给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

#### 示例 1

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```

#### 示例 2

```
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```

#### 实现

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return matrix;
    var size = matrix.length * matrix[0].length;
    var x = 0 , y = 0;
    // 移动方向
    var direction = 'right';
    // 边界
    var bRight = matrix[0].length - 1;
    var bBottom = matrix.length - 1;
    var bLeft = 0;
    var bTop = 1;
    var res = [];
    while (res.length < size) {
      res.push(matrix[x][y]);
      switch (direction) {
        case 'right':
          y++;
          if (y > bRight) {
            y = bRight;
            x++;
            bRight--;
            direction = 'bottom';
          }
          break;
        case 'bottom':
          x++;
          if (x > bBottom) {
            x = bBottom;
            y--;
            bBottom--;
            direction = 'left';
          }
          break;
        case 'left':
          y--;
          if (y < bLeft) {
            y = bLeft;
            x--;
            bLeft++;
            direction = 'top';
          }
          break;
        case 'top':
          x--;
          if (x < bTop) {
            x = bTop;
            y++;
            bTop++;
            direction = 'right';
          }
          break;
      }
    }
    return res;
};
```
