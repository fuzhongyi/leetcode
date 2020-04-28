# 反转字符串中的元音字母

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

#### 示例 1

```
输入: "hello"
输出: "holle
```

#### 示例 2

```
输入: "leetcode"
输出: "leotcede"
```

**说明:**
元音字母不包含字母"y"。

#### 实现

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = s.split('');
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        if(!isVowel(arr[start])){
            start++;
        } else if(!isVowel(arr[end])){
            end--;
        } else {
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr.join('');
};

function isVowel(chat){
    return 'aeiou'.indexOf(chat.toLowerCase()) !== -1;
}
```
