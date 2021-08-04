// 基本类型
let bool: boolean = true
let num: number = 666
let str: string = "foo"
let num2 = 777

// 数组类型
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["f", "o", "o"]
let anotherNumArr: Array<number> = [1, 3, 5]
// 如果想在一个数组中输入不同类型的话，可以使用联合类型
let unionArr: Array<string | number | boolean> = [6, "p", "a", true]

// 元组类型
// 是一种特殊的数组 限定了数组元素的个数和类型
let tuple: [number, string] = [-6 + 6, "-6" + 2]
// 元组会有越界问题，即可以通过数组方法插入元素，但不能访问
tuple.push(999)
// tuple[2] 报错

// 函数类型
let fn = (x: number, y: number): string => String(x + y + 190)
let compute: (x: number, y: boolean) => number // 这是一个函数类型
compute = (arg1, arg2) => 1 + 1 // 这是具体的函数实现
console.log(compute(2, false)) // 函数调用

// 对象类型
let obj: { x: number; y: boolean } = { x: 1, y: true }
obj.x = 4
obj.y = false

// symbol类型
let symbol1: symbol = Symbol()
let symbol2 = Symbol()

// null 和 undefined
// ts官方认为null和undefined是所有类型的子类型
// 需要设置 strictNullChecks 为 false
let un: undefined = undefined
let nu: null = null
num = un

// void类型
// void在js中是一个操作符 void 0 返回undefined值  undefined不是一个保留字可以被覆盖
// void在ts中表示返回void
let noReturn = (): void => {}

// any类型
let x
x = 1
x = true
x = "lyj"

// never类型
// 永远不会有返回值
let error = ():never => {
  throw new Error("error")
}
let endless = () => {
  while (true) {}
}
