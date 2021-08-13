export let moduleB = "123";
let obj = { name: "tom", age: 18 };
function add(x, y) {
  return x + y;
}
export { obj, add };
export default function (a, b, c, ...rest) {
  console.log({ rest });
  return a + b + c;
}
