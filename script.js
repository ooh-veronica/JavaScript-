//ЗАДАНИЕ 0 
// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем “Mark”, и хотела бы поприветствовать его немного иначе.Помогите ей)


// function sayHello(name) {
//     if(name === "Mark"){
//         return "Hi  -" + name;
//     }else{
//         return "Hello - " +  name;
//     }
// }
// let name = "Mark"; 
// console.log(sayHello(name)); 

// // let name = "Oleg";
// // console.log(sayHello(name))



// ЗАДАНИЕ 1 
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.


// function min(a,b) {
//     if(a < b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(min(3,5))



// ЗАДАНИЕ 2 
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x,n) {
//     return x **n; 
// }

// console.log(pow(3,2))

//ЗАДАНИЕ 3 
// Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.


// function isEven(n){ 
//     return n % 2 === 0 ? "четное" : "нечетное"
// }

// console.log(isEven(5))
// console.log(isEven(2))


// ЗАДАНИЕ 4 
//Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки, которая передается в параметр, и возвращает новую строку без этих символов.


// function deleteChars(str){
//     return str.slice(1,-1)
// }

// console.log(deleteChars("Hello"))

// ЗАДАНИЕ 5 
// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж, и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж (передается как целое число), и возвращает реальный
// Кроме того, ваша функция должна работать и на подвальных этажах.


// function convertFloor(floor) {
//     if(floor >=2 && floor <= 12){ 
//         return floor +1 ;
//     }else if(floor = 1){ 
//         return 0;
//     }else if(floor = 13 ) { 
//         return "Такого этажа не существует";
//     }else{ 
//         return floor;
//     }
// };

// console.log(convertFloor(-2))



// ЗАДАНИЕ 6 
// Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

//1. arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// 2. index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять между собой местами (fpos и clfw нужно поменять местами)
// 3. adding - строка, которую необходимо дописать в конец к каждому элементу массива 

// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]




// function transformArray(arr, index1, index2, adding){ 
//     [arr[index1] , arr[index2]] = [arr[index2], arr[index1]];

//     let result = arr.map(item => {
//         return item + adding;
//     });

//    console.log(result)
// }

// let array = ['fngp', 'kgei', 'fpos', 'clfw'];
// transformArray(array, 2, 3, "green")


