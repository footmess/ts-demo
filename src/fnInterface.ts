// 函数类型接口

// 可以通过一个变量来声明一个函数类型
let add: (x: number, y: boolean) => number;

// 此外通过接口也可以实现
// 接口名称
interface Add1 {
  // (参数类型):返回值
  //   (x: number, y: boolean): number;
  (z: number): string;
}
let myadd: Add1 = (z: number) => "2" + z;
console.log(myadd(4));

// 此外还可以使用类型别名type来定义函数
// 这里函数别名就是为函数类型取一个名字
type Add2 = (x: number, y: boolean) => number;
let youradd: Add2 = (a, b) => a + Number(b);

// 混合类型接口 既可以定义函数，也可以像对象一样定义属性和方法
// 一般在使用第三方库时需要使用
interface Lib {
  version: string;
  showVersion(): void;
  (): void;
}
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0.0";
  lib.showVersion = () => {};
  return lib;
}
let lib1 = getLib();
let lib2 = getLib();
lib1()
lib1.showVersion();
