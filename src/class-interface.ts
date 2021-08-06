// 类和接口的关系
// 类之间、接口之间可以继承
// 类可以实现implements接口 接口可以继承extends类

// 接口只能约束类中的公有成员 不能约束构造函数 new()
interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(public name: string) {
    this.name = name;
  }
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  run() {},
  eat() {},
  cry() {},
  name: "tom",
};

// 接口可以继承extends类
class Auto {
  state: number = 1;
  sex: string = "female";
}
interface AutoInterface extends Auto {}
// 类可以实现implements接口
class C implements AutoInterface {
  state = 4;
  sex = "2";
}
let c = new C();
// let jk: AutoInterface = {
//   state: 2,
// };
