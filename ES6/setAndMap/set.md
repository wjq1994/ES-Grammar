### set

-------------
#### 参考链接
###### [mdn constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
-------------

#### 关键词 

-------------

#### 简述
```
 Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
```

```javascript
	// 例一
	const set = new Set([1, 2, 3, 4, 4]);
	//一行代码搞定去重
	[...set]
	// [1, 2, 3, 4]
```

#### 用法

##### 构造方法

1. 利用add方法

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

2. 接受一个参数（数组）

```javascript
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
```

3. 接受一个参数（具有iterable接口的其他数据结构）

```javascript
const set = new Set(document.querySelectorAll('div'));
```


##### 特殊用法

1. 去除数组的重复成员

```javascript
[...new Set([1,2,2,3,4,5,6,6,6])]
```

2. Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身

```javascript
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
```

3. Set 加入空对象（两个空对象不相等）

```javascript
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

#### 实例的属性和方法



1. 操作方法

Set.prototype.add(value)

Set.prototype.delete(value)

Set.prototype.has(value)

Set.prototype.clear()


```javascript
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

2. 遍历方法

```
Set.prototype.keys()：返回键名的遍历器
Set.prototype.values()：返回键值的遍历器
Set.prototype.entries()：返回键值对的遍历器
Set.prototype.forEach()：使用回调函数遍历每个成员
```

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

3. map和filter

```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

4. 并集（Union）、交集（Intersect）和差集（Difference）

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

