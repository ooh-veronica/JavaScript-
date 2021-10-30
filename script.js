

// ЗАДАНИЕ 1 
// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд.


// function printMessage(n){ 
//     let intervFunc = setInterval(() => {
//         console.log('interval')
//     }, n);
// };

// console.log(printMessage(5000))

// ЗАДАНИЕ  2 
// Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”


// function seconds(){
//     let intSeconds = setInterval(() => {
//         alert("Прошло 5 секунд")
//     }, 5000);
// }

// seconds();


// ЗАДАНИЕ 3 
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// function printNumbers(from, to) { 

//     let firstNumber = from; 

//     let number = setInterval(() => {
//         alert(firstNumber); 
//         if (firstNumber == to){
//             clearInterval(number);
//         }
//         firstNumber++; 
//     }, 1000);
//  }

// printNumbers(1,5);


// ЗАДАНИЕ 4 
//По нажатию на кнопку показывать сообщение через 5 секунд, во время этих 5 секунд должно появляться слово “loading”, а после появления сообщения - скрываться


// const button = document.getElementById("button"); 

// button.addEventListener("click", function(){
    
//     let load = setTimeout(() => {
//         console.log("LOADING...");    
//     },0);

//     setTimeout(() => {
//         clearTimeout(load);
//         console.log("message");
//     }, 5000);
// });


