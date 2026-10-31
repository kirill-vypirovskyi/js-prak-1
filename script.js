//task 1
function task1_1() {
  let name = "Kyrylo";
  let age = 30;
  let major = "Software Engineer";

  console.log(`Student: ${name}, Age: ${age}, Major: ${major}`);
}

function task1_2() {
  let a = 10;
  let b = 5;

  console.log("a = " + a);
  console.log("b = " + b);

  let sum = a + b;
  let difference = a - b;
  let multiplication = a * b;
  let division = a / b;
  let remainder = a % b;
  let exponentiation = a ** b;

  console.log(`Сума: ${sum}`);
  console.log(`Різниця: ${difference}`);
  console.log(`Добуток: ${multiplication}`);
  console.log(`Ділення: ${division}`);
  console.log(`Залишок від ділення: ${remainder}`);
  console.log(`Степінь: ${exponentiation}`);
}

task1_1();
task1_2();

//task 2
function isInputValidNumber(input) {
  if (isNaN(input) || input === null || input.trim() === "") {
    return false;
  }

  return true;
}

function promptUserForNumber(promptText) {
  let numberFromUser = prompt(promptText);

  if (isInputValidNumber(numberFromUser)) {
    return +numberFromUser;
  }

  return promptUserForNumber("Ви ввели не число. Введіть число:");
}

function isEvenOrOdd() {
  let userInput = promptUserForNumber("Введіть число:");

  console.log(`Це ${userInput % 2 === 0 ? "парне" : "непарне"} число`);
}

function getTemperature() {
  let userInput = promptUserForNumber("Введіть температуру:");

  switch (true) {
    case userInput < 0:
      console.log("Холодно");
      break;
    case userInput >= 0 && userInput <= 15:
      console.log("Прохолодно");
      break;
    case userInput > 15 && userInput <= 25:
      console.log("Нормально");
      break;
    case userInput > 25:
      console.log("Тепло");
      break;
    default:
      console.log("Щось пішло не так.");
  }

  return;
}

isEvenOrOdd();
getTemperature();

//task 3
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

//task 4
let items = ["apple", "banana", "orange", "grape", "kiwi"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (let item of items) {
  console.log(item);
}

items.forEach(function (item) {
  console.log(item);
});

let nums = [10, 5, 22, 8, 1];

nums.sort(function (a, b) {
  return a - b;
});

console.log(`Мінімальне значення: ${nums[0]}`);
console.log(`Максимальне значення: ${nums[nums.length - 1]}`);

const sumOfNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(`Сума всіх елементів: ${sumOfNums}`);

//task 5
const square = (n) => n * n;
const isAdult = (age) => age >= 18;

console.log(`Квадрат числа 5: ${square(5)}`);
console.log(`Чи є 20-річний дорослим? ${isAdult(20) ? "Так" : "Ні"}`);

//task 6
const title = document.getElementById("title");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  title.textContent = "JavaScript is awesome!";
});
