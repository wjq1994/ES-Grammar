### Inheritance

-------------
#### 参考链接
###### [mdn 继承](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
###### [Javascript继承机制的设计思想 阮一峰](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
###### [Javascript面向对象编程（一）:封装](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
###### [Javascript面向对象编程（二）:构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
###### [Javascript面向对象编程（三）:非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)

-------------

#### 关键词
构造函数、原型对象

-------------
> ##### 继承的本质
> 当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

> ##### 构造函数绑定
> 利用call函数，将父对象的构造函数绑定在子对象上。其中构造函数就是
> 
```javascript
	function Animal(species) {
		this.species = "动物";
	}
	function Cat(name, color) {
		Animal.call(this);
		this.name = name;
		this.color = color;
	}
	var cat1 = new Cat("大毛", "黄色");
	cat1.species = "猫"
	console.log(cat1.species); // 猫
	var animal = new Animal();
	console.log(animal.species); // 动物
```

> ##### prototype模式
> 使用prototype属性
> 
```javascript
	function Animal(species) {
		this.species = "动物";
	}
	function Cat(name, color) {
		this.name = name;
		this.color = color;
	}
	//Cat的prototype对象指向一个Animal的实例。它相当于完全删除了prototype 对象原先的值，然后赋予一个新值
	Cat.prototype = new Animal();
	//任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。
	Cat.prototype.constructor = Cat;
	var cat1 = new Cat("大毛", "黄色");
```
