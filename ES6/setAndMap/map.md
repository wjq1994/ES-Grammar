### Map

-------------
#### 参考链接
###### [mdn constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
-------------

#### 关键词 
迭代、forEach、NaN、可迭代对象

-------------

#### 语法

```javascript
new Map([iterable])
```
Iterable 可以是```一个数组```或者```其他 iterable 对象```，其元素或为```键值对```，或为```两个元素的数组```。 每个键值对都会添加到新的 Map。```null``` 会被当做 ```undefined```。

```javascript
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

var second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
//Iterable是一个数组，其元素为...first（键值对）和[1, 'eins']（两个元素的数组）
var merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

#### 描述

Map 对象保存键值对。```任何值```(对象或者原始值) 都可以作为```一个键或一个值```。

一个```Map对象```在```迭代时```会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的```数组```。

##### key的比较
键的比较是基于 "SameValueZero" 算法：
1. NaN 是与 NaN 相等的（虽然 NaN !== NaN）
2. 剩下所有其它的值是根据 === 运算符的结果判断是否相等。

##### 用法事例
使用 Map 对象
```javascript
var myMap = new Map();
 
var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";
 
// 添加键 可以是任何值
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");
 
myMap.size; // 3
 
// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"
 
myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
						 
myMap.get({});           // undefined, 因为keyObj !== {}，keyObj是引用
myMap.get(function() {}) // undefined, 因为keyFunc !== function () {}
```
将 NaN 作为 Map 的键
```javascript
var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
```
使用 for..of 方法迭代 Map
```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
//迭代
for(var [key,value] of myMap) {
	console.log(key + "=" +value)
}
for(var [key,value] of myMap.entries()) {
	console.log(key + "=" +value)
}

for(var key of myMap.keys()) {
	console.log(key)
}

for(var values of myMap.values()) {
	console.log(values)
}
```
将 NaN 作为 Map 的键
```javascript
var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
```
使用 forEach() 方法迭代 Map
```javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

myMap.forEach(function(value, key){
	console.log(key + "=" +value)
})
```
Map 与数组的关系
```javascript
var kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
var myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
```