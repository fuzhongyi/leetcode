# 最短回文串

给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

#### 示例 1

```
输入: "aacecaaa"
输出: "aaacecaaa"
```

#### 示例 2

```
输入: "abcd"
输出: "dcbabcd"
```

#### 实现

```js
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var index = 0;
    for (var i = s.length; i > 0; i--) {
        if (isPalindrome(s.substring(0, i))) {
            index = i;
            break;
        }
    }
    return s.substring(index).split('').reverse().join('') + s;  
};

function isPalindrome (s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
```
