//Создание функции с использованием синтаксиса Function Expression
//Function Expression - это объявление функции, которая является частью какого-либо выражения (например, присваивания).

const имя_функции = function(параметры){
    //Инструкция 
};

//Например, создание функции sum с использованием «классического» синтаксиса (Function Declaration) и Function Expression:
//Function Declaration
function sum(num1, num2){
    return num1 + num2;
};

//Function Expression 
const sum = function(num1, num2){
    return num1 + num2;
};

