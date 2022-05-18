//Постраюсь собрать в этом файле, всю возможную информацию о языке JavaScript, с примерами, описанием, комментариями. 
//Пожелаю себе удачи
//P.S Где получиться буду писать комментарии на англиском/ write comments in English
//--------------------------------------------------------------------------------------------------------------------
//переменные и типы данных в JavaScript (1)
//--------------------------------------------------------------------------------------------------------------------

let number = 75; //Number   (число)
let bigint = 424234234234n; //BigInt (Большое целое число)
let str = 'Some string'; //String (Строка)
let isChecked = false; //Boolean(булевые True/false)
let item = null; //null //(Он используется, когда вы хотите явно указать, что на данном этапе у переменной нет значения, т.е. оно отсутствует.)
let coord = {x: 34, y: 24 }; //object //Объект – это набор свойств «имя: значение». Имена часто также называют ключами.
let email = undefined; //undefined //Такое значение подразумевает, что значение у той или иной переменной нет, т.е. оно не определено.
let id = Symbol('id'); //symbol


//JavaScript является языком с Динамической типизацией. Это означает, что при объявлении переменной ей не нужно указывать тип данных, который она может принимать. Вы должны просто задекларировать переменную с помощью ключевого слова let или const.
let output = 'успех'; //str
output = 28; //num
output = true; //Boolean

//--------------------------------------------------------------------------------------------------------------------
//Операторы (2)
//--------------------------------------------------------------------------------------------------------------------
// Математические
8 + 4;  // 12 (результат сложения)
8 - 4;  // 4  (результат вычитания)
8 * 4;  // 32 (результат умножения)
8 / 4;  // 2  (результат деления)
8 % 4;  // 0  (результат вычисления остатка от деления)
2 ** 3; // 8  (результат возведения числа 2 в степень 3)
++7;    // 8  (увеличение числа 7 на 1)
--8;    // 7  (уменьшение числа 8 на 1)
100 % 3; // 1 Оператор процент (%) вычисляет остаток от деления первого операнда на второй

//Cравнения 
// СРАВНЕНИЕ ЧИСЕЛ
5 > 10;        // false
5 === 2 + 3;   // true
7 < 2 * 3;     // false
4 <= 4;        // true
+0 === -0;     // true
// СРАВНЕНИЕ БУЛЕВЫХ ЗНАЧЕНИЙ
true > false;  // true
true == false; // false
// РАВЕНСТВО null и undefined
null == undefined; // true (особенность языка)

//Логические операторы

//Цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.
alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)


// && (И) возвращает первое ложное значение. Или последнее, если ничего не найдено.
//Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


alert( 1 && 2 && 3 ); // 3

// ! (НЕ) Оператор принимает один аргумент и выполняет следующие действия:

//1Сначала приводит аргумент к логическому типу true/false.
//2Затем возвращает противоположное значение.
alert( !true ); // false
alert( !0 ); // true


//--------------------------------------------------------------------------------------------------------------------
//Работа с числами в JavaScript (3)
//--------------------------------------------------------------------------------------------------------------------
//Желательно убедиться что указанное значение является числом:
value = 20;
if (Number.isInteger(value)) {
    if (isEven(value)) {
        console.log('Число' + value.toString() + ' - четное');
    }
}

//Проверить является ли число чётным или нечётным можно посредством следующих функций:
// Функция для проверки числа на чётность
function isEven(n) {
    return n % 2 == 0;
}

// Функция для проверки числа на нечётность
function isOdd(n) {
    return Math.abs(n % 2) == 1;
}


//Простые числа в JS
//Пример в котором выведем простые числа от 2 до 100 
//Фукция, которая проверяет ялвляется ли число простым 
function isPrime(value) {
    if (isNaN(value) || !isFinite(value) || value%1 || value < 2) 
    return false;
    var max = Math.floor(Math.sqrt(value));
    for (var i = 2; i <= max; i++ ) {
        if (value%i == 0) {
            return false;
        }
    }
    return true;
}

// создать массив, который будет содержать простые числа от 2 до 100
var primaryNumber = [];
for (var i = 2; i <= 100; i++){
    if(isPrime(i))
    primaryNumber.push(i);
}

// вывести в консоль простые числа от 2 до 100
console.log(primaryNumber);



//Основные математические операции
//В JavaScript существуют следующие математические операторы: + (сложение), - (вычитание), * (умножение), / (деление), % (остаток от деления), ++ (увелить значение на 1), -- (уменьшить значение на 1).

6+3 //9
6-3 //3
6*3 //18
6/3 //2
6%3 //0, т.е. 6:3=2 => 6-3*2 => ост(0)
5%2 //1, т.е. 5:2=2(.5) => 5-2*2 => ост(1)
7.3%2 //1.3, т.е. 7.3:2=3(.65) => 7.3-2*3 => ост(1.3)
//знак результата операции % равен знаку первого значения
-9%2.5 //-1.5, т.е. 9:2.5=3(.6) => 9-2.5*3 => ост(1.5)
-9%-2.5 //-1.5, т.е. 9:2.5=3(.6) => 9-2.5*3 => ост(1.5)
-2%5 //-2, т.е. 2:5=0(.4) => 2-5*0 => ост(2)
x = 3;
console.log(x++); //выводит 3, у уже потом устанавливает 4
console.log(x); //4
x = 3;
console.log(++x); //устанавливает 4 и выводит
x = 5;
console.log(x--); //выводит 5, у уже потом устанавливает 4
console.log(x); //4
x = 5;
console.log(--x); //устанавливает 4 и выводит 
//Кроме этого в JavaScript есть комбинированные операторы: x+=y (x=x+y), x-=y (x=x-y), x*=y (x=x*y), x/=y (x=x/y), x%=y (x=x%y).
x = 3;
y = 6;
x+=y;
console.log(x); //9
x = 3;
y = 6;
x-=y;
console.log(x); //-3
x = 3;
y = 6;
x*=y;
console.log(x); //18
x = 3;
y = 6;
x/=y;
console.log(x); //0.5
x = 3;
y = 6;
x%=y;
console.log(x); //3

//--------------------------------------------------------------------------------------------------------------------
//Условные и логические операторы (4)
//--------------------------------------------------------------------------------------------------------------------
//Оператор else if... (несколько условий)
if (условие1) {
    //инструкции 1
  } else if (условие2) {
    //инструкции 2
  } else if (условие3) {
    //инструкции 3
  //...
  } else if (условиеN) {
    //инструкции N
  } else {
    //инструкции, которые будут выполнены, если ни одно из условий не равно true или не приведёно к этом значению 
  }





//Тернарный оператор – оператор JavaScript, который можно использовать, когда необходимо в зависимости от условия выполнить одно из двух заданных выражений.

//Синтаксис: условие ? выражение1 : выражение2

var dayNumber = new Date().getDay();

day =
  (dayNumber === 0) ? 'Воскресенье' :
    (dayNumber === 1) ? 'Понедельник' :
      (dayNumber === 2) ? 'Вторник' :
        (dayNumber === 3) ? 'Среда' :
          (dayNumber === 4) ? 'Четверг' :
            (dayNumber === 5) ? 'Пятница' :
              (dayNumber === 6) ? 'Суббота' : 'Неизвестный день недели';

console.log('Сегодня ' + day.toLowerCase() + '.');


//Оператор switch

var 
  countCandyBoys = 1,
  countCandyGirls = 2,
  message;
switch (countCandyBoys + countCandyGirls) {
  case 1: 
    message = 'Одна конфета';
    break;
  case 2:
  case 3:
    message = 'Две или три конфеты';
    break;
  case 4:
    message = 'Четыре конфеты';
    break;
  default:
    message = 'Не одна, не две, не три и не четыре конфеты';
}
// выведем сообщение в консоль
console.log(message);
//В вышеприведенном примере вычисленное выражение равно 3. Следовательно, будет выполнены инструкции message = 'Две или три конфеты' и break. Инструкция break прервёт дальнейшее выполнение оператора switch и передаст управление инструкции, идущей после него, т.е. console.log(message). Она выведет в консоль сообщение «Две или три конфеты».


