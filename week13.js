//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDay();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(1994, 4, 27);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(currentDate.getTime() + 40 * 24 * 60 * 60 * 1000);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const difference = Math.abs(futureDate.getTime() - currentDate.getTime());
const differenceDays = Math.ceil(difference / (1000 * 3600 * 24));
console.log(differenceDays);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const diff = Math.abs(currentDate.getTime() - pastDate.getTime());
const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
console.log(diffDays);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
const dayOfWeek = nextWeek.getDay();
console.log(dayOfWeek);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 4, 27);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const diffYear = futureYear - currentYear;
console.log(diffYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = "2023-06-15T08:30:00.000Z";
const numDate = new Date(Date.parse(strDate));
console.log(numDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const secDate = Date.parse(strDate);
console.log(secDate);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = "2023/06/15";
const wrongDate = Date.parse(date);
if (isNaN(wrongDate)) {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
  console.log(`Число ${number} является положительным`);
} else {
  console.log(`Число ${number} не является положительным`);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
  console.log(`Число ${number} чётное`);
} else {
  console.log(`Число ${number} нечётное`);
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
  console.log(`Число ${number} кратно 3`);
} else {
  console.log(`Число ${number} не кратно 3`);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number >= 0 && number < 10) {
  console.log(`${number} однозначное число`);
} else {
  console.log(`${number} неоднозначное число`);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number < 100) {
  console.log(`${number} двузначное число`);
} else {
  console.log(`${number} недвузначное число`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0) {
  console.log(`${number} положительное число`);
} else if (number === 0) {
  console.log(`${number} является нулём`);
} else {
  console.log(`${number} отрицательное число`);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0) {
  console.log("Число кратно 5");
} else if (number % 7 === 0) {
  console.log("Число кратно 7");
} else {
  console.log("Число не кратно ни 5, ни 7");
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
  console.log(`Число ${number} является отрицательным`);
} else if (number === 0) {
  console.log(`Число ${number} является нулём`);
} else {
  console.log(`Число ${number} не является ни отрицательным числом, ни нулём`);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 0 && number >= 100 && number < 1000) {
  console.log(`${number} является трёхзначным положительным числом`);
} else {
  console.log(`${number} не является трёхзначным положительным числом`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Воскресенье";
    break;
  case 1:
    day = "Понедельник";
    break;
  case 2:
    day = "Вторник";
    break;
  case 3:
    day = "Среда";
    break;
  case 4:
    day = "Четверг";
    break;
  case 5:
    day = "Пятница";
    break;
  case 6:
    day = "Суббота";
    break;
  default:
    day = "Неизвестный день недели";
}

console.log("Сегодня " + day.toLowerCase() + "!");

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "W";
let fullName;

switch (direction) {
  case "N":
    fullName = "Север";
    break;
  case "S":
    fullName = "Юг";
    break;
  case "E":
    fullName = "Восток";
    break;
  case "W":
    fullName = "Запад";
    break;
  default:
    fullName = "Неизвестное направление";
}

console.log(fullName.toString() + "!");
