### Object.assign

###### [mdn链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-------------

> ##### 普通用法(<span style="color:red">拷贝</span>)
> 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
```javascript
	const obj = { a: 1 };
	const copy = Object.assign({}, obj);
	console.log(copy); // { a: 1 }
```

> ##### 深拷贝问题
> 针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。
> 
```javascript
	let obj1 = { a: 0 , b: { c: 0}}; 
	let obj2 = Object.assign({}, obj1); 
	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}} 
	obj1.a = 1; 
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}} 
	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}} 
	obj2.a = 2; 
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}} 
	console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
	obj2.b.c = 3; 
	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}} 
	console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}} 
	// Deep Clone 
	obj1 = { a: 0 , b: { c: 0}}; 
	let obj3 = JSON.parse(JSON.stringify(obj1)); 
	obj1.a = 4; 
	obj1.b.c = 4; 
	console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
```
>> ###### 分析1:源对象的属性值是一个对象的引用
```
	obj1是源对象，b是属性值，是{ c: 0}这个对象的引用
	obj2.b也是{ c: 0}这个对象的引用
```

