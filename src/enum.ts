// 枚举
// 适合程序中那些硬编码的常量
// 枚举成员只读 不能修改

// 数字枚举
// 第一个为0，可以设置起始值
enum Role {
  Reporter,
  Developer,
  Maintainer = 5,
  Owner,
}
console.log(Role[0], Role.Owner); // Reporter 3
// 数字枚举编译后 使用反向映射
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 0] = "Reporter";
//     Role[Role["Developer"] = 1] = "Developer";
//     Role[Role["Maintainer"] = 5] = "Maintainer";
//     Role[Role["Owner"] = 6] = "Owner";
// })(Role || (Role = {}));

// 字符串枚举
enum Message {
  Success = "成功",
  Fail = "失败",
}
// 字符串枚举编译后 不会使用反向映射
// var Message;
// (function (Message) {
//     Message["Success"] = "\u6210\u529F";
//     Message["Fail"] = "\u5931\u8D25";
// })(Message || (Message = {}));

// 异构枚举 会引起混淆 不推荐使用
enum Answer {
  N,
  yes = "yes",
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
// 在编译阶段被移除 编译后没有任何代码
const month = [Month.Jan, Month.Feb, Month.Mar, 666];
// var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */, 666];
