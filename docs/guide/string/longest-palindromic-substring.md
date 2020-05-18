# 最长回文子串

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

#### 示例 1

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

#### 示例 2

```
输入: "cbbd"
输出: "bb"
```

#### 实现

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    var centerExpend = function(left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
    var palindrome = '';
    for (var i = 0; i < s.length; i++) {
        var palindrome1 = centerExpend(i, i);
        var palindrome2 = centerExpend(i, i + 1);
        if (palindrome1.length > palindrome.length) {
            palindrome = palindrome1;
        }
        if (palindrome2.length > palindrome.length) {
            palindrome = palindrome2;
        }
    }
    return palindrome;
};
```
