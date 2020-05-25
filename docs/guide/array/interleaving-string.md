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
  var dp = new Array(s1.length + 1).fill(new Array(s2.length + 1).fill(false));
  for (var i = 0; i <= s1.length; i++) {
    for (var j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) dp[i][j] = true;
      else if (i === 0) dp[i][j] = s2[j - 1] === s3[i + j - 1] && dp[i][j - 1];
      else if (j === 0) dp[i][j] = s1[i - 1] === s3[i + j - 1] && dp[i - 1][j];
      else
        dp[i][j] =
          (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) ||
          (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]);
    }
  }
  return dp[s1.length][s2.length];
};
```
