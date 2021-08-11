// 映射类型
// 从一个已知的类型创建一个新的类型
// 通常是预定义号的泛型接口

interface Person {
  name: string;
  age: number;
  hobby: string;
}
// 比如让旧类型的每个属性都变为只读
// 可以通过ts内置的映射类型实现
type ReadonlyPerson = Readonly<Person>;
// 这里Readonly具体实现如下
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// 如果让旧类型的每个属性变为可选
// 可以使用Partial内置类型
type PersonPartial = Partial<Person>;

// 如果想抽取旧类型的子集
// 可以使用Pick类型
type PickObj = Pick<Person, "name" | "age">;

// 以上的类型都是同态的 只会作用于旧类型 不会引入新的属性

// 这个是非同态类型
type RecordPerson = Record<"boy" | "girl", Person>;
let myperson: RecordPerson = {
  boy: { name: "a", age: 18, hobby: "h" },
  girl: { name: "a", age: 18, hobby: "h" },
};
