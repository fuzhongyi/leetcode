# 验证回文字符串 Ⅱ

给定一个非空字符串 `s`，**最多**删除一个字符。判断是否能成为回文字符串。

**说明：** 本题中，我们将空字符串定义为有效的回文串。

#### 示例 1

```
输入: "aba"
输出: True
```

#### 示例 2

```
输入: "abca"
输出: True
解释: 你可以删除c字符。
```

**注意:**

1. 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

#### 实现

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  var n = s.length;
  if (n < 2) {
    return s;
  }
  var isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left++] != s[right--]) {
        return false;
      }
    }
    return true;
  };
  for (var i = 0; i < n; i++) {
    if (s[i] != s[n - i - 1]) {
      return isPalindrome(i + 1, n - i - 1) || isPalindrome(i, n - 1 - i - 1);
    }
  }
  return true;
};
```
