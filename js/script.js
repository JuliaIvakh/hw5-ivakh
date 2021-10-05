// Task 1
let user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user);

//Task 2
// const user = {
//   name: "John",
// }; // это будет работать? Будет, потому, что const защищает от изменений только саму переменную user. Объект объявленный через const может быть изменен.
// user.name = "Pete";
// console.log(user);

//Task 3
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);
