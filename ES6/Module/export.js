// 报错
export 1;

// 报错
var m = 1;
export m;

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

//最好的写法（写法二）
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

//export default
//export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
// 正确
export var a = 1;
// 正确
var a = 1;
export default a;
// 错误
export default var a = 1;
// 正确
export default 42;
// 报错
export 42;