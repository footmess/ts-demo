// 接口

// 对象类型接口
interface List {
  id: number;
  name: string;
  // 字符串索引签名
  [x: string]: any;
  // 可选属性 通过在类型注解前加个?实现
  age?: number;
  // 只读属性 不能修改 通过在属性前加readonly实现
  readonly hobby?: string;
}

interface Result {
  data: Array<List>;
}

function render(result: Result) {
  result.data.forEach((item) => {
    console.log(item.id, item.name);
    // item.hobby = '123'   // 报错
  });
}

let result = {
  data: [
    { id: 1, name: "tom", job: "cat", kl: 222, age: 18 },
    { id: 2, name: "jerry", hobby: "mouse" },
  ],
};
// ts在对接口进行类型检查时，采用"鸭式辨形法"或者"结构性子类型化"，就是说只要长得像就可以(包含接口声明所有属性即可)
render(result);

// 如果直接传入对象字面量的话，ts就会对额外的字段进行检查
// render({
//   data: [
//     { id: 1, name: "tom", job: "cat" },
//     { id: 2, name: "jerry" },
//   ],
// })

// 绕过上述检查的方法有三种
// 1.将对象字面量赋值给一个变量
// 2.使用类型断言(程序员确定是这个数据类型)  {data: [{ id: 1, name: "tom", job: "cat" },{ id: 2, name: "jerry" }]} as Result
// 3.使用字符串索引签名

// 可索引类型接口
// 不确定接口内的属性个数
// 可索引接口可以用数字或者字符串索引
// 需要注意的是声明可索引属性后 其他声明的属性值类型必须是可索引值类型的子类型 确保兼容
interface StringArray {
  [index: number]: string; // 这里表示用任意的数字索引StringArray都会得到string值 相当于声明了一个字符串数组Array<string>
}
let chars: StringArray = ["f", "o", "o"];

interface Names {
  [str: string]: string; // 这里表示用任意的字符串索引Names都会得到string值
  y: null;
  [index: number]: string;
}
