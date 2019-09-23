//import在编译时加载

import { firstName, lastName, year } from './profile.js';

import { lastName as surname } from './profile.js';

//不允许在加载模块的脚本里面，改写接口
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;

//区别
import {a} from './xxx.js'
a.foo = 'hello'; // 合法操作

//下面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。
foo();
import { foo } from 'my_module';

//import语句会执行所加载的模块
import 'lodash';

//CommonJS 模块的require命令，ES6 模块的import命令
//import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';