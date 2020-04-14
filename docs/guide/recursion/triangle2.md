# 杨辉三角II

给定一个非负索引 *k*，其中 *k ≤ 33*，返回杨辉三角的第 *k* 行。

![杨辉三角II](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例：

```
输入: 3
输出: [1,3,3,1]
```

实现：

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
  var res = [];
  for ( var col = 0 ; col <= rowIndex ; col++ ) {
      res.push(helper(rowIndex, col));
  }
  return res;
};

function helper(row, col) {
    if(col === 0) return 1;
    if(col === row) return 1;
    return helper(row-1, col-1) + helper(row-1, col);
}
```
