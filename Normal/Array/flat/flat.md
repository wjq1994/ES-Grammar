## Array.flat()

```
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
```

### 语法

```
var newArray = arr.flat(depth)
```

#### 参数

depth可选，指定要提取嵌套数组的结构深度，默认值为 1。

#### 返回值

新数组

### 示例

#### 扁平化嵌套数组
```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]

//只去数组，不去对象
var arr4 = [1,2,[3,4,[5,6]],{"aa": [123,234]}]
console.log(arr.flat(Infinity))
// [1, 2, 3, 4, 5, 6, {"aa": [123,234]}]
```

#### 扁平化与空项
```javascript
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

### 替代方案

#### 使用 reduce 与 concat
```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();

// 反嵌套一层数组
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

// 或使用 ...
const flatSingle = arr => [].concat(...arr);
```

```javascript
// 使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

```javascript
// 不使用递归，使用 stack 无限反嵌套多层嵌套数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

[Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)