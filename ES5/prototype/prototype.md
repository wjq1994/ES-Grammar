### prototype

-------------
#### 参考链接
###### [mdn constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
###### [一张图理解JS的原型（prototype、_proto_、constructor的三角关系）](https://juejin.im/post/5b729c24f265da280f3ad010)
-------------

#### 关键词 
构造函数、实例对象、原型对象、prototype、constructor、```_proto_```

-------------

> #### 四个总结
> 1. javascript只有一种结构：```对象```，万物皆对象
> 2. javascript并```没有类```的概念
> 3. 有一种机制，将所有对象联系起来，```原型链```
> 4. ```确定对象，对象对应的构造函数，构造函数对应的原型对象```

> #### 常用概念
> ```构造函数```：用来初始化新创建的对象的函数是构造函数。在例子中，Tree()函数是构造函数。
> 
> ```实例对象```：通过构造函数的new操作创建的对象是实例对象。可以用一个构造函数，构造多个实例对象。
> 
> ```原型对象及prototype```：构造函数有一个prototype属性，指向实例对象的原型对象。通过同一个构造函数实例化的多个对象具有相同的原型对象。经常使用原型对象来实现继承。
> 
> ```constructor```：原型对象有一个constructor属性，指向该原型对象对应的构造函数。由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数。
> 
> ```_proto_```：实例对象有一个proto属性，指向该实例对象对应的原型对象。
```javascript
//构造函数 Tree()
function Tree(name) {
   this.name = name;
}
//实例对象 theTree
var theTree = new Tree("Redwood");
//原型对象
console.log( "Tree.prototype: " + Tree.prototype);
//实例对象引用constructor原理，通过theTree的_proto_属性指向该实例对象对应的原型对象
console.log( "theTree.constructor: " + theTree.constructor);
//实例对象的_proto_
console.log( "theTree._proto_: " + theTree._proto_);

```


> #### prototype
> 每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。
> 
> 每个对象都有 ```__proto__``` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 _proto_ 来访问。
> 
> 对象可以通过 ```__proto__``` 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链。

 ```javascript
//构造函数
function Tree(name) {
   this.name = name;
}
//
var theTree = new Tree("Redwood");
console.log( "theTree.constructor is " + theTree.constructor.name );
```

> #### constructor
> 原型对象有一个constructor属性，指向该原型对象对应的构造函数。由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数。
> 
> theTree的原型对象为Tree.prototype，theTree可以通过 ```__proto__```来寻找不属于theTree的属性constructor
> 
> 任何对象都有 ```__proto__``` 属性，指向了创建该对象的构造函数的原型
```javascript
//构造函数
function Tree(name) {
   this.name = name;
}
//原型对象
var theTree = new Tree("Redwood");
console.log( "theTree.constructor is " + theTree.constructor ); //指向Tree
console.log(theTree.constructor === Tree); //原型对象有的constructor属性，指向该原型对象对应的构造函数
console.log(theTree.__proto__ === Tree.prototype); //原型对象有的__proto__属性，指向该构造函数的原型对象
```

> #### 函数和对象的关系
> ##### 函数
> 函数(Function也是函数)是new Function的结果，所以函数可以作为实例对象，其构造函数是Function()，原型对象是Function.prototype。
>
> 分析：确定对象，对象对应的构造函数，构造函数对应的原型对象
```javascript
	//构造函数1
	function Tree(name) {
	   this.name = name;
	}
	//构造函数2
	var Tree2 =  new Function('name','this.name = name;')
	//原型对象
	console.log("Tree.constructor is " + Tree.constructor); //指向Tree对象对应的构造函数Function
	console.log(Tree.constructor === Function); //
	console.log(Tree.__proto__ === Function.prototype); //Tree对象有__proto__属性，指向Tree的构造函数Function的原型对象
```
> ##### 对象
> 对象(函数也是对象)是new Object的结果，所以对象可以作为实例对象，其构造函数是Object()，原型对象是Object.prototype。
>
> 分析：确定对象，对象对应的构造函数，构造函数对应的原型对象
```javascript
	//构造函数1
	function Tree(name) {
	   this.name = name;
	}
	//构造函数2
	var Tree2 =  new Function('name','this.name = name;')
	//原型对象
	console.log("Tree.constructor is " + Tree.constructor); //指向Tree对象对应的构造函数Function
	console.log(Tree.constructor === Function); //
	console.log(Tree.__proto__ === Function.prototype); //Tree对象有__proto__属性，指向Tree的构造函数Function的原型对象
```

> ##### Object.prototype的原型对象是null。

> #### 原型结构图
[原型结构图](https://github.com/wjq1994/Technical-Documents/blob/master/prototype/prototype.png)
