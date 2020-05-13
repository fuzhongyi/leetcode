# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

#### 示例 1

```
输入: ["flower","flow","flight"]
输出: "fl"
```

#### 示例 2

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 `a-z` 。

#### 实现

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 ) return "";
    var [first, ...rest] = strs;
    var ans = '';
    for (var i = 0; i < first.length; i++) {
        var flag = rest.every(v => v[i] === first.charAt(i));
        if (flag) ans += first.charAt(i);
        else break;
    }
    return ans;
};
```
