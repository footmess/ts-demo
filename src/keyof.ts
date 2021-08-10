// 索引类型
// 比如要从一个对象中取出某些字段组成一个数组
let keyofObj = {
  a: 1,
  b: 2,
  c: 3,
};
function getValue(obj: any, keys: string[]) {
  return keys.map((key) => obj[key]);
}
console.log(getValue(keyofObj, ["a", "b"])); // [1,2]
// 如果指定不存在的字段
console.log(getValue(keyofObj, ["d", "e"])); // [undefined,undefined]  不报错
// 如何在ts中对这种情况进行约束呢？ 需要使用索引类型

// 索引类型的查询操作符 keyof T 表示类型T的所有公共属性的字面量的联合类型
interface Obj {
  a: number;
  b: string;
}
let keyObj: Obj = { a: 1, b: "1" };
let key: keyof Obj = "b";

// 索引访问操作符 T[K]表示对象T的属性K所表示的类型
let value: Obj["a"];

// T extends U 泛型约束 通过让泛型继承某些类型实现约束

// 这里使用索引类型来改造getValue函数
function getValue2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
console.log(getValue2(keyofObj, ["d", "e"]));   //  报错
