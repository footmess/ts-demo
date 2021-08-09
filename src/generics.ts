// 泛型
// 泛型可以和函数参数对比理解 当做另一个维度的参数 用来表示类型
// 泛型需要写在参数前 用尖括号包裹

function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<number>(2);
log("abc");

// 泛型函数类型
// 类型别名
type Log = <T>(value: T) => T;
let myLog: Log = log;

// 泛型接口
interface Log2 {
  <T>(value: T): T;
}

interface Log3<T = number> {
  // 可以约束所有接口成员 可以有默认值
  (value: T): T;
}
let myLog2: Log2 = log;
let myLog3: Log3 = log;

// 泛型类
// 类型参数不能作用于静态成员
class Log4<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}
let myLog4 = new Log4();
let myLog5 = new Log4<number>();
myLog4.run("123");
myLog5.run(666);

// 泛型约束
// 假设我们的log函数还需要打印出value的某个属性 直接打印的话会报T不存在该属性的错误
// 所以我们可以先定义一个接口(包含所需的属性) 然后让泛型继承这个接口
interface Length {
  length: number;
}
function log2<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
log2("akl"); // akl 3

// 泛型的好处
// 1.函数和类可以支持多种属性，增强程序的扩展性
// 2.不用写多条函数重载或者冗长的联合类型声明，增强代码可读性
// 3.灵活控制类型之间的约束 就像变色龙一样可以融入各种环境
