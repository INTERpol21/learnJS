//Постраюсь собрать в этом файле, всю возможную информацию о языке JavaScript, с примерами, описанием, комментариями. 
//Пожелаю себе удачи
//P.S Где получиться буду писать комментарии на англиском/ write comments in English
//
//--------------------------------------------------------------------------------------------------------------------
//Функция – это фрагмент кода, который можно выполнить многократно в разных частях программы. Т.е. одни и те же действия много раз с разными исходными значениями.

let a = 5;
let b = 7;

function sum(a, b){
    sum = a + b;
    console.log(sum);
}

sum(a, b);//12

a = 10;
b = 4;

sum(a, b);//14 

//--------------------------------------------------------------------------------------------------------------------
//Объявление и вызов функции

//nameFn – имя функции, params – параметры
function nameFn(params){
    // тело функции
}


// объявляем функцию someName
function someName() {
    console.log('Вы вызвали функцию someName!');
  }
  // function – ключевое слово, которое означает, что мы создаём функцию
  // someName – имя функции
  // () – круглые скобки, внутри которых при необходимости описываются параметры
  // { ... } – тело функции


// объявляем функцию с двумя параметрами
function fullname(fistname, lastname){
    console.log(`${firstname} ${lastname}`);
}


// объявляем функцию someName
function someName(){
    console.log('Вы вызвали функцию someName!');
}
// вызываем функцию someName
someName();

//--------------------------------------------------------------------------------------------------------------------
//Параметры и аргументы
// userFirstName и userLastName – параметры (userFirstName будет иметь значение первого аргумента, а userLastName соответственно второго в момент вызова этой функции)
function sayWelcome(userFirstName, userLastName){
    console.log(`Добро пожаловать, ${userLastName} ${userFirstName}`);
}
    // 'Иван' и 'Иванов' – аргументы
    sayWelcome('Иван', 'Иванов'); // Добро пожаловать, Иванов Иван
    // 'Петр' и 'Петров' – аргументы
    sayWelcome('Петр', 'Петров'); // Добро пожаловать, Петров Петр


// количество аргументов не обязательно должно совпадать с количеством параметров.
function sayWelcome (userFirstName, userLastName) {
    console.log( `Добро пожаловать, ${userLastName} ${userFirstName} `);
  }
  // с одним аргументом
  sayWelcome('Иван'); // Добро пожаловать, undefined Петр
  // без передачи аргументов
  sayWelcome(); // Добро пожаловать, undefined undefined


//--------------------------------------------------------------------------------------------------------------------
//Передача значения по ссылке
// объявим переменную someUser и присвоим ей объект, состоящий из двух свойств
const someUser = {
    firstname: 'Петр',
    lastname: 'Петров'
  }
  // объявим функцию changeUserName
  function changeUserName(user) {
    // изменим значение свойства firstname на новое
    user.firstname = 'Александр';
  }
  // вызовем функцию changeUserName
  changeUserName(someUser);
  // выводим значение свойства firstname в консоль
  console.log(someUser.firstname); // Александр

//--------------------------------------------------------------------------------------------------------------------
//Локальные и внешние переменные

let a = 7;
// объявление функции sum
function sum(a) { 
    // локальная переменная функции
    let b = 8;
    console.log(a + b);
}
// вызов функции sum
sum(a);
console.log(b); //Error b is not defined 


// внешние переменные
let a = 7;
let b = 3;
function sum(){
// локальная переменная
let a = 8;
// изменение значения внешней переменной (т.к. b нет внутри функции)
b = 4;
console.log(a + b)
}
sum();//12

//Функция – это объект
//Узнать является ли переменная функцией можно с помощью typeof:
function myFunc(){
    console.log(typeof myFunc); // function
}

//Например, проверим является переменная колбэк функцией перед тем её вызвать:
function sum(num1, num2, callback){
    const result = num1 + num2;
    if (typeof callback === 'function'){
        callback(result);
    }
}
//--------------------------------------------------------------------------------------------------------------------
//Возврат значения
//Функция всегда возвращает значение, даже если мы не указываем это явно. По умолчанию она возвращает значение undefined.

// expression – выражение, результат которого будет возвращен функцией myFn
function myFn() {
    return expression;
  }


//Если return не указать, то функция всё равно возвратит значение, в данном случае undefined.
function sum(a, b){
    console.log(a + b);
}
// вызовем функцию и сохраним её результат в константу result
const result = sum(4, 3);
// выведем значение переменной result в консоль
console.log(result); // undefined


//С использованием инструкции return:
function sum(a, b){
    // вернём в качестве результата a + b
    return a + b;
}
// вызовем функцию и сохраним её результат в константу result
const result = sum(4, 3);
// выведем значение переменной result в консоль
console.log(result);// 7


//Инструкции, расположенные после return никогда не выполняются:
function sum(a,b){
    // вернём в качестве результата a + b
    return a + b;  
      // код, расположенный после return никогда не выполнится
    console.log('это сообщение не будет выведено в консоль');
}

sum(3,90)
//В этом примере, функция sum возвращает число 94 и прекращает выполнение дальнейших инструкций после return. А так как работа функции закончилась, то сообщение в консоль выведено не будет.


//--------------------------------------------------------------------------------------------------------------------
//Функция, которая возвращает функцию
//В качестве результата функции мы можем также возвращать функцию.
function outer(a){
    return function(b){
        return a * b;
    }
}

// в one будет находиться функция, которую возвращает outer(3)
const one = outer(3);
// в two будет находиться функция, которую возвращает outer(4)
const two = outer(4);

// выведем в консоль результат вызова функции one(5)
console.log(one(5)); //15
// выведем в консоль результат вызова функции two(5)
console.log(two(5)); //20

//В примере, приведённом выше, мы могли также не создавать дополнительные константы one и two. А вызвать сразу после вызова первой функции вторую.

// выведем в консоль результат вызова функции one(5)
console.log(outer(3)(5)); // 15
// выведем в консоль результат вызова функции two(5)
console.log(outer(4)(5)); // 20

//Функцию, приведённую в коде мы можем также создать и так:
function outer(a){
    function inner(b){
        return a * b; 
    }
    return inner;
}

//Кроме этого в качестве результата мы можем также возвратить внешнюю функцию:
function fa(){
    return 'Привет!';
}

function fb(){
    return fa;
}

fb()(); //Привет!

//--------------------------------------------------------------------------------------------------------------------
//Рекурсия 
function fact(n){
    // условие выхода из рекурсии 
    if (n===1){
        return 1;
    }
    // возвращаем вызов функции fact(n - 1) умноженное на n
    return fact(n - 1) * n;
}
console.log(fact(5));//120


//Пример, в котором используя рекурсию выведем числа от указанного до 10:
function counter(value){
    //условие выхода из рекурсии
    if(value < 10){
        console.log(value);
       // возвращаем вызов функции counter(value + 1) 
       return counter(value + 1);
    }
}

counter(1);//1,2,3,4,5,6,7,8,9
counter(7);//7,8,9

//--------------------------------------------------------------------------------------------------------------------
//Перегрузка функций в JavaScript
//Перегрузка функций в программировании – это возможность объявлять в одном месте несколько функций с одинаковыми именами. Отличаются такие функции друг от друга параметрами. Используется перегрузка функций для того, чтобы можно было вызвать подходящую под переданные аргументы функцию.

//объявление функции bodyBgColor 
function bodyBgColor(color){
    // если параметр color имеет в качестве значения строку, то установим цвет фона body
    if(typeof color === 'string'){
        document.body.style.backgroundColor = color;
    }
    // вернём в качестве результата текущий цвет фона body
    return getComputedStyle(document.body).backgroundColor;
}
// получим текущий цвет body и выведем его в консоль
console.log(bodyBgColor());

// установим новый цвет фона body
bodyBgColor('green');


//Пример реализации «перегруженной» функции для вычисления оптимального количества ккал, которых необходимо человеку в день:
function calculateCalories(gender, height){
    let result = gender = 'man' ? (height - 100) * 20 : (height - 105) * 19;
    if(typeof arguments[2] === 'number'){
        result *= arguments[2];
    }
    return result.toFixed(0);
}

console.log(`Оптимальное кол-во ккал: ${calculateCalories('man', 185)}`);
console.log(`Оптимальное кол-во ккал: ${calculateCalories('woman', 168, 1.2)}`);
console.log(`Оптимальное кол-во ккал: ${calculateCalories('woman', 168)}`);

//--------------------------------------------------------------------------------------------------------------------
//Современные возможности
//Значение параметра по умолчанию
function bodyBgColor(color = '#009688'){
    document.body.style.backgroundColor = color;
}
// при вызове функции без указания аргументов цвет фона body будет установлен, равным '#009688'
setBGColor();
// при указании аргумента цвет фона body будет установлен в соответствии с его значением
setBGColor('red');// цвет фона будет равен red


//Функция в JavaScript в результате своего выполнения всегда возвращает результат, даже если он явно не определён с помощью оператора return. Этот результат значение undefined.

// 1. функция, не возвращающая никакого результата
function sayWelcome (userFirstName, userLastName){
    console.log("Добро пожаловать, " + userLastName + " " + userFirstName);
}
// попробуем получить результат у функции, которая ничего не возвращает
console.log(sayWelcome("Иван", "Иванов"));

// 2. функция, содержащая оператор return без значения
function sayDay (day){
    day = "Сегодня, " + day;
    return;
    //эта инструкция не выполнится, т.к. она идёт после оператора return
    console.log(day);
}
// попробуем получить результат у функции, которая содержит оператор return без значения
console.log(sayDay("21 февраля 2016г."));
