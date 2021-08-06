// ts类完全继承es类

// 类成员的属性都是实例属性，类成员的方法都是定义在类的原型属性prototype上面
class Dog {
  constructor(x: string) {
    this.name = x;
  }
  name: string;
  age: number = 18;
  hobby?: string;
  readonly sex: string = "female";
  bark() {
    this.age++;
    console.log(this.name);
  }
  static show() {
    console.log(this.name);
  }
}
let dog = new Dog("keji");
console.log(dog); // Dog {age: 18, sex: "female", name: "keji"}
dog.bark();
console.log(dog); // Dog {age: 19, sex: "female", name: "keji"}

// 类的继承
// super关键字既可以当做函数使用，也可以当做对象使用
// 当做函数时指代父类的构造函数  此时只能在子类的构造函数中调用
// 当做对象时，在普通方法中指向父类的原型对象；在静态方法中，指向父类
class Husky extends Dog {
  color: string;
  constructor(name: string, color: string) {
    super(name); // 这里super()相当于Dog.prototype.constructor.call(this) 返回的是子类实例
    this.color = color;
  }
  m() {
    super.bark();
  }
  static m() {
    super.show();
  }
}
let husky = new Husky("husky", "red");
console.log(husky); // Husky {age: 18, sex: "female", name: "husky", color: "red"}
husky.m(); // 输出husky 这里super.bark()相当于Dog.prototype.bark.call(this)  方法内部的this指向当前子类实例
console.log(husky); // Husky {age: 19, sex: "female", name: "husky", color: "red"}
Husky.m(); // 输出Husky 这里super.show()相当于Dog.show.call(this)  方法内部的this指向当前子类 所以输出类名

// 类的修饰符
// public 公有成员  默认都是public
// private 私有成员 只能在类内部调用，不能在实例上调用，也不能在子类中调用 如果给构造函数加上private则表明该类不能被实例化也不能被继承
// protected 受保护成员 只能在类内部或者子类中访问，不能在实例上访问  如果给构造函数加上protected则表明该类不能被实例化只能被继承 相当于声明了一个基类
// 构造函数的参数也可以添加修饰符  这样的作用就是可以直接声明为实例属性，可以省略在类中的定义
// readonly 只读属性
// static 静态成员  只能通过类名来调用，可以被继承，不能通过实例访问
