// 条件类型
// 形式如下 T extends U ? X : Y
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

let T1: TypeName<string>;
let T2: TypeName<string[]>;

// 分布式条件类型
// 假设T是一种联合类型 结果为多个条件类型的联合类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
let T3: TypeName<string | boolean>;

// 利用这个可以实现类型的过滤
type Diff<T, U> = T extends U ? never : T;
let T4: Diff<"name" | "age" | "hobby", "name" | "age" | "job">;
// 拆解为 多个条件类型的联合类型
// (Diff<"name","name" | "age" | "job">) | (Diff<"age","name" | "age" | "job">) | (Diff<"hobby","name" | "age" | "job">)
// never | never | "hobby"
// "hobby"

// 利用Diff过滤掉undefined和null
type NotNull<T> = Diff<T, undefined | null>;
let T5: NotNull<string | boolean | number | null | undefined>;

// 以上类型TS已经帮我们实现了
// Diff对应Exclude<T,U>   -- 从T中剔除可以赋值给U的类型
// NotNull对应NonNullable<T>  -- 从T中剔除null和undefined
// 此外还有 Extract<T,U>  --提取T中可以赋值给U的类型
// ReturnType<T>   -- 获取函数返回值类型
// InstanceType<T>   -- 获取构造函数类型的实例类型
type T6 = Extract<"a" | "b" | "c", "a" | "d">;

// ReturnType实现如下
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// 这里的infer表示延迟推断 后面的R表示推断出的类型
type T7 = ReturnType<() => number>;
