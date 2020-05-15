# 字符串的排列

给定两个字符串 **s1** 和 **s2**，写一个函数来判断 **s2** 是否包含 **s1** 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

#### 示例1

```
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```

#### 示例2

```
输入: s1= "ab" s2 = "eidboaoo"
输出: False
```

**注意：**

1. 输入的字符串只包含小写字母
2. 两个字符串的长度都在 [1, 10,000] 之间

#### 实现 1 (超时)

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var s = s1.split('');
    for (var i = 0; i < s2.length; i++) {
        var index = s.indexOf(s2.charAt(i));
        if (index !== -1) {
            s.splice(index, 1);
        } else {
            if (s.length !== s1.length) {
                i -= s1.length - s.length;
            }
            s = s1.split('');
        }
        if (s.length === 0) return true;
    }
    return false;
};
```

#### 实现 2

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    // 创建一个字典
    var dictionary = new Array(26).fill(0);
    // 遍历 s1 上的字符，在字典上进行记录
    for(var i = 0; i < s1.length; i++) {
        var code = s1.charCodeAt(i) - 97;
        dictionary[code]++;
    }
    // 之后统计 s2 上的字符，每当出现后在字典上减少一个
    for(var start = 0, end = 0; end < s2.length; end++) {
        var code = s2.charCodeAt(end) - 97;
        dictionary[code]--;
        // 当出现了 s1 中不存在的字符或者数量超过 s1 中字符量，向前移动
        while (dictionary[code] < 0) {
            dictionary[s2.charCodeAt(start) - 97]++;
            start++;
        }
        // 如果此时出现全部符合同时长度与 s1 相同的子串，则查找成功
        if (end - start + 1 === s1.length) return true;
    }
    return false;
}
```
