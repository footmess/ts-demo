// 交叉类型和联合类型

// 交叉类型是将多个类型合并为一个类型 新的类型将具有所有特性 适合对象混入的场景
// 取并集
// 使用&符连接
interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型指声明的类型不确定 可以为多个类型中的一个
let unionA: number | string = 222;
// 由此衍生出的字面量类型
let unionB: "a" | "b" | "c" = "c";
// 对象的联合类型
// 取交集
class UnionDog implements DogInterface {
  run() {}
  eat() {}
}
class UnionCat implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new UnionDog() : new UnionCat();
  pet.eat();
  return pet;
}

// 可辨识的联合类型
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  r: number;
}
// 假设新加了一个Circle类型
// 要么通过函数返回值约束
// 要么通过never来约束
type Shape = Square | Rectangle | Circle;
function getArea(s: Shape) {
  switch (s.kind) {
    // 根据不同的类型创建不同的类型保护区块 类型保护函数
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.r ** 2;
    // 这里函数的作用是检查s是否为never类型
    // 如果是则说明前面的分支都覆盖了，这个分支永远不会走到
    // 否则说明前面的分支有遗漏
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
