### Object.defineProperty

#### 属性描述符

> ##### 数据描述符
```javascript
	// 在对象中添加一个属性与数据描述符的示例
	// writeObj 描述符
	var writeObj = {
		//该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
		value: 30,
		//当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
		writable: true,
		enumerable: false, //默认false 不可枚举
		configurable: false //默认false 不可配置 不能被delete
	}
	Object.defineProperty(o, "a", writeObj);
```

> ##### 存取描述符
```javascript
	var bValue;
	// 在对象中添加一个属性与存取描述符的示例
	Object.defineProperty(o, "b", {
	//默认为 undefined
	  get : function(){
		return bValue;
	  },
	//默认为 undefined
	  set : function(newValue){
		bValue = newValue;
	  },
	  enumerable : true,
	  configurable : true
	});
```

#### 描述符的属性

> ##### writable
```javascript
	var bValue;
	Object.defineProperty(o, "a", {
		value: 30,
		writable: false
	});
	o.a = 29;
	console.log(o.a); //30
```

> ##### Enumerable
> enumerable定义了对象的属性是否可以在 [for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环和 [Object.keys()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 中被枚举。
```javascript
	var o = {};
	Object.defineProperty(o, "a", {
		value: 30,
		writable: true,
		enumerable: true
	});
	Object.defineProperty(o, "b", {
		value: 30,
		writable: true,
		enumerable: false
	});
	Object.defineProperty(o, "c", {
		value: 30,
		writable: true,
		enumerable: false
	});
	for(let i in o) {
		console.log(i) //a
	}
	Object.keys(o); // [a]
```

> ##### configurable
> configurable特性表示对象的属性是否可以被[删除](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)，以及除value和writable特性外的其他特性是否可以被修改。
> 
```javascript
	var o = {};
	Object.defineProperty(o, "a", { value: 3,  configurable : false, writable: false} );
	//以下两种方式赋值 不一样
	Object.defineProperty(o, "a", { value: 4} );
	o.a = 5;
	console.log(o);
```

> ##### 一般的Setters 和 Getters
> configurable特性表示对象的属性是否可以被[删除](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)，以及除value和writable特性外的其他特性是否可以被修改。
> 
```javascript
	function Archiver() {
	  var temperature = null;
	  var archive = [];
	  Object.defineProperty(this, 'temperature', {
		get: function() {
		  console.log('get!');
		  return temperature;
		},
		set: function(value) {
		  temperature = value;
		  archive.push({ val: temperature });
		}
	  });
	  this.getArchive = function() { return archive; };
	}
	var arc = new Archiver();
	arc.temperature; // 'get!'
	arc.temperature = 11;
	arc.temperature = 13;
	arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```