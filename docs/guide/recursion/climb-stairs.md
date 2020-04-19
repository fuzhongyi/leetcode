# 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 n 是一个正整数。

#### 示例 1

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

#### 示例 2

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

#### 实现 1

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<3) return n;
    return climbStairs(n-1) + climbStairs(n-2);
};
```

如果直接用不作处理递归求解的话，很明显是不可取的，当调用的次数太多时会导致栈溢出。

#### 实现 2

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [1, 2]
    for (var i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1]
};
```

我们可以对空间进行进一步优化，只用两个整型变量 a 和 b 来存储过程值，首先将 a+b 的值赋给 b，然后 a 赋值为原来的 b，所以应该赋值为 b-a 即可。这样就模拟了上面累加的过程，而不用存储所有的值，参见代码如下：

#### 实现 3

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1, b = 1;
    while (n-- > 0) {
        b += a;
        a = b - a;
    }
    return a;
};
```
