# 杨辉三角

给定一个非负整数 *numRows*，生成杨辉三角的前 *numRows* 行。

![杨辉三角](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例：

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

实现：

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var res = [];
  for( var row = 0; row < numRows; row++ ) {
    var arr = [];
    for ( var col = 0 ; col <= row ; col++ ) {
        arr.push(helper(row, col));
    }
    res.push(arr);
  }
  return res;
};

function helper(row, col) {
    if(col === 0) return 1;
    if(col === row) return 1;
    return helper(row-1, col-1) + helper(row-1, col);
}
```
