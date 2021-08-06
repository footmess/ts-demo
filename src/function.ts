// 有4中方式来定义函数

// 1.function函数声明 需要明确指出参数的类型 而返回值可以由ts类型推断出
function add1(x: number, y: number) {
  return x + y + "2";
}
add1(1, 2);

// 2.通过一个变量来定义一个函数类型
let Add2: (x: number, y: number) => string;

// 3.通过类型别名来定义一个函数类型
type Add3 = (x: number, y: number) => string;

// 4.通过接口定义函数类型
interface Add4 {
  (x: number, y: number): string;
}

// 后三种只是函数类型的定义，不是具体的实现，也就是不能直接调用，真正调用时需要书写函数体
// 实现
let add3: Add3 = (x, y) => {
  // dosomething
  return x + y + "1";
};

// 在ts中 形参和实参必须一一对应

function add5(x: number, y?: number) {
  return y ? x + y : y;
}

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
add6(1, undefined, 2); // 4 必须显式传入undefined才能使用参数默认值

// 参数个数不确定 使用rest参数
function add7(x: number, ...rest: Array<number>) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5); // 15

// ts函数重载
// 需要先定义同名的各种函数类型声明 然后在最宽泛的类型中实现函数
// 最优先匹配的写在前面
function add8(...rest: number[]): number;
function add8(...res: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add8(1,2,3))      // 6
console.log(add8('a','b','c'))      // abc
