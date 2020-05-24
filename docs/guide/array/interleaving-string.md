# 交错字符串

给定三个字符串 *s1*, *s2*, *s3*, 验证 *s3* 是否是由 *s1* 和 *s2* 交错组成的。

#### 示例 1

```
输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出: true
```

#### 示例 2

```
输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出: false
```

#### 实现

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    var arr1 = s1.split('');
    var arr2 = s2.split('');
    var arr3 = s3.split('');
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] === arr1[0]) {
            arr1.shift();
        } else if(arr3[i] === arr2[0]) {
            arr2.shift();
        } else {
            return false;
        }
    }
    return true;
};
```
