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