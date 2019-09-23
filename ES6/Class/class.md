# class基本用法
1. 类的实质

类的数据类型就是函数，类本身就指向构造函数。
```javascript
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

2. 类的构造方法

类的所有方法都定义在类的prototype属性上面

```javascript
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```

3. 类的使用

```javascript
class Bar {
  doStuff() {
    console.log('stuff');
  }
}
var b = new Bar();
b.doStuff() // "stuff"
```

4. 类的内部所有定义的方法，都是不可枚举的(这一点与 ES5 的行为不一致。)

```javascript
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}
Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

ES5
```javascript
var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

5. constructor 方法

```javascript
//constructor方法是类的默认方法
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```

constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

```javascript
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo
// false
```