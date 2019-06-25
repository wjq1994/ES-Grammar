### NaN

-------------
#### 参考链接
###### [mdn NaN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
-------------

#### 关键词 

-------------

#### 描述
NaN 是一个```全局对象```的```属性```。表示不是一个数字（Not-A-Number）。

#### 用法
编码中很少直接使用到，通常出现在计算中
```javascript
console.log(Math.sqrt(-1)); //NaN
console.log(parseInt("blabla")); //NaN
console.log(Number("blabla")); //NaN
```

验证是否是NaN

等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。必须使用 Number.isNaN() 或 isNaN() 函数。在执行自比较之中：NaN，也**只有NaN**，比较之中不等于它自己。
```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```